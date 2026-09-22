import React, { useState } from 'react';
import { X, User, Building, Mail, Phone, Globe, DollarSign, Target, UserCheck, Layers, FileText } from 'lucide-react';
import { CrmTeamMember } from '../../types/crm';
import { LeadRecord } from '../../types';

interface CrmAddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveLead: (lead: LeadRecord) => void;
  teamMembers: CrmTeamMember[];
}

export default function CrmAddLeadModal({
  isOpen,
  onClose,
  onSaveLead,
  teamMembers
}: CrmAddLeadModalProps) {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [budget, setBudget] = useState('₹45,000 / month');
  const [primaryGoal, setPrimaryGoal] = useState('Shopify Web Dev & SEO Optimization');
  const [assignedTo, setAssignedTo] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !companyName.trim()) return;

    const newLead: LeadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim() || companyName.trim(),
      companyName: companyName.trim() || `${name.trim()}'s Business`,
      email: email.trim() || 'inquiry@akglsgroup.com',
      phone: phone.trim(),
      websiteUrl: websiteUrl.trim(),
      budget: budget.trim(),
      primaryGoal: primaryGoal.trim(),
      assignedTo: assignedTo || (teamMembers[0]?.name || 'Unassigned'),
      notes: notes.trim(),
      status: 'New',
      pageAddress: typeof window !== 'undefined' ? window.location.href : 'https://www.akglsgroup.com',
      pageTitle: 'Manager CRM Manual Lead Entry',
      time: new Date().toISOString()
    };

    onSaveLead(newLead);
    onClose();
    // Reset form
    setName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setWebsiteUrl('');
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0e1629] border border-slate-750 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white">Add New Lead / Contact</h3>
              <p className="text-[11px] text-slate-400">Record an inbound inquiry, client contact, or partnership prospect</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-brand-teal" />
                <span>Company / Brand Name</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Wear Shopify"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-brand-teal" />
                <span>Contact Person</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-teal" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                placeholder="sarah@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-teal" />
                <span>Phone / WhatsApp</span>
              </label>
              <input
                type="tel"
                placeholder="+91 831 811 4492"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-brand-teal" />
                <span>Website Domain / URL</span>
              </label>
              <input
                type="text"
                placeholder="https://example.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-brand-teal" />
                <span>Target Retainer / Budget</span>
              </label>
              <input
                type="text"
                placeholder="e.g. ₹50,000/mo or $1,200/mo"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-teal" />
                <span>Primary Services Taken / Scope</span>
              </label>
              <select
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-xs text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="Shopify Web Dev & SEO Optimization">Shopify Web Dev & Technical SEO</option>
                <option value="Full-Stack Custom Web Development">Full-Stack Custom Web Development</option>
                <option value="Google & Meta Ads Management (PPC)">Google & Meta Ads Management (PPC)</option>
                <option value="AI & Generative Engine Optimization (GEO)">AI & Generative Engine Optimization (GEO)</option>
                <option value="Content Writing & Copywriting">Content Writing & Copywriting</option>
                <option value="Complete Agency Growth Retainer">Complete Agency Growth Retainer</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-brand-teal" />
                <span>Assign to Employee / Associate</span>
              </label>
              <select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-xs text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="">Select Account Manager</option>
                {teamMembers.map((m) => (
                  <option key={m.id} value={m.name}>
                    {m.name} ({m.role.split(' ')[0]} - {m.type === 'Internal Employee' ? 'Staff' : 'Associate'})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-brand-teal" />
              <span>Notes, Requirements & Deliverables</span>
            </label>
            <textarea
              rows={3}
              placeholder="Add key background info, customer expectations, or deliverables agreed..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal leading-relaxed"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-extrabold bg-brand-teal text-slate-950 hover:bg-teal-400 transition-all cursor-pointer shadow-md shadow-teal-500/10"
            >
              Save Lead / Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
