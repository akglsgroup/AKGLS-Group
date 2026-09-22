import React, { useState } from 'react';
import { 
  MessageSquare, Phone, Mail, Video, Ticket, Plus, 
  Search, Filter, Calendar, Clock, User, Building, 
  CheckCircle2, AlertCircle, Edit2, Trash2, ArrowUpRight 
} from 'lucide-react';
import { 
  CrmCommunication, 
  CrmClient, 
  CrmTeamMember, 
  CrmCommunicationChannel, 
  CrmCommunicationStatus 
} from '../../types/crm';
import CrmCommModal from './CrmCommModal';

interface CrmCommunicationsViewProps {
  communications: CrmCommunication[];
  clients: CrmClient[];
  teamMembers: CrmTeamMember[];
  onSaveCommunication: (comm: CrmCommunication) => void;
  onDeleteCommunication: (commId: string) => void;
  onSelectClient?: (client: CrmClient) => void;
}

export default function CrmCommunicationsView({
  communications,
  clients,
  teamMembers,
  onSaveCommunication,
  onDeleteCommunication,
  onSelectClient
}: CrmCommunicationsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [channelFilter, setChannelFilter] = useState<'All' | CrmCommunicationChannel>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | CrmCommunicationStatus>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commToEdit, setCommToEdit] = useState<CrmCommunication | null>(null);

  // Filtered communications
  const filteredComms = communications.filter((c) => {
    const matchesSearch =
      c.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.discussionNotes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.loggedByEmployeeName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesChannel = channelFilter === 'All' || c.channel === channelFilter;
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;

    return matchesSearch && matchesChannel && matchesStatus;
  });

  const actionRequiredCount = communications.filter(c => c.status === 'Action Required').length;
  const followUpCount = communications.filter(c => c.status === 'Follow-up Scheduled').length;
  const resolvedCount = communications.filter(c => c.status === 'Resolved').length;

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-slate-900/70 border border-slate-750 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Comms Logged</span>
            <MessageSquare className="w-4 h-4 text-brand-teal" />
          </div>
          <div className="text-2xl font-black text-white font-mono mt-1">{communications.length}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Calls, chats & meetings</div>
        </div>

        <div className="bg-slate-900/70 border border-slate-750 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Action Required</span>
            <AlertCircle className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-black text-rose-400 font-mono mt-1">{actionRequiredCount}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Pending team deliverables</div>
        </div>

        <div className="bg-slate-900/70 border border-slate-750 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Follow-ups Scheduled</span>
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-amber-400 font-mono mt-1">{followUpCount}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Upcoming client check-ins</div>
        </div>

        <div className="bg-slate-900/70 border border-slate-750 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resolved / Completed</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-emerald-400 font-mono mt-1">{resolvedCount}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Signed-off discussions</div>
        </div>
      </div>

      {/* Filter and Action Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Search topic, notes, client, or team member..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={channelFilter}
              onChange={(e) => setChannelFilter(e.target.value as any)}
              className="bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-brand-teal"
            >
              <option value="All">All Channels</option>
              <option value="Call">📞 Phone Calls</option>
              <option value="WhatsApp">💬 WhatsApp</option>
              <option value="Email">✉️ Emails</option>
              <option value="Meeting">📹 Meetings</option>
              <option value="Support Ticket">🎫 Support</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-brand-teal"
            >
              <option value="All">All Statuses</option>
              <option value="Action Required">Action Required</option>
              <option value="Follow-up Scheduled">Follow-up Scheduled</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setCommToEdit(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-orange text-white hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/10 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>Log New Communication</span>
        </button>
      </div>

      {/* Communications Feed */}
      <div className="space-y-3.5">
        {filteredComms.map((comm) => {
          const matchedClient = clients.find(c => c.id === comm.clientId);

          return (
            <div 
              key={comm.id}
              className="bg-slate-900/80 border border-slate-750 hover:border-slate-650 rounded-2xl p-5 space-y-3 transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 flex items-center gap-1.5">
                      {comm.channel === 'Call' && '📞 Phone Call'}
                      {comm.channel === 'WhatsApp' && '💬 WhatsApp'}
                      {comm.channel === 'Email' && '✉️ Email'}
                      {comm.channel === 'Meeting' && '📹 Video Meeting'}
                      {comm.channel === 'Support Ticket' && '🎫 Support Ticket'}
                    </span>

                    <button
                      type="button"
                      onClick={() => matchedClient && onSelectClient?.(matchedClient)}
                      className="text-sm font-bold text-brand-teal hover:underline flex items-center gap-1"
                    >
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>{comm.companyName}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </button>

                    <span className="text-xs text-slate-400">
                      ({comm.clientName})
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mt-1">
                    {comm.summary}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    comm.status === 'Resolved'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : comm.status === 'Action Required'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  }`}>
                    {comm.status}
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      setCommToEdit(comm);
                      setIsModalOpen(true);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
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
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    title="Delete Log"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Discussion notes */}
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                {comm.discussionNotes}
              </p>

              {/* Footer strip: logged by whom, date, next follow up */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    <span>Logged by <strong className="text-slate-200">{comm.loggedByEmployeeName}</strong></span>
                  </span>
                  <span>•</span>
                  <span>{new Date(comm.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                </div>

                {comm.nextFollowUpDate && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md font-medium">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>Next Follow-up Due: <strong>{comm.nextFollowUpDate}</strong></span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredComms.length === 0 && (
        <div className="p-12 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
          <MessageSquare className="w-10 h-10 text-slate-600 mx-auto mb-2" />
          <h5 className="text-sm font-semibold text-slate-300">No Communications Match Filter</h5>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
            Try adjusting your search criteria or log a new call, WhatsApp discussion, or meeting.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setChannelFilter('All');
              setStatusFilter('All');
            }}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Log Comm Modal */}
      {isModalOpen && (
        <CrmCommModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setCommToEdit(null);
          }}
          onSave={onSaveCommunication}
          clients={clients}
          teamMembers={teamMembers}
          commToEdit={commToEdit}
        />
      )}
    </div>
  );
}
