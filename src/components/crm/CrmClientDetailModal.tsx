import React, { useState } from 'react';
import { 
  X, Building, User, Mail, Phone, Globe, DollarSign, Calendar, 
  Layers, MessageSquare, Plus, Edit2, Trash2, ExternalLink, 
  CheckCircle2, Clock, AlertCircle, ArrowUpRight, ShieldCheck, 
  FileText, Sparkles, UserCheck 
} from 'lucide-react';
import { 
  CrmClient, 
  CrmService, 
  CrmCommunication, 
  CrmTeamMember 
} from '../../types/crm';
import CrmServiceModal from './CrmServiceModal';
import CrmCommModal from './CrmCommModal';

interface CrmClientDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: CrmClient | null;
  communications: CrmCommunication[];
  teamMembers: CrmTeamMember[];
  onUpdateClient: (updatedClient: CrmClient) => void;
  onSaveCommunication: (comm: CrmCommunication) => void;
  onDeleteCommunication: (commId: string) => void;
  onEditClientInfo: (client: CrmClient) => void;
}

export default function CrmClientDetailModal({
  isOpen,
  onClose,
  client,
  communications,
  teamMembers,
  onUpdateClient,
  onSaveCommunication,
  onDeleteCommunication,
  onEditClientInfo
}: CrmClientDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'services' | 'communications' | 'details'>('services');
  
  // Service modal states
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState<CrmService | null>(null);

  // Comm modal states
  const [isCommModalOpen, setIsCommModalOpen] = useState(false);
  const [commToEdit, setCommToEdit] = useState<CrmCommunication | null>(null);

  if (!isOpen || !client) return null;

  // Filter communications for this client
  const clientComms = communications.filter(c => c.clientId === client.id);

  // Handle service operations
  const handleSaveService = (service: CrmService) => {
    const existing = client.servicesTaken || [];
    const index = existing.findIndex(s => s.id === service.id);
    let updatedServices: CrmService[];

    if (index >= 0) {
      updatedServices = [...existing];
      updatedServices[index] = service;
    } else {
      updatedServices = [...existing, service];
    }

    // Recalculate monthly retainer if monthly recurring
    const calculatedMonthly = updatedServices
      .filter(s => s.pricingModel === 'Monthly Retainer' && s.status === 'Active')
      .reduce((sum, s) => sum + s.budgetOrFee, 0);

    const updatedClient: CrmClient = {
      ...client,
      servicesTaken: updatedServices,
      totalMonthlyRetainer: calculatedMonthly > 0 ? calculatedMonthly : client.totalMonthlyRetainer,
      updatedAt: new Date().toISOString()
    };

    onUpdateClient(updatedClient);
  };

  const handleDeleteService = (serviceId: string) => {
    if (!confirm('Are you sure you want to remove this service from this client?')) return;
    const updatedServices = (client.servicesTaken || []).filter(s => s.id !== serviceId);
    
    const calculatedMonthly = updatedServices
      .filter(s => s.pricingModel === 'Monthly Retainer' && s.status === 'Active')
      .reduce((sum, s) => sum + s.budgetOrFee, 0);

    const updatedClient: CrmClient = {
      ...client,
      servicesTaken: updatedServices,
      totalMonthlyRetainer: calculatedMonthly > 0 ? calculatedMonthly : 0,
      updatedAt: new Date().toISOString()
    };

    onUpdateClient(updatedClient);
  };

  const formatCurrency = (val: number, cur: 'INR' | 'USD') => {
    if (cur === 'USD') return `$${val.toLocaleString()}`;
    return `₹${val.toLocaleString()}`;
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
        <div className="bg-[#0f172a] border border-slate-750 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[92vh]">
          {/* Top Banner & Header */}
          <div className="bg-gradient-to-r from-slate-900 via-[#131d35] to-slate-900 border-b border-slate-800 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-teal">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-xl font-bold text-white tracking-tight">
                        {client.companyName}
                      </h2>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        client.status === 'Active' 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : client.status === 'Onboarding'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          : 'bg-slate-700/30 text-slate-300 border-slate-600'
                      }`}>
                        {client.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 flex items-center gap-3 mt-0.5">
                      <span>{client.industry}</span>
                      <span>•</span>
                      <span>Contact: <strong className="text-slate-200">{client.contactPerson}</strong></span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact & Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onEditClientInfo(client)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Edit Client</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Metrics & Contact strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-slate-800/80">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] uppercase font-bold text-slate-400">Monthly Retainer</div>
                <div className="text-base font-extrabold text-brand-teal font-mono mt-0.5">
                  {formatCurrency(client.totalMonthlyRetainer, client.currency)}
                  <span className="text-[10px] font-normal text-slate-400">/mo</span>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] uppercase font-bold text-slate-400">Assigned Manager</div>
                <div className="text-xs font-bold text-slate-200 truncate mt-0.5 flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>{client.assignedTeamMemberName || 'Unassigned'}</span>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] uppercase font-bold text-slate-400">Direct Phone / WhatsApp</div>
                <div className="text-xs font-semibold text-slate-200 truncate mt-0.5">
                  {client.phone ? (
                    <a href={`tel:${client.phone}`} className="hover:text-brand-teal transition-colors">
                      {client.phone}
                    </a>
                  ) : (
                    <span className="text-slate-500">Not provided</span>
                  )}
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-2.5">
                <div className="text-[10px] uppercase font-bold text-slate-400">Website</div>
                <div className="text-xs font-semibold text-brand-indigo truncate mt-0.5 flex items-center gap-1">
                  {client.websiteUrl ? (
                    <a 
                      href={client.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      referrerPolicy="no-referrer"
                      className="hover:underline flex items-center gap-1 truncate"
                    >
                      <span>{client.websiteUrl.replace(/^https?:\/\//, '')}</span>
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    </a>
                  ) : (
                    <span className="text-slate-500">No domain</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-900/40 px-6 gap-6">
            <button
              type="button"
              onClick={() => setActiveTab('services')}
              className={`py-3 text-xs font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'services'
                  ? 'border-brand-teal text-brand-teal'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Services Taken ({client.servicesTaken?.length || 0})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('communications')}
              className={`py-3 text-xs font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'communications'
                  ? 'border-brand-teal text-brand-teal'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Communication History ({clientComms.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`py-3 text-xs font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'details'
                  ? 'border-brand-teal text-brand-teal'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Client Notes & Details</span>
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {/* TAB 1: SERVICES TAKEN */}
            {activeTab === 'services' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Active & Delivered Services</h4>
                    <p className="text-xs text-slate-400">
                      All Web and Digital Marketing contracts running for {client.companyName}.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setServiceToEdit(null);
                      setIsServiceModalOpen(true);
                    }}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-teal text-slate-950 hover:bg-teal-400 transition-colors shadow-sm flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Service</span>
                  </button>
                </div>

                {!client.servicesTaken || client.servicesTaken.length === 0 ? (
                  <div className="p-8 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
                    <Layers className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                    <h5 className="text-sm font-semibold text-slate-300">No Services Added Yet</h5>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
                      Assign services like Technical SEO, Web Development, Google Ads, or Shopify Optimization to track deliverables.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setServiceToEdit(null);
                        setIsServiceModalOpen(true);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-teal text-slate-950 hover:bg-teal-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add First Service</span>
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {client.servicesTaken.map((srv) => (
                      <div 
                        key={srv.id}
                        className="bg-slate-900/80 border border-slate-750 hover:border-slate-600 rounded-2xl p-4.5 transition-all space-y-3 relative group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal font-mono">
                              {srv.category.toUpperCase()} • {srv.pricingModel}
                            </span>
                            <h5 className="text-sm font-bold text-white mt-0.5">
                              {srv.name}
                            </h5>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              srv.status === 'Active'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                : srv.status === 'In Progress'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                                : srv.status === 'Completed'
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                                : 'bg-slate-700/30 text-slate-300'
                            }`}>
                              {srv.status}
                            </span>
                          </div>
                        </div>

                        {/* Deliverables note */}
                        {srv.deliverablesSummary && (
                          <p className="text-xs text-slate-300 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/80">
                            {srv.deliverablesSummary}
                          </p>
                        )}

                        {/* Progress Bar */}
                        <div>
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className="text-slate-400">Deliverables Progress</span>
                            <span className="font-mono font-bold text-brand-teal">{srv.progressPercentage}%</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-brand-teal to-teal-400 h-full rounded-full transition-all duration-500"
                              style={{ width: `${srv.progressPercentage}%` }}
                            />
                          </div>
                        </div>

                        {/* Bottom metrics & actions */}
                        <div className="flex items-center justify-between pt-2 border-t border-slate-800/70 text-xs">
                          <div className="font-mono font-bold text-slate-200">
                            {formatCurrency(srv.budgetOrFee, srv.currency)}
                            <span className="text-[10px] text-slate-400 font-normal">
                              {srv.pricingModel === 'Monthly Retainer' ? '/mo' : ' total'}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                            <button
                              type="button"
                              onClick={() => {
                                setServiceToEdit(srv);
                                setIsServiceModalOpen(true);
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                              title="Edit Service"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteService(srv.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                              title="Delete Service"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: COMMUNICATION LOGS */}
            {activeTab === 'communications' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Client Communication Logs</h4>
                    <p className="text-xs text-slate-400">
                      Call records, WhatsApp discussions, meetings, and upcoming follow-ups.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setCommToEdit(null);
                      setIsCommModalOpen(true);
                    }}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-orange text-white hover:bg-orange-500 transition-colors shadow-sm flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Log Communication</span>
                  </button>
                </div>

                {clientComms.length === 0 ? (
                  <div className="p-8 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
                    <MessageSquare className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                    <h5 className="text-sm font-semibold text-slate-300">No Communications Logged</h5>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
                      Keep track of phone calls, WhatsApp messages, sprint reviews, and follow-ups.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setCommToEdit(null);
                        setIsCommModalOpen(true);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-orange text-white hover:bg-orange-500 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Log First Communication</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {clientComms.map((comm) => (
                      <div 
                        key={comm.id}
                        className="bg-slate-900/80 border border-slate-750 rounded-2xl p-4 space-y-2.5 transition-all"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
                              {comm.channel === 'Call' && '📞 Phone Call'}
                              {comm.channel === 'WhatsApp' && '💬 WhatsApp'}
                              {comm.channel === 'Email' && '✉️ Email'}
                              {comm.channel === 'Meeting' && '📹 Video Meeting'}
                              {comm.channel === 'Support Ticket' && '🎫 Support Ticket'}
                            </span>
                            <span className="text-xs text-slate-400">
                              Logged by <strong className="text-slate-200">{comm.loggedByEmployeeName}</strong>
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-xs text-slate-400">
                              {new Date(comm.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              comm.status === 'Resolved'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                : comm.status === 'Action Required'
                                ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            }`}>
                              {comm.status}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setCommToEdit(comm);
                                setIsCommModalOpen(true);
                              }}
                              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                              title="Edit Log"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm('Delete this communication record?')) {
                                  onDeleteCommunication(comm.id);
                                }
                              }}
                              className="p-1 rounded text-slate-400 hover:text-rose-400 transition-colors"
                              title="Delete Log"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <h5 className="text-sm font-bold text-white">
                          {comm.summary}
                        </h5>

                        <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                          {comm.discussionNotes}
                        </p>

                        {comm.nextFollowUpDate && (
                          <div className="flex items-center gap-1.5 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg w-fit font-medium">
                            <Clock className="w-3.5 h-3.5 text-amber-400" />
                            <span>Next Follow-up Due: <strong>{comm.nextFollowUpDate}</strong></span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: CLIENT DETAILS & NOTES */}
            {activeTab === 'details' && (
              <div className="space-y-4">
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Account Notes & Strategy Brief
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                    {client.notes || 'No specific notes recorded for this client. Click "Edit Client" above to document marketing goals and preferences.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Contract & Onboarding Info
                    </h5>
                    <div className="text-xs space-y-1.5 text-slate-300">
                      <div>Contract Start Date: <strong className="text-white">{client.contractStartDate}</strong></div>
                      <div>Created In CRM: <strong className="text-white">{new Date(client.createdAt).toLocaleDateString()}</strong></div>
                      <div>Last Updated: <strong className="text-white">{new Date(client.updatedAt).toLocaleDateString()}</strong></div>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Contact Channels
                    </h5>
                    <div className="text-xs space-y-1.5 text-slate-300">
                      <div>Primary Contact: <strong className="text-white">{client.contactPerson}</strong></div>
                      <div>Email: <strong className="text-white">{client.email}</strong></div>
                      <div>Phone: <strong className="text-white">{client.phone || 'N/A'}</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nested Modals */}
      {isServiceModalOpen && (
        <CrmServiceModal
          isOpen={isServiceModalOpen}
          onClose={() => {
            setIsServiceModalOpen(false);
            setServiceToEdit(null);
          }}
          onSave={handleSaveService}
          serviceToEdit={serviceToEdit}
          defaultCurrency={client.currency}
        />
      )}

      {isCommModalOpen && (
        <CrmCommModal
          isOpen={isCommModalOpen}
          onClose={() => {
            setIsCommModalOpen(false);
            setCommToEdit(null);
          }}
          onSave={onSaveCommunication}
          clients={[client]}
          teamMembers={teamMembers}
          preselectedClientId={client.id}
          commToEdit={commToEdit}
        />
      )}
    </>
  );
}
