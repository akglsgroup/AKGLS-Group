import React, { useState, useEffect } from 'react';
import { 
  X, Phone, MessageSquare, Mail, Video, Ticket, 
  Calendar, User, Check, Building, Clock 
} from 'lucide-react';
import { 
  CrmCommunication, 
  CrmClient, 
  CrmTeamMember, 
  CrmCommunicationChannel, 
  CrmCommunicationStatus 
} from '../../types/crm';

interface CrmCommModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (comm: CrmCommunication) => void;
  clients: CrmClient[];
  teamMembers: CrmTeamMember[];
  preselectedClientId?: string;
  commToEdit?: CrmCommunication | null;
}

export default function CrmCommModal({
  isOpen,
  onClose,
  onSave,
  clients,
  teamMembers,
  preselectedClientId,
  commToEdit
}: CrmCommModalProps) {
  const [clientId, setClientId] = useState('');
  const [channel, setChannel] = useState<CrmCommunicationChannel>('Call');
  const [loggedByEmployeeId, setLoggedByEmployeeId] = useState('');
  const [summary, setSummary] = useState('');
  const [discussionNotes, setDiscussionNotes] = useState('');
  const [nextFollowUpDate, setNextFollowUpDate] = useState('');
  const [status, setStatus] = useState<CrmCommunicationStatus>('Resolved');
  const [date, setDate] = useState(new Date().toISOString());

  useEffect(() => {
    if (commToEdit) {
      setClientId(commToEdit.clientId || '');
      setChannel(commToEdit.channel || 'Call');
      setLoggedByEmployeeId(commToEdit.loggedByEmployeeId || (teamMembers[0]?.id || ''));
      setSummary(commToEdit.summary || '');
      setDiscussionNotes(commToEdit.discussionNotes || '');
      setNextFollowUpDate(commToEdit.nextFollowUpDate || '');
      setStatus(commToEdit.status || 'Resolved');
      setDate(commToEdit.date || new Date().toISOString());
    } else {
      setClientId(preselectedClientId || (clients[0]?.id || ''));
      setChannel('Call');
      setLoggedByEmployeeId(teamMembers[0]?.id || '');
      setSummary('');
      setDiscussionNotes('');
      // default next follow-up to 7 days from now
      const nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);
      setNextFollowUpDate(nextWeek.toISOString().split('T')[0]);
      setStatus('Resolved');
      setDate(new Date().toISOString());
    }
  }, [commToEdit, preselectedClientId, clients, teamMembers, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientId || !summary.trim()) return;

    const selectedClient = clients.find(c => c.id === clientId);
    const selectedMember = teamMembers.find(m => m.id === loggedByEmployeeId);

    const commData: CrmCommunication = {
      id: commToEdit?.id || `comm_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      clientId,
      clientName: selectedClient?.contactPerson || 'Client Contact',
      companyName: selectedClient?.companyName || 'Client Company',
      date,
      channel,
      loggedByEmployeeId,
      loggedByEmployeeName: selectedMember?.name || 'Account Manager',
      summary: summary.trim(),
      discussionNotes: discussionNotes.trim(),
      nextFollowUpDate: nextFollowUpDate || undefined,
      status
    };

    onSave(commData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0f172a] border border-slate-750 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {commToEdit ? 'Edit Communication Log' : 'Log Client Communication'}
              </h3>
              <p className="text-xs text-slate-400">
                Record calls, WhatsApp messages, emails, sprint reviews, or meeting notes.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Client / Company *
              </label>
              <div className="relative">
                <select
                  required
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
                >
                  <option value="">Select Client</option>
                  {clients.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.companyName} ({c.contactPerson})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Communication Channel *
              </label>
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value as CrmCommunicationChannel)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="Call">📞 Phone Call</option>
                <option value="WhatsApp">💬 WhatsApp Chat</option>
                <option value="Email">✉️ Email Update</option>
                <option value="Meeting">📹 Google Meet / Zoom Meeting</option>
                <option value="Support Ticket">🎫 Support / Deliverable Ticket</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Logged By (Employee / Agent)
              </label>
              <select
                value={loggedByEmployeeId}
                onChange={(e) => setLoggedByEmployeeId(e.target.value)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                {teamMembers.map(m => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.role})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Outcome Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as CrmCommunicationStatus)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="Resolved">Resolved / Complete</option>
                <option value="Action Required">Action Required (Team follow-up)</option>
                <option value="Follow-up Scheduled">Follow-up Scheduled</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Subject / Topic Summary *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Monthly SEO Review & Ad Budget Increase Approval"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Discussion Notes & Key Decisions
            </label>
            <textarea
              rows={3}
              required
              placeholder="Details on what was discussed, client feedback, feedback on deliverables, tasks assigned to developers or SEO specialists..."
              value={discussionNotes}
              onChange={(e) => setDiscussionNotes(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-750 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Next Action / Follow-Up Due Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
              <input
                type="date"
                value={nextFollowUpDate}
                onChange={(e) => setNextFollowUpDate(e.target.value)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-sm font-bold bg-brand-orange text-white hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/10 flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>{commToEdit ? 'Save Log' : 'Save Communication Log'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
