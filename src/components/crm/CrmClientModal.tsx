import React, { useState, useEffect } from 'react';
import { X, Building, User, Mail, Phone, Globe, DollarSign, Calendar, Briefcase, UserCheck } from 'lucide-react';
import { CrmClient, CrmTeamMember, CrmClientStatus } from '../../types/crm';

interface CrmClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (client: CrmClient) => void;
  clientToEdit?: CrmClient | null;
  teamMembers: CrmTeamMember[];
}

export default function CrmClientModal({
  isOpen,
  onClose,
  onSave,
  clientToEdit,
  teamMembers
}: CrmClientModalProps) {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [industry, setIndustry] = useState('');
  const [status, setStatus] = useState<CrmClientStatus>('Active');
  const [assignedTeamMemberId, setAssignedTeamMemberId] = useState('');
  const [totalMonthlyRetainer, setTotalMonthlyRetainer] = useState<number>(0);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [contractStartDate, setContractStartDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (clientToEdit) {
      setCompanyName(clientToEdit.companyName || '');
      setContactPerson(clientToEdit.contactPerson || '');
      setEmail(clientToEdit.email || '');
      setPhone(clientToEdit.phone || '');
      setWebsiteUrl(clientToEdit.websiteUrl || '');
      setIndustry(clientToEdit.industry || '');
      setStatus(clientToEdit.status || 'Active');
      setAssignedTeamMemberId(clientToEdit.assignedTeamMemberId || (teamMembers[0]?.id || ''));
      setTotalMonthlyRetainer(clientToEdit.totalMonthlyRetainer || 0);
      setCurrency(clientToEdit.currency || 'INR');
      setContractStartDate(clientToEdit.contractStartDate || new Date().toISOString().split('T')[0]);
      setNotes(clientToEdit.notes || '');
    } else {
      setCompanyName('');
      setContactPerson('');
      setEmail('');
      setPhone('');
      setWebsiteUrl('');
      setIndustry('Web & Digital Marketing');
      setStatus('Active');
      setAssignedTeamMemberId(teamMembers[0]?.id || '');
      setTotalMonthlyRetainer(35000);
      setCurrency('INR');
      setContractStartDate(new Date().toISOString().split('T')[0]);
      setNotes('');
    }
  }, [clientToEdit, teamMembers, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !contactPerson.trim()) return;

    const assignedMember = teamMembers.find(m => m.id === assignedTeamMemberId);

    const clientData: CrmClient = {
      id: clientToEdit?.id || `client_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      companyName: companyName.trim(),
      contactPerson: contactPerson.trim(),
      email: email.trim(),
      phone: phone.trim(),
      websiteUrl: websiteUrl.trim(),
      industry: industry.trim() || 'General Business',
      status,
      assignedTeamMemberId,
      assignedTeamMemberName: assignedMember?.name || 'Unassigned',
      servicesTaken: clientToEdit?.servicesTaken || [],
      totalMonthlyRetainer: Number(totalMonthlyRetainer) || 0,
      currency,
      contractStartDate,
      notes: notes.trim(),
      createdAt: clientToEdit?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    onSave(clientData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0f172a] border border-slate-750 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-indigo/20 border border-brand-indigo/30 flex items-center justify-center text-brand-indigo">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {clientToEdit ? 'Edit Client Details' : 'Add New Client to CRM'}
              </h3>
              <p className="text-xs text-slate-400">
                Register customer information, contact details, and assign an internal manager.
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
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Company / Brand Name *
              </label>
              <div className="relative">
                <Building className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Shopify Wear"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Primary Contact Person *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="e.g. contact@client.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Phone / WhatsApp Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="tel"
                  placeholder="e.g. +91 98201 44521"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Website URL
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="e.g. https://apexapparel.store"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Industry / Niche
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="e.g. Ecommerce, Healthcare, SaaS"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Client Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as CrmClientStatus)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="Active">Active Client</option>
                <option value="Onboarding">Onboarding</option>
                <option value="Proposal">Proposal Stage</option>
                <option value="Paused">Paused Retainer</option>
                <option value="Past">Past Client</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Assigned Team Member
              </label>
              <div className="relative">
                <select
                  value={assignedTeamMemberId}
                  onChange={(e) => setAssignedTeamMemberId(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
                >
                  <option value="">Select Employee or Agent</option>
                  {teamMembers.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.type} - {m.role})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Contract Start Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="date"
                  value={contractStartDate}
                  onChange={(e) => setContractStartDate(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Total Monthly Retainer / Value
              </label>
              <div className="flex gap-2">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as 'INR' | 'USD')}
                  className="bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm font-bold text-brand-teal focus:outline-none"
                >
                  <option value="INR">₹ INR</option>
                  <option value="USD">$ USD</option>
                </select>
                <div className="relative flex-1">
                  <DollarSign className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="number"
                    min="0"
                    placeholder="35000"
                    value={totalMonthlyRetainer || ''}
                    onChange={(e) => setTotalMonthlyRetainer(Number(e.target.value))}
                    className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Operational Notes / Objectives
              </label>
              <textarea
                rows={2}
                placeholder="Key goals, target audience, brand notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl p-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
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
              className="px-5 py-2 rounded-xl text-sm font-bold bg-brand-teal text-slate-950 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/10 flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>{clientToEdit ? 'Save Changes' : 'Add Client'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
