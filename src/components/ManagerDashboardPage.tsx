import React, { useState, useEffect, useMemo } from 'react';
import { 
  Building, Users, MessageSquare, Layers, Plus, Search, 
  Filter, Download, ArrowUpRight, CheckCircle2, Clock, 
  DollarSign, Globe, Phone, Mail, UserCheck, ShieldCheck, 
  Briefcase, Edit2, Trash2, ExternalLink, ChevronRight, RefreshCw, 
  BarChart3, ListFilter, UserPlus, Check, ArrowRight
} from 'lucide-react';
import { LeadRecord } from '../types';
import { 
  subscribeToGlobalLeads, 
  saveLeadToFirestore, 
  updateLeadInFirestore, 
  deleteLeadFromFirestore 
} from '../firebase';
import { 
  CrmClient, 
  CrmTeamMember, 
  CrmCommunication, 
  CrmService, 
  CrmClientStatus 
} from '../types/crm';
import {
  subscribeToCrmClients,
  saveCrmClientToFirestore,
  deleteCrmClientFromFirestore,
  subscribeToCrmTeam,
  saveCrmTeamMemberToFirestore,
  deleteCrmTeamMemberFromFirestore,
  subscribeToCrmCommunications,
  saveCrmCommunicationToFirestore,
  deleteCrmCommunicationFromFirestore
} from '../firebaseCrm';
import CrmUnifiedLeadsContacts from './crm/CrmUnifiedLeadsContacts';
import CrmAddLeadModal from './crm/CrmAddLeadModal';
import CrmClientModal from './crm/CrmClientModal';
import CrmTeamModal from './crm/CrmTeamModal';
import CrmCommModal from './crm/CrmCommModal';
import CrmClientDetailModal from './crm/CrmClientDetailModal';
import CrmTeamManagement from './crm/CrmTeamManagement';
import CrmCommunicationsView from './crm/CrmCommunicationsView';

interface ManagerDashboardPageProps {
  onNavigateHome?: () => void;
  onBackToHome?: () => void;
}

export default function ManagerDashboardPage({ onNavigateHome, onBackToHome }: ManagerDashboardPageProps) {
  const handleHome = onNavigateHome || onBackToHome;

  // Main Data States
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [clients, setClients] = useState<CrmClient[]>([]);
  const [teamMembers, setTeamMembers] = useState<CrmTeamMember[]>([]);
  const [communications, setCommunications] = useState<CrmCommunication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Tab State: 'unified' (default), 'clients', 'team', 'services', 'communications'
  const [activeTab, setActiveTab] = useState<'unified' | 'clients' | 'team' | 'services' | 'communications'>('unified');

  // Client Search & Filter for Clients Tab
  const [clientSearch, setClientSearch] = useState('');
  const [clientStatusFilter, setClientStatusFilter] = useState<'All' | CrmClientStatus>('All');
  const [assignedFilter, setAssignedFilter] = useState<string>('All');

  // Services View Filters
  const [serviceSearch, setServiceSearch] = useState('');
  const [serviceStatusFilter, setServiceStatusFilter] = useState<string>('All');

  // Modals
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [clientToEdit, setClientToEdit] = useState<CrmClient | null>(null);

  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState<CrmTeamMember | null>(null);

  const [isCommModalOpen, setIsCommModalOpen] = useState(false);
  const [commPrefill, setCommPrefill] = useState<{ clientId?: string; clientName: string; companyName: string } | undefined>(undefined);

  // Detail Modal for selected client
  const [selectedClientForDetail, setSelectedClientForDetail] = useState<CrmClient | null>(null);

  // Notification Toast
  const [actionSuccessMsg, setActionSuccessMsg] = useState('');

  const triggerToast = (msg: string) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(''), 4000);
  };

  // Subscribe to real-time updates from Firestore (Leads, Clients, Team, Communications)
  useEffect(() => {
    setIsLoading(true);

    // 1. Subscribe to Global Inbound Leads
    const unsubLeads = subscribeToGlobalLeads((loadedLeads) => {
      setLeads(loadedLeads);
    });

    // 2. Subscribe to CRM Clients
    const unsubClients = subscribeToCrmClients((loadedClients) => {
      setClients(loadedClients);
      setSelectedClientForDetail(prev => prev ? loadedClients.find(c => c.id === prev.id) || null : null);
      setIsLoading(false);
    });

    // 3. Subscribe to Team Members (Employees, Associates & Agents)
    const unsubTeam = subscribeToCrmTeam((loadedTeam) => {
      setTeamMembers(loadedTeam);
    });

    // 4. Subscribe to Communications
    const unsubComms = subscribeToCrmCommunications((loadedComms) => {
      setCommunications(loadedComms);
    });

    return () => {
      unsubLeads();
      unsubClients();
      unsubTeam();
      unsubComms();
    };
  }, []);

  // Handlers for Leads
  const handleSaveLead = async (lead: LeadRecord) => {
    await saveLeadToFirestore(lead);
    setLeads(prev => [lead, ...prev.filter(l => l.id !== lead.id)]);
    triggerToast(`Lead "${lead.companyName || lead.name}" recorded successfully.`);
  };

  const handleUpdateLeadStatus = async (leadId: string, newStatus: LeadRecord['status']) => {
    await updateLeadInFirestore(leadId, { status: newStatus });
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
    triggerToast(`Lead status updated to "${newStatus}".`);
  };

  const handleAssignLeadTeamMember = async (leadId: string, memberId: string, memberName: string) => {
    await updateLeadInFirestore(leadId, { assignedTo: memberName });
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, assignedTo: memberName } : l));
    triggerToast(`Lead assigned to ${memberName}.`);
  };

  const handleDeleteLead = async (leadId: string) => {
    await deleteLeadFromFirestore(leadId);
    setLeads(prev => prev.filter(l => l.id !== leadId));
    triggerToast('Lead record removed.');
  };

  // Convert Lead to Full Client Account
  const handleConvertLeadToClient = async (lead: LeadRecord) => {
    const assignedMember = teamMembers.find(m => m.name === lead.assignedTo || m.id === lead.assignedTo);
    
    // Parse estimated retainer
    let retainerAmount = 35000;
    if (lead.budget) {
      const parsed = parseInt(lead.budget.replace(/[^\d]/g, ''), 10);
      if (!isNaN(parsed) && parsed > 0) retainerAmount = parsed;
    }

    const initialService: CrmService = {
      id: `srv_${Date.now()}`,
      name: lead.primaryGoal || 'Digital Marketing & Growth Retainer',
      category: 'seo',
      status: 'In Progress',
      pricingModel: 'Monthly Retainer',
      budgetOrFee: retainerAmount,
      currency: 'INR',
      startDate: new Date().toISOString().split('T')[0],
      renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      deliverablesSummary: lead.notes || 'Full agency strategic onboarding and initial deliverables execution.',
      progressPercentage: 10
    };

    const newClient: CrmClient = {
      id: `client_from_${lead.id}`,
      companyName: lead.companyName || `${lead.name}'s Business`,
      contactPerson: lead.name,
      email: lead.email,
      phone: lead.phone || '',
      websiteUrl: lead.websiteUrl || '',
      industry: 'Digital Marketing & Growth',
      status: 'Active',
      assignedTeamMemberId: assignedMember?.id || teamMembers[0]?.id || '',
      assignedTeamMemberName: assignedMember?.name || teamMembers[0]?.name || 'Unassigned',
      servicesTaken: [initialService],
      totalMonthlyRetainer: retainerAmount,
      currency: 'INR',
      contractStartDate: new Date().toISOString().split('T')[0],
      notes: `Converted from inbound lead on ${new Date().toLocaleDateString()}. Notes: ${lead.notes || 'None'}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await saveCrmClientToFirestore(newClient);
    await updateLeadInFirestore(lead.id, { status: 'Converted' });
    setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: 'Converted' } : l));
    triggerToast(`Lead successfully converted to Active Client Account "${newClient.companyName}"!`);
    
    // Open client detail modal
    setSelectedClientForDetail(newClient);
  };

  // Handlers for Clients
  const handleSaveClient = async (client: CrmClient) => {
    await saveCrmClientToFirestore(client);
    setClients(prev => {
      const idx = prev.findIndex(c => c.id === client.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = client;
        return copy;
      }
      return [client, ...prev];
    });
    triggerToast(`Client account "${client.companyName}" saved.`);
  };

  const handleAssignClientTeamMember = async (clientId: string, memberId: string, memberName: string) => {
    const client = clients.find(c => c.id === clientId);
    if (!client) return;

    const updated: CrmClient = {
      ...client,
      assignedTeamMemberId: memberId,
      assignedTeamMemberName: memberName,
      updatedAt: new Date().toISOString()
    };

    await saveCrmClientToFirestore(updated);
    triggerToast(`Assigned ${client.companyName} to ${memberName}.`);
  };

  const handleDeleteClient = async (clientId: string) => {
    await deleteCrmClientFromFirestore(clientId);
    setClients(prev => prev.filter(c => c.id !== clientId));
    if (selectedClientForDetail?.id === clientId) {
      setSelectedClientForDetail(null);
    }
    triggerToast('Client account removed.');
  };

  // Handlers for Team Members (CRUD)
  const handleSaveTeamMember = async (member: CrmTeamMember) => {
    await saveCrmTeamMemberToFirestore(member);
    setTeamMembers(prev => {
      const idx = prev.findIndex(m => m.id === member.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = member;
        return copy;
      }
      return [member, ...prev];
    });
    triggerToast(`Team member "${member.name}" saved successfully.`);
  };

  const handleDeleteTeamMember = async (memberId: string) => {
    await deleteCrmTeamMemberFromFirestore(memberId);
    setTeamMembers(prev => prev.filter(m => m.id !== memberId));
    triggerToast('Team member removed from directory.');
  };

  // Handlers for Communications
  const handleSaveCommunication = async (comm: CrmCommunication) => {
    await saveCrmCommunicationToFirestore(comm);
    setCommunications(prev => [comm, ...prev.filter(c => c.id !== comm.id)]);
    triggerToast(`Communication logged for ${comm.companyName || comm.clientName}.`);
  };

  const handleDeleteCommunication = async (commId: string) => {
    await deleteCrmCommunicationFromFirestore(commId);
    setCommunications(prev => prev.filter(c => c.id !== commId));
    triggerToast('Communication entry removed.');
  };

  // Calculated Metrics
  const totalMonthlyRetainerINR = useMemo(() => {
    return clients
      .filter(c => c.status === 'Active' || c.status === 'Onboarding')
      .filter(c => c.currency === 'INR')
      .reduce((sum, c) => sum + (c.totalMonthlyRetainer || 0), 0);
  }, [clients]);

  const totalMonthlyRetainerUSD = useMemo(() => {
    return clients
      .filter(c => c.status === 'Active' || c.status === 'Onboarding')
      .filter(c => c.currency === 'USD')
      .reduce((sum, c) => sum + (c.totalMonthlyRetainer || 0), 0);
  }, [clients]);

  const totalActiveClients = useMemo(() => {
    return clients.filter(c => c.status === 'Active').length;
  }, [clients]);

  const totalOnboardingClients = useMemo(() => {
    return clients.filter(c => c.status === 'Onboarding').length;
  }, [clients]);

  // All Services Taken across all clients
  const allServicesTaken = useMemo(() => {
    const list: Array<{
      client: CrmClient;
      service: CrmService;
    }> = [];

    clients.forEach(c => {
      c.servicesTaken.forEach(s => {
        list.push({ client: c, service: s });
      });
    });

    return list;
  }, [clients]);

  const activeServicesCount = useMemo(() => {
    return allServicesTaken.filter(item => item.service.status === 'Active' || item.service.status === 'In Progress').length;
  }, [allServicesTaken]);

  // Filtered Services for Services tab
  const filteredServicesTaken = useMemo(() => {
    return allServicesTaken.filter(({ client, service }) => {
      const q = serviceSearch.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        service.name.toLowerCase().includes(q) ||
        client.companyName.toLowerCase().includes(q) ||
        service.deliverablesSummary.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q);

      const matchesStatus = serviceStatusFilter === 'All' || service.status === serviceStatusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [allServicesTaken, serviceSearch, serviceStatusFilter]);

  // Export Clients CSV
  const handleExportClientsCsv = () => {
    const headers = [
      'Client ID', 'Company Name', 'Contact Person', 'Email', 'Phone',
      'Website', 'Industry', 'Status', 'Account Manager', 'Monthly Retainer',
      'Currency', 'Contract Start Date', 'Active Services Count'
    ];

    const rows = clients.map(c => [
      c.id,
      `"${c.companyName.replace(/"/g, '""')}"`,
      `"${c.contactPerson.replace(/"/g, '""')}"`,
      c.email,
      `"${c.phone}"`,
      `"${c.websiteUrl}"`,
      `"${c.industry}"`,
      c.status,
      `"${c.assignedTeamMemberName}"`,
      c.totalMonthlyRetainer,
      c.currency,
      c.contractStartDate,
      c.servicesTaken.length
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `akgls_agency_clients_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export Services Taken CSV
  const handleExportServicesCsv = () => {
    const headers = [
      'Client Company', 'Service Name', 'Category', 'Status', 'Pricing Model',
      'Fee/Retainer', 'Currency', 'Progress %', 'Start Date', 'Renewal Date', 'Deliverables'
    ];

    const rows = allServicesTaken.map(({ client, service }) => [
      `"${client.companyName.replace(/"/g, '""')}"`,
      `"${service.name.replace(/"/g, '""')}"`,
      service.category,
      service.status,
      service.pricingModel,
      service.budgetOrFee,
      service.currency,
      service.progressPercentage,
      service.startDate,
      service.renewalDate || '',
      `"${service.deliverablesSummary.replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `akgls_services_taken_portfolio_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 pb-24 font-sans selection:bg-brand-teal selection:text-slate-950">
      
      {/* Action Notification Toast */}
      {actionSuccessMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-brand-teal/50 text-brand-teal px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-bold animate-fade-in backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{actionSuccessMsg}</span>
        </div>
      )}

      {/* Top Header Navbar */}
      <header className="sticky top-0 z-30 bg-[#0a0f1d]/95 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-teal/20 via-brand-indigo/20 to-teal-500/20 border border-brand-teal/40 flex items-center justify-center text-brand-teal shadow-lg shadow-teal-500/10">
              <Briefcase className="w-5 h-5 text-brand-teal" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-display">
                  AKGLS Group Agency Manager CRM
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-brand-teal/15 text-brand-teal border border-brand-teal/30 uppercase tracking-wide">
                  Operations & CRM
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Unified Leads, Client Accounts, Services Taken & Staff/Associates Management
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAddLeadModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-orange text-white hover:bg-orange-500 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/10"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Add Lead</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setClientToEdit(null);
                setIsClientModalOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-teal text-slate-950 hover:bg-teal-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-teal-500/10"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Client</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMemberToEdit(null);
                setIsTeamModalOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-indigo text-white hover:bg-indigo-600 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-indigo-500/10"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Add Associate / Staff</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setCommPrefill(undefined);
                setIsCommModalOpen(true);
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-brand-teal" />
              <span>Log Comm</span>
            </button>

            {handleHome && (
              <button
                type="button"
                onClick={handleHome}
                className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              >
                Website Home
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        
        {/* Operational Agency Metric Cards Banner */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          {/* Card 1: Unified Leads & Inquiries */}
          <div className="bg-[#0e1629] border border-slate-750 rounded-2xl p-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Leads & Inquiries</span>
              <Clock className="w-4 h-4 text-brand-orange" />
            </div>
            <div className="text-2xl font-black text-brand-orange font-mono tracking-tight mt-1">
              {leads.length}
            </div>
            <div className="text-[11px] text-slate-400">
              {leads.filter(l => l.status === 'New').length} new • {leads.filter(l => l.status === 'Converted').length} converted
            </div>
          </div>

          {/* Card 2: Managed Clients */}
          <div className="bg-[#0e1629] border border-slate-750 rounded-2xl p-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Agency Accounts</span>
              <Building className="w-4 h-4 text-brand-indigo" />
            </div>
            <div className="text-2xl font-black text-white font-mono tracking-tight mt-1">
              {totalActiveClients} <span className="text-sm font-semibold text-slate-400">/ {clients.length}</span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{totalOnboardingClients} onboarding</span>
            </div>
          </div>

          {/* Card 3: Agency Workforce (Employees & Associates) */}
          <div className="bg-[#0e1629] border border-slate-750 rounded-2xl p-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Staff & Associates</span>
              <Users className="w-4 h-4 text-brand-teal" />
            </div>
            <div className="text-2xl font-black text-brand-teal font-mono tracking-tight mt-1">
              {teamMembers.length}
            </div>
            <div className="text-[11px] text-slate-400">
              {teamMembers.filter(m => m.type === 'Internal Employee').length} staff • {teamMembers.filter(m => m.type === 'Agent / Associate').length} agents
            </div>
          </div>

          {/* Card 4: Services In Delivery */}
          <div className="bg-[#0e1629] border border-slate-750 rounded-2xl p-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Services in Delivery</span>
              <Layers className="w-4 h-4 text-brand-purple" />
            </div>
            <div className="text-2xl font-black text-brand-purple font-mono tracking-tight mt-1">
              {activeServicesCount}
            </div>
            <div className="text-[11px] text-slate-400">
              {allServicesTaken.length} total contracts
            </div>
          </div>

          {/* Card 5: Monthly Retainer Pipeline */}
          <div className="bg-[#0e1629] border border-slate-750 rounded-2xl p-4 space-y-1 col-span-2 md:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Monthly Retainer Revenue</span>
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono tracking-tight mt-1">
              ₹{totalMonthlyRetainerINR.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400">
              {totalMonthlyRetainerUSD > 0 ? `+ $${totalMonthlyRetainerUSD.toLocaleString()} USD` : 'Monthly recurring'}
            </div>
          </div>
        </div>

        {/* Primary View Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-1">
          <div className="flex items-center gap-2 overflow-x-auto">
            {/* Tab 1: Unified Leads & Contacts */}
            <button
              type="button"
              onClick={() => setActiveTab('unified')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'unified'
                  ? 'bg-brand-teal text-slate-950 shadow-md shadow-teal-500/10'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <ListFilter className="w-4 h-4" />
              <span>Unified Leads & Contacts ({leads.length + clients.length})</span>
            </button>

            {/* Tab 2: Clients & Accounts */}
            <button
              type="button"
              onClick={() => setActiveTab('clients')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'clients'
                  ? 'bg-brand-teal text-slate-950 shadow-md shadow-teal-500/10'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>Clients & Retainers ({clients.length})</span>
            </button>

            {/* Tab 3: Employees & Associates CRUD */}
            <button
              type="button"
              onClick={() => setActiveTab('team')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'team'
                  ? 'bg-brand-teal text-slate-950 shadow-md shadow-teal-500/10'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Employees & Associates ({teamMembers.length})</span>
            </button>

            {/* Tab 4: Services Taken Pipeline */}
            <button
              type="button"
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-brand-teal text-slate-950 shadow-md shadow-teal-500/10'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Services Taken Pipeline ({allServicesTaken.length})</span>
            </button>

            {/* Tab 5: Communications Log */}
            <button
              type="button"
              onClick={() => setActiveTab('communications')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'communications'
                  ? 'bg-brand-teal text-slate-950 shadow-md shadow-teal-500/10'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Communications Log ({communications.length})</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* VIEW 1: UNIFIED LEADS, CONTACTS & SERVICES TAKEN */}
        {/* ============================================================== */}
        {activeTab === 'unified' && (
          <CrmUnifiedLeadsContacts
            leads={leads}
            clients={clients}
            teamMembers={teamMembers}
            onSelectClient={(client) => setSelectedClientForDetail(client)}
            onConvertLeadToClient={handleConvertLeadToClient}
            onUpdateLeadStatus={handleUpdateLeadStatus}
            onAssignLeadTeamMember={handleAssignLeadTeamMember}
            onAssignClientTeamMember={handleAssignClientTeamMember}
            onDeleteLead={handleDeleteLead}
            onDeleteClient={handleDeleteClient}
            onOpenAddModal={() => setIsAddLeadModalOpen(true)}
            onOpenCommModal={(prefill) => {
              setCommPrefill(prefill);
              setIsCommModalOpen(true);
            }}
            onManageServices={(client) => setSelectedClientForDetail(client)}
          />
        )}

        {/* ============================================================== */}
        {/* VIEW 2: CLIENTS & ACCOUNTS LISTING */}
        {/* ============================================================== */}
        {activeTab === 'clients' && (
          <div className="space-y-4">
            {/* Search, Status, and Manager Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#0e1629] p-4 rounded-2xl border border-slate-750">
              <div className="flex flex-1 flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search client brand, contact person, email, or niche..."
                    value={clientSearch}
                    onChange={(e) => setClientSearch(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-750 rounded-xl pl-10 pr-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal font-medium"
                  />
                </div>

                <select
                  value={clientStatusFilter}
                  onChange={(e) => setClientStatusFilter(e.target.value as any)}
                  className="bg-slate-900 border border-slate-750 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-brand-teal"
                >
                  <option value="All">All Statuses</option>
                  <option value="Active">Active Accounts</option>
                  <option value="Onboarding">Onboarding</option>
                  <option value="Proposal">Proposal</option>
                  <option value="Paused">Paused</option>
                  <option value="Past">Past Clients</option>
                </select>

                <select
                  value={assignedFilter}
                  onChange={(e) => setAssignedFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-750 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-brand-teal"
                >
                  <option value="All">All Managers & Agents</option>
                  {teamMembers.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.type === 'Internal Employee' ? 'Staff' : 'Associate'})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleExportClientsCsv}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-750 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-brand-teal" />
                  <span>Export CSV</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setClientToEdit(null);
                    setIsClientModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-extrabold bg-brand-teal text-slate-950 hover:bg-teal-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-teal-500/10"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Client</span>
                </button>
              </div>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients
                .filter(c => {
                  const q = clientSearch.toLowerCase();
                  const matchesSearch = 
                    c.companyName.toLowerCase().includes(q) ||
                    c.contactPerson.toLowerCase().includes(q) ||
                    c.email.toLowerCase().includes(q) ||
                    c.industry.toLowerCase().includes(q);
                  const matchesStatus = clientStatusFilter === 'All' || c.status === clientStatusFilter;
                  const matchesAssigned = assignedFilter === 'All' || c.assignedTeamMemberId === assignedFilter;
                  return matchesSearch && matchesStatus && matchesAssigned;
                })
                .map(client => (
                  <div 
                    key={client.id}
                    onClick={() => setSelectedClientForDetail(client)}
                    className="bg-[#0e1629] border border-slate-750 hover:border-brand-teal/50 rounded-2xl p-5 space-y-4 transition-all cursor-pointer shadow-lg hover:shadow-teal-500/5 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                          {client.industry}
                        </span>
                        <h3 className="text-base font-extrabold text-white group-hover:text-brand-teal transition-colors">
                          {client.companyName}
                        </h3>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-bold border ${
                        client.status === 'Active' 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : client.status === 'Onboarding'
                          ? 'bg-brand-teal/10 text-brand-teal border-brand-teal/30'
                          : client.status === 'Proposal'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {client.status}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-slate-300">
                      <div className="font-semibold text-slate-200">{client.contactPerson}</div>
                      <div className="text-slate-400 text-[11px] truncate">{client.email}</div>
                      <div className="text-slate-400 text-[11px]">{client.phone}</div>
                    </div>

                    {/* Services Taken Badges */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                        Services Taken ({client.servicesTaken.length})
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {client.servicesTaken.map(s => (
                          <span 
                            key={s.id}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900 border border-slate-750 text-slate-300"
                          >
                            {s.name} ({s.progressPercentage}%)
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Retainer & Assigned Associate */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                      <div>
                        <span className="text-[9px] text-slate-500 uppercase font-mono block">Monthly Retainer</span>
                        <span className="font-mono font-extrabold text-brand-teal text-sm">
                          {client.currency === 'USD' ? '$' : '₹'}{client.totalMonthlyRetainer.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] text-slate-500 uppercase font-mono block">Assigned Lead</span>
                        <span className="font-semibold text-slate-300 text-xs">
                          {client.assignedTeamMemberName}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: EMPLOYEES, ASSOCIATES & AGENTS CRUD */}
        {/* ============================================================== */}
        {activeTab === 'team' && (
          <CrmTeamManagement
            teamMembers={teamMembers}
            clients={clients}
            onSaveMember={handleSaveTeamMember}
            onDeleteMember={handleDeleteTeamMember}
            onSelectClient={(client) => setSelectedClientForDetail(client)}
          />
        )}

        {/* ============================================================== */}
        {/* VIEW 4: SERVICES TAKEN PIPELINE */}
        {/* ============================================================== */}
        {activeTab === 'services' && (
          <div className="space-y-4">
            {/* Filter Bar */}
            <div className="bg-[#0e1629] border border-slate-750 rounded-2xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-1 items-center gap-3">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search services taken, client company, deliverables..."
                    value={serviceSearch}
                    onChange={(e) => setServiceSearch(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-750 rounded-xl pl-10 pr-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <select
                  value={serviceStatusFilter}
                  onChange={(e) => setServiceStatusFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-750 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-brand-teal"
                >
                  <option value="All">All Service Statuses</option>
                  <option value="Active">Active</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Completed">Completed</option>
                  <option value="Paused">Paused</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleExportServicesCsv}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <Download className="w-3.5 h-3.5 text-brand-teal" />
                <span>Export Services CSV</span>
              </button>
            </div>

            {/* Services Table */}
            <div className="bg-[#0e1629] border border-slate-750 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <th className="py-3.5 px-4">Client Brand</th>
                      <th className="py-3.5 px-4">Service Name & Category</th>
                      <th className="py-3.5 px-4">Status & Progress</th>
                      <th className="py-3.5 px-4">Pricing Model & Retainer</th>
                      <th className="py-3.5 px-4">Renewal Date</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredServicesTaken.map(({ client, service }) => (
                      <tr key={`${client.id}_${service.id}`} className="hover:bg-slate-850/60 transition-colors">
                        <td className="py-3.5 px-4">
                          <button
                            type="button"
                            onClick={() => setSelectedClientForDetail(client)}
                            className="font-extrabold text-white hover:text-brand-teal transition-colors text-left"
                          >
                            {client.companyName}
                          </button>
                          <div className="text-[11px] text-slate-400">{client.contactPerson}</div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-200">{service.name}</div>
                          <span className="text-[10px] text-slate-400 uppercase font-mono">{service.category}</span>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="space-y-1 max-w-[140px]">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-semibold text-slate-300">{service.status}</span>
                              <span className="font-mono text-brand-teal font-bold">{service.progressPercentage}%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                              <div 
                                className="bg-brand-teal h-full rounded-full" 
                                style={{ width: `${service.progressPercentage}%` }} 
                              />
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-mono font-bold text-slate-200">
                            {service.currency === 'USD' ? '$' : '₹'}{service.budgetOrFee.toLocaleString()}
                          </div>
                          <div className="text-[10px] text-slate-500">{service.pricingModel}</div>
                        </td>

                        <td className="py-3.5 px-4 text-slate-300 font-mono">
                          {service.renewalDate ? new Date(service.renewalDate).toLocaleDateString() : 'Rolling'}
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <button
                            type="button"
                            onClick={() => setSelectedClientForDetail(client)}
                            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-brand-teal hover:text-slate-950 font-bold text-xs text-slate-300 transition-colors cursor-pointer"
                          >
                            View & Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 5: COMMUNICATIONS LOG */}
        {/* ============================================================== */}
        {activeTab === 'communications' && (
          <CrmCommunicationsView
            communications={communications}
            clients={clients}
            teamMembers={teamMembers}
            onSaveCommunication={handleSaveCommunication}
            onDeleteCommunication={handleDeleteCommunication}
            onSelectClient={(client) => setSelectedClientForDetail(client)}
          />
        )}

      </main>

      {/* MODAL 1: Add New Lead / Contact */}
      <CrmAddLeadModal
        isOpen={isAddLeadModalOpen}
        onClose={() => setIsAddLeadModalOpen(false)}
        onSaveLead={handleSaveLead}
        teamMembers={teamMembers}
      />

      {/* MODAL 2: Create / Edit Client Account */}
      <CrmClientModal
        isOpen={isClientModalOpen}
        onClose={() => {
          setIsClientModalOpen(false);
          setClientToEdit(null);
        }}
        onSave={handleSaveClient}
        clientToEdit={clientToEdit}
        teamMembers={teamMembers}
      />

      {/* MODAL 3: Team Member (Employee, Associate & Agent) CRUD Modal */}
      <CrmTeamModal
        isOpen={isTeamModalOpen}
        onClose={() => {
          setIsTeamModalOpen(false);
          setMemberToEdit(null);
        }}
        onSave={handleSaveTeamMember}
        memberToEdit={memberToEdit}
      />

      {/* MODAL 4: Log Communication Modal */}
      <CrmCommModal
        isOpen={isCommModalOpen}
        onClose={() => {
          setIsCommModalOpen(false);
          setCommPrefill(undefined);
        }}
        onSave={handleSaveCommunication}
        clients={clients}
        teamMembers={teamMembers}
        preselectedClientId={commPrefill?.clientId}
      />

      {/* MODAL 5: Client Detail & Services Taken Management Modal */}
      {selectedClientForDetail && (
        <CrmClientDetailModal
          isOpen={!!selectedClientForDetail}
          onClose={() => setSelectedClientForDetail(null)}
          client={selectedClientForDetail}
          teamMembers={teamMembers}
          communications={communications.filter(c => c.clientId === selectedClientForDetail.id || c.companyName === selectedClientForDetail.companyName)}
          onUpdateClient={handleSaveClient}
          onSaveCommunication={handleSaveCommunication}
          onDeleteCommunication={handleDeleteCommunication}
          onEditClientInfo={(client) => {
            setClientToEdit(client);
            setIsClientModalOpen(true);
          }}
        />
      )}

    </div>
  );
}
