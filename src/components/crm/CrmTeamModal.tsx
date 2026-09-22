import React, { useState, useEffect } from 'react';
import { X, User, Mail, Phone, Briefcase, Award, Shield, UserPlus, Check } from 'lucide-react';
import { CrmTeamMember, CrmTeamMemberType, CrmTeamMemberStatus } from '../../types/crm';

interface CrmTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: CrmTeamMember) => void;
  memberToEdit?: CrmTeamMember | null;
}

export default function CrmTeamModal({
  isOpen,
  onClose,
  onSave,
  memberToEdit
}: CrmTeamModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [type, setType] = useState<CrmTeamMemberType>('Internal Employee');
  const [status, setStatus] = useState<CrmTeamMemberStatus>('Active');
  const [specialtiesText, setSpecialtiesText] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (memberToEdit) {
      setName(memberToEdit.name || '');
      setEmail(memberToEdit.email || '');
      setPhone(memberToEdit.phone || '');
      setRole(memberToEdit.role || '');
      setType(memberToEdit.type || 'Internal Employee');
      setStatus(memberToEdit.status || 'Active');
      setSpecialtiesText(memberToEdit.specialties?.join(', ') || '');
      setNotes(memberToEdit.notes || '');
    } else {
      setName('');
      setEmail('');
      setPhone('');
      setRole('Digital Marketing Specialist');
      setType('Internal Employee');
      setStatus('Active');
      setSpecialtiesText('SEO, Google Ads, Web Development');
      setNotes('');
    }
  }, [memberToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) return;

    const specialties = specialtiesText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const memberData: CrmTeamMember = {
      id: memberToEdit?.id || `team_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      role: role.trim(),
      type,
      status,
      assignedClientsCount: memberToEdit?.assignedClientsCount || 0,
      specialties: specialties.length ? specialties : ['Digital Marketing'],
      joinDate: memberToEdit?.joinDate || new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      notes: notes.trim()
    };

    onSave(memberData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0f172a] border border-slate-750 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-teal">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {memberToEdit ? 'Edit Team Member / Associate' : 'Add Employee or Agent / Associate'}
              </h3>
              <p className="text-xs text-slate-400">
                Manage internal team members, external agents, associates, and specialized freelancers.
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
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                required
                placeholder="e.g. Rahul Verma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="email"
                  placeholder="e.g. rahul@akglspartners.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="tel"
                  placeholder="e.g. +91 98901 23456"
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
                Role / Designation *
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior SEO & GEO Specialist"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Engagement Type *
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as CrmTeamMemberType)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="Internal Employee">Internal Employee</option>
                <option value="Agent / Associate">Agent / Associate</option>
                <option value="Freelance Consultant">Freelance Consultant</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Active Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as CrmTeamMemberStatus)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Specialties & Skills (comma separated)
              </label>
              <div className="relative">
                <Award className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="e.g. SEO, GEO, Google Ads, Shopify"
                  value={specialtiesText}
                  onChange={(e) => setSpecialtiesText(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Internal Notes / Allocation
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Available for 2 more SEO client accounts..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-750 rounded-xl p-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
            />
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
              <Check className="w-4 h-4" />
              <span>{memberToEdit ? 'Save Member' : 'Add Team Member'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
