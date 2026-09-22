import React, { useState, useMemo } from 'react';
import { 
  Users, Search, Filter, Download, Plus, Mail, Phone, Globe, 
  ExternalLink, CheckCircle2, Clock, AlertCircle, MessageSquare, 
  Briefcase, UserCheck, Layers, ChevronDown, ChevronRight, 
  ArrowUpRight, Trash2, Edit2, ArrowRight, ShieldCheck, DollarSign,
  MessageCircle
} from 'lucide-react';
import { LeadRecord } from '../../types';
import { CrmClient, CrmTeamMember, CrmService, CrmCommunication } from '../../types/crm';

export interface UnifiedContactItem {
  id: string;
  sourceType: 'lead' | 'client';
  name: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  websiteUrl: string;
  industryOrGoal: string;
  status: string;
  assignedTeamMemberId?: string;
  assignedTeamMemberName?: string;
  dateCreated: string;
  servicesTakenOrInterested: Array<{
    name: string;
    category?: string;
    budgetOrFee?: number;
    currency?: 'INR' | 'USD';
    status?: string;
    progressPercentage?: number;
  }>;
  totalValue?: string;
  notes?: string;
  rawLead?: LeadRecord;
  rawClient?: CrmClient;
}

interface CrmUnifiedLeadsContactsProps {
  leads: LeadRecord[];
  clients: CrmClient[];
  teamMembers: CrmTeamMember[];
  onSelectClient?: (client: CrmClient) => void;
  onSelectLead?: (lead: LeadRecord) => void;
  onConvertLeadToClient?: (lead: LeadRecord) => void;
  onUpdateLeadStatus?: (leadId: string, newStatus: LeadRecord['status']) => void;
  onAssignLeadTeamMember?: (leadId: string, memberId: string, memberName: string) => void;
  onAssignClientTeamMember?: (clientId: string, memberId: string, memberName: string) => void;
  onDeleteLead?: (leadId: string) => void;
  onDeleteClient?: (clientId: string) => void;
  onOpenAddModal?: () => void;
  onOpenCommModal?: (prefill: { clientId?: string; clientName: string; companyName: string }) => void;
  onManageServices?: (client: CrmClient) => void;
}

export default function CrmUnifiedLeadsContacts({
  leads,
  clients,
  teamMembers,
  onSelectClient,
  onSelectLead,
  onConvertLeadToClient,
  onUpdateLeadStatus,
  onAssignLeadTeamMember,
  onAssignClientTeamMember,
  onDeleteLead,
  onDeleteClient,
  onOpenAddModal,
  onOpenCommModal,
  onManageServices
}: CrmUnifiedLeadsContactsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'lead' | 'client'>('all');
  const [assignedFilter, setAssignedFilter] = useState<string>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  // Combine Leads & Clients into a Unified List
  const unifiedItems: UnifiedContactItem[] = useMemo(() => {
    const items: UnifiedContactItem[] = [];

    // 1. Map Active Clients
    clients.forEach((c) => {
      items.push({
        id: `client_${c.id}`,
        sourceType: 'client',
        name: c.companyName,
        companyName: c.companyName,
        contactPerson: c.contactPerson,
        email: c.email,
        phone: c.phone,
        websiteUrl: c.websiteUrl,
        industryOrGoal: c.industry || 'Digital Services',
        status: c.status,
        assignedTeamMemberId: c.assignedTeamMemberId,
        assignedTeamMemberName: c.assignedTeamMemberName,
        dateCreated: c.createdAt || c.contractStartDate,
        servicesTakenOrInterested: c.servicesTaken.map(s => ({
          name: s.name,
          category: s.category,
          budgetOrFee: s.budgetOrFee,
          currency: s.currency,
          status: s.status,
          progressPercentage: s.progressPercentage
        })),
        totalValue: c.totalMonthlyRetainer ? `${c.currency === 'USD' ? '$' : '₹'}${c.totalMonthlyRetainer.toLocaleString()}/mo` : 'Retainer Active',
        notes: c.notes,
        rawClient: c
      });
    });

    // 2. Map Inbound Leads
    leads.forEach((l) => {
      // Find matching assigned member if any
      const assigned = teamMembers.find(m => m.id === l.assignedTo || m.name === l.assignedTo);

      items.push({
        id: `lead_${l.id}`,
        sourceType: 'lead',
        name: l.companyName || l.name,
        companyName: l.companyName || (l.name ? `${l.name}'s Project` : 'Inbound Inquiry'),
        contactPerson: l.name,
        email: l.email,
        phone: l.phone || '',
        websiteUrl: l.websiteUrl || '',
        industryOrGoal: l.primaryGoal || 'Consultation & Growth',
        status: l.status,
        assignedTeamMemberId: assigned?.id,
        assignedTeamMemberName: assigned?.name || (l.assignedTo && l.assignedTo !== 'Unassigned' ? l.assignedTo : undefined),
        dateCreated: l.time,
        servicesTakenOrInterested: [
          {
            name: l.primaryGoal || 'Agency Services Evaluation',
            status: l.status === 'Converted' ? 'Active' : 'Prospective Inquiry',
            budgetOrFee: l.budget ? parseInt(l.budget.replace(/[^\d]/g, '')) || undefined : undefined,
            currency: 'INR'
          }
        ],
        totalValue: l.budget ? l.budget : 'Project Quote Requested',
        notes: l.notes,
        rawLead: l
      });
    });

    // Sort by date descending (newest first)
    return items.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
  }, [leads, clients, teamMembers]);

  // Filter items
  const filteredItems = useMemo(() => {
    return unifiedItems.filter((item) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.companyName.toLowerCase().includes(q) ||
        item.contactPerson.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        item.websiteUrl.toLowerCase().includes(q) ||
        item.industryOrGoal.toLowerCase().includes(q) ||
        item.servicesTakenOrInterested.some(s => s.name.toLowerCase().includes(q));

      // Type filter
      const matchesType = typeFilter === 'all' || item.sourceType === typeFilter;

      // Assigned filter
      const matchesAssigned = 
        assignedFilter === 'all' ||
        (assignedFilter === 'unassigned' && !item.assignedTeamMemberId && !item.assignedTeamMemberName) ||
        item.assignedTeamMemberId === assignedFilter ||
        item.assignedTeamMemberName === assignedFilter;

      // Service category filter
      const matchesService = 
        serviceFilter === 'all' ||
        item.servicesTakenOrInterested.some(s => 
          (s.category && s.category.toLowerCase().includes(serviceFilter.toLowerCase())) ||
          s.name.toLowerCase().includes(serviceFilter.toLowerCase())
        );

      return matchesSearch && matchesType && matchesAssigned && matchesService;
    });
  }, [unifiedItems, searchQuery, typeFilter, assignedFilter, serviceFilter]);

  // Quick export all filtered records to CSV
  const handleExportCSV = () => {
    const headers = [
      'Type',
      'Company / Brand',
      'Contact Person',
      'Email',
      'Phone',
      'Website',
      'Status',
      'Services Taken / Interested',
      'Retainer or Budget',
      'Assigned Associate / Agent',
      'Created Date'
    ];

    const rows = filteredItems.map((item) => [
      item.sourceType === 'client' ? 'Active Client Account' : 'Inbound Lead',
      `"${item.companyName.replace(/"/g, '""')}"`,
      `"${item.contactPerson.replace(/"/g, '""')}"`,
      item.email,
      `"${item.phone || ''}"`,
      `"${item.websiteUrl || ''}"`,
      item.status,
      `"${item.servicesTakenOrInterested.map(s => s.name).join('; ')}"`,
      `"${item.totalValue || ''}"`,
      `"${item.assignedTeamMemberName || 'Unassigned'}"`,
      new Date(item.dateCreated).toLocaleDateString()
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `akgls_unified_crm_leads_contacts_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {/* Top Controls: Search, Type Filter, Team Member Filter, Service Filter, Actions */}
      <div className="bg-[#0e1629] border border-slate-750 rounded-2xl p-4 space-y-3.5">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Search leads, client contacts, services taken, phone, email, website..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-750 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal font-medium"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleExportCSV}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Download filtered leads, contacts & services taken as CSV"
            >
              <Download className="w-3.5 h-3.5 text-brand-teal" />
              <span>Export CSV</span>
            </button>

            {onOpenAddModal && (
              <button
                type="button"
                onClick={onOpenAddModal}
                className="px-4 py-2 rounded-xl text-xs font-extrabold bg-brand-teal text-slate-950 hover:bg-teal-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-teal-500/10"
              >
                <Plus className="w-4 h-4" />
                <span>Add Contact / Lead</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills Row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-800/80 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {/* Record Type Filter */}
            <div className="flex items-center bg-slate-900 rounded-xl p-0.5 border border-slate-750">
              <button
                type="button"
                onClick={() => setTypeFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  typeFilter === 'all' ? 'bg-brand-teal text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Unified ({unifiedItems.length})
              </button>
              <button
                type="button"
                onClick={() => setTypeFilter('lead')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  typeFilter === 'lead' ? 'bg-brand-orange text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Leads ({leads.length})
              </button>
              <button
                type="button"
                onClick={() => setTypeFilter('client')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  typeFilter === 'client' ? 'bg-brand-indigo text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Client Contacts ({clients.length})
              </button>
            </div>

            {/* Assigned Associate / Agent Filter */}
            <select
              value={assignedFilter}
              onChange={(e) => setAssignedFilter(e.target.value)}
              className="bg-slate-900 border border-slate-750 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-brand-teal cursor-pointer"
            >
              <option value="all">All Managers & Agents</option>
              <option value="unassigned">⚠️ Unassigned</option>
              {teamMembers.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.role.split(' ')[0]} - {m.type === 'Internal Employee' ? 'Staff' : 'Associate'})
                </option>
              ))}
            </select>

            {/* Service Category Filter */}
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="bg-slate-900 border border-slate-750 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-brand-teal cursor-pointer"
            >
              <option value="all">All Services Taken</option>
              <option value="web">Web & Shopify Dev</option>
              <option value="seo">Organic SEO</option>
              <option value="ppc">Google & Meta Ads</option>
              <option value="geo">AI & GEO Optimization</option>
              <option value="content">Content & Copy</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          <div className="text-[11px] text-slate-400 font-mono">
            Showing <span className="text-brand-teal font-bold">{filteredItems.length}</span> records
          </div>
        </div>
      </div>

      {/* Unified Table */}
      <div className="bg-[#0e1629] border border-slate-750 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Contact & Company</th>
                <th className="py-3.5 px-4">Type & Status</th>
                <th className="py-3.5 px-4">Services Taken / Deliverables</th>
                <th className="py-3.5 px-4">Assigned Manager / Agent</th>
                <th className="py-3.5 px-4">Value / Retainer</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    <Users className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-slate-300">No records found matching your filters.</p>
                    <p className="text-xs text-slate-500 mt-1">Try resetting search keywords or service filter.</p>
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => {
                  const isExpanded = expandedItemId === item.id;
                  const isClient = item.sourceType === 'client';

                  return (
                    <React.Fragment key={item.id}>
                      <tr className={`hover:bg-slate-850/60 transition-colors ${isExpanded ? 'bg-slate-900/60' : ''}`}>
                        {/* Col 1: Contact & Company */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-white text-sm">
                                {item.companyName}
                              </span>
                              {item.websiteUrl && (
                                <a
                                  href={item.websiteUrl.startsWith('http') ? item.websiteUrl : `https://${item.websiteUrl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-slate-400 hover:text-brand-teal transition-colors"
                                  title="Visit website"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                            </div>

                            <div className="text-slate-300 font-medium flex items-center gap-1.5">
                              <span>{item.contactPerson}</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-400 text-[11px]">{item.industryOrGoal}</span>
                            </div>

                            {/* Contact Badges */}
                            <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px] text-slate-400">
                              {item.email && (
                                <a 
                                  href={`mailto:${item.email}`}
                                  className="hover:text-brand-teal flex items-center gap-1 transition-colors"
                                  title={`Email ${item.email}`}
                                >
                                  <Mail className="w-3 h-3 text-slate-500" />
                                  <span>{item.email}</span>
                                </a>
                              )}
                              {item.phone && (
                                <a 
                                  href={`tel:${item.phone.replace(/[^\d+]/g, '')}`}
                                  className="hover:text-brand-teal flex items-center gap-1 transition-colors"
                                  title={`Call ${item.phone}`}
                                >
                                  <Phone className="w-3 h-3 text-slate-500" />
                                  <span>{item.phone}</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Col 2: Type & Status */}
                        <td className="py-3.5 px-4 align-top">
                          <div className="space-y-1.5">
                            <div>
                              {isClient ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-brand-indigo/20 border border-brand-indigo/30 text-indigo-300 font-mono">
                                  <Briefcase className="w-3 h-3 text-brand-indigo" />
                                  Client Account
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-brand-orange/20 border border-brand-orange/30 text-orange-300 font-mono">
                                  <Clock className="w-3 h-3 text-brand-orange" />
                                  Inbound Lead
                                </span>
                              )}
                            </div>

                            {/* Status Pill or Selector */}
                            <div>
                              {isClient ? (
                                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold border ${
                                  item.status === 'Active' 
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                    : item.status === 'Onboarding'
                                    ? 'bg-brand-teal/10 text-brand-teal border-brand-teal/30'
                                    : item.status === 'Proposal'
                                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                                    : 'bg-slate-800 text-slate-400 border-slate-700'
                                }`}>
                                  {item.status}
                                </span>
                              ) : (
                                <select
                                  value={item.status}
                                  onChange={(e) => {
                                    if (onUpdateLeadStatus && item.rawLead) {
                                      onUpdateLeadStatus(item.rawLead.id, e.target.value as any);
                                    }
                                  }}
                                  className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-0.5 text-[11px] font-semibold text-slate-300 focus:outline-none focus:border-brand-teal"
                                >
                                  <option value="New">New Lead</option>
                                  <option value="Contacted">Contacted</option>
                                  <option value="Proposal Sent">Proposal Sent</option>
                                  <option value="In Progress">In Progress</option>
                                  <option value="Converted">Converted</option>
                                  <option value="Spam">Spam</option>
                                  <option value="Archived">Archived</option>
                                </select>
                              )}
                            </div>

                            <div className="text-[10px] text-slate-500 font-mono">
                              {new Date(item.dateCreated).toLocaleDateString()}
                            </div>
                          </div>
                        </td>

                        {/* Col 3: Services Taken / Deliverables */}
                        <td className="py-3.5 px-4 align-top">
                          <div className="space-y-1.5 max-w-xs">
                            {item.servicesTakenOrInterested.length === 0 ? (
                              <span className="text-slate-500 text-xs italic">No specific service assigned</span>
                            ) : (
                              item.servicesTakenOrInterested.slice(0, 3).map((srv, idx) => (
                                <div key={idx} className="flex items-center justify-between gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80">
                                  <div className="truncate font-semibold text-slate-200 text-[11px]">
                                    {srv.name}
                                  </div>
                                  {srv.progressPercentage !== undefined && (
                                    <span className="text-[10px] font-mono text-brand-teal font-bold shrink-0">
                                      {srv.progressPercentage}%
                                    </span>
                                  )}
                                </div>
                              ))
                            )}

                            {item.servicesTakenOrInterested.length > 3 && (
                              <button
                                type="button"
                                onClick={() => setExpandedItemId(isExpanded ? null : item.id)}
                                className="text-[10.5px] font-bold text-brand-teal hover:underline flex items-center gap-1"
                              >
                                <span>+{item.servicesTakenOrInterested.length - 3} more services</span>
                                <ChevronDown className="w-3 h-3" />
                              </button>
                            )}

                            {isClient && onManageServices && item.rawClient && (
                              <button
                                type="button"
                                onClick={() => onManageServices(item.rawClient!)}
                                className="text-[10px] font-semibold text-slate-400 hover:text-brand-teal flex items-center gap-1 mt-1 transition-colors"
                              >
                                <Layers className="w-3 h-3 text-brand-teal" />
                                <span>Manage Services Taken</span>
                              </button>
                            )}
                          </div>
                        </td>

                        {/* Col 4: Assigned Manager, Associate or Agent */}
                        <td className="py-3.5 px-4 align-top">
                          <div className="space-y-1">
                            <select
                              value={item.assignedTeamMemberId || item.assignedTeamMemberName || ''}
                              onChange={(e) => {
                                const selectedId = e.target.value;
                                const member = teamMembers.find(m => m.id === selectedId);
                                if (isClient && onAssignClientTeamMember && item.rawClient) {
                                  onAssignClientTeamMember(item.rawClient.id, selectedId, member?.name || 'Unassigned');
                                } else if (!isClient && onAssignLeadTeamMember && item.rawLead) {
                                  onAssignLeadTeamMember(item.rawLead.id, selectedId, member?.name || 'Unassigned');
                                }
                              }}
                              className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-200 focus:outline-none focus:border-brand-teal max-w-[170px]"
                            >
                              <option value="">⚠️ Unassigned</option>
                              {teamMembers.map((m) => (
                                <option key={m.id} value={m.id}>
                                  {m.name} ({m.type === 'Internal Employee' ? 'Staff' : 'Associate'})
                                </option>
                              ))}
                            </select>

                            <div className="text-[10px] text-slate-500 flex items-center gap-1">
                              <UserCheck className="w-3 h-3 text-slate-500" />
                              <span>Internal Account Lead</span>
                            </div>
                          </div>
                        </td>

                        {/* Col 5: Value / Retainer */}
                        <td className="py-3.5 px-4 align-top">
                          <div className="space-y-1">
                            <div className="font-mono font-bold text-slate-200 text-xs">
                              {item.totalValue}
                            </div>
                            <span className="text-[10px] text-slate-500 block uppercase font-mono">
                              {isClient ? 'Monthly Contract' : 'Budget Estimate'}
                            </span>
                          </div>
                        </td>

                        {/* Col 6: Actions */}
                        <td className="py-3.5 px-4 align-top text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* WhatsApp Direct Action */}
                            {item.phone && (
                              <a
                                href={`https://wa.me/${item.phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(`Hello ${item.contactPerson}, this is from AKGLS Group regarding your services.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                                title="Chat on WhatsApp"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                              </a>
                            )}

                            {/* Log Comm Action */}
                            {onOpenCommModal && (
                              <button
                                type="button"
                                onClick={() => onOpenCommModal({
                                  clientId: item.rawClient?.id,
                                  clientName: item.contactPerson,
                                  companyName: item.companyName
                                })}
                                className="p-1.5 rounded-lg bg-brand-orange/10 hover:bg-brand-orange/20 text-orange-400 border border-brand-orange/30 transition-colors"
                                title="Log communication with this contact"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                              </button>
                            )}

                            {/* Convert Lead to Client Button */}
                            {!isClient && onConvertLeadToClient && item.rawLead && (
                              <button
                                type="button"
                                onClick={() => onConvertLeadToClient(item.rawLead!)}
                                className="px-2 py-1 rounded-lg bg-brand-teal text-slate-950 font-extrabold text-[11px] hover:bg-teal-400 transition-all flex items-center gap-1 shadow-sm"
                                title="Convert this lead into an active Client Account"
                              >
                                <span>Convert</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            )}

                            {/* Edit Client */}
                            {isClient && onSelectClient && item.rawClient && (
                              <button
                                type="button"
                                onClick={() => onSelectClient(item.rawClient!)}
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                                title="Edit client profile"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                            )}

                            {/* Delete/Archive */}
                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm(`Are you sure you want to remove ${item.companyName}?`)) {
                                  if (isClient && onDeleteClient && item.rawClient) {
                                    onDeleteClient(item.rawClient.id);
                                  } else if (!isClient && onDeleteLead && item.rawLead) {
                                    onDeleteLead(item.rawLead.id);
                                  }
                                }
                              }}
                              className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-colors"
                              title="Delete record"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* Expanded Details Row */}
                      {isExpanded && (
                        <tr className="bg-slate-900/90 border-b border-slate-800">
                          <td colSpan={6} className="p-4 space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {/* Left: Notes & Intent */}
                              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-1">
                                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Notes & Interaction Context</span>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                  {item.notes || 'No specific notes recorded. Use the "Log Comm" button to add notes from your calls or WhatsApp discussions.'}
                                </p>
                              </div>

                              {/* Middle: Full Services Taken List */}
                              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-2">
                                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">All Services Taken / Scoped</span>
                                <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                                  {item.servicesTakenOrInterested.map((s, idx) => (
                                    <div key={idx} className="flex items-center justify-between text-xs bg-slate-900 p-2 rounded-lg border border-slate-800">
                                      <div>
                                        <div className="font-bold text-slate-200">{s.name}</div>
                                        <div className="text-[10px] text-slate-500">{s.status || 'Active'}</div>
                                      </div>
                                      {s.budgetOrFee && (
                                        <span className="font-mono font-bold text-brand-teal text-xs">
                                          {s.currency === 'USD' ? '$' : '₹'}{s.budgetOrFee.toLocaleString()}
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Right: Conversion / Client Actions */}
                              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between">
                                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Account Quick Actions</span>
                                <div className="space-y-1.5">
                                  {!isClient && onConvertLeadToClient && item.rawLead && (
                                    <button
                                      type="button"
                                      onClick={() => onConvertLeadToClient(item.rawLead!)}
                                      className="w-full py-2 px-3 rounded-xl bg-brand-teal text-slate-950 font-bold text-xs hover:bg-teal-400 transition-all flex items-center justify-center gap-1.5"
                                    >
                                      <span>Convert Lead to Full Client</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                  )}

                                  {isClient && onManageServices && item.rawClient && (
                                    <button
                                      type="button"
                                      onClick={() => onManageServices(item.rawClient!)}
                                      className="w-full py-2 px-3 rounded-xl bg-brand-indigo hover:bg-indigo-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                                    >
                                      <Layers className="w-3.5 h-3.5" />
                                      <span>Add or Edit Services Taken</span>
                                    </button>
                                  )}
                                </div>

                                <div className="text-[10px] text-slate-500 text-center font-mono">
                                  ID: {item.id}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
