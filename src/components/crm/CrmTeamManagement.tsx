import React, { useState } from 'react';
import { 
  Users, UserCheck, Briefcase, Plus, Search, Filter, 
  Mail, Phone, Award, Shield, Edit2, Trash2, CheckCircle2,
  AlertCircle, Clock, ChevronRight
} from 'lucide-react';
import { CrmTeamMember, CrmClient, CrmTeamMemberType } from '../../types/crm';
import CrmTeamModal from './CrmTeamModal';

interface CrmTeamManagementProps {
  teamMembers: CrmTeamMember[];
  clients: CrmClient[];
  onSaveMember: (member: CrmTeamMember) => void;
  onDeleteMember: (memberId: string) => void;
  onSelectClient?: (client: CrmClient) => void;
}

export default function CrmTeamManagement({
  teamMembers,
  clients,
  onSaveMember,
  onDeleteMember,
  onSelectClient
}: CrmTeamManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'All' | CrmTeamMemberType>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState<CrmTeamMember | null>(null);

  // Filtered members
  const filteredMembers = teamMembers.filter((m) => {
    const matchesSearch = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = typeFilter === 'All' || m.type === typeFilter;
    return matchesSearch && matchesType;
  });

  // Calculate assigned clients for a member dynamically
  const getAssignedClients = (memberId: string) => {
    return clients.filter(c => c.assignedTeamMemberId === memberId);
  };

  const internalCount = teamMembers.filter(m => m.type === 'Internal Employee').length;
  const agentCount = teamMembers.filter(m => m.type === 'Agent / Associate').length;
  const freelanceCount = teamMembers.filter(m => m.type === 'Freelance Consultant').length;

  return (
    <div className="space-y-6">
      {/* Top Header & Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-slate-900/70 border border-slate-750 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Staff & Associates</span>
            <Users className="w-4 h-4 text-brand-teal" />
          </div>
          <div className="text-2xl font-black text-white font-mono mt-1">{teamMembers.length}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Active agency workforce</div>
        </div>

        <div className="bg-slate-900/70 border border-slate-750 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Internal Employees</span>
            <Briefcase className="w-4 h-4 text-brand-indigo" />
          </div>
          <div className="text-2xl font-black text-brand-indigo font-mono mt-1">{internalCount}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Core agency specialists</div>
        </div>

        <div className="bg-slate-900/70 border border-slate-750 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Agents & Associates</span>
            <UserCheck className="w-4 h-4 text-brand-orange" />
          </div>
          <div className="text-2xl font-black text-brand-orange font-mono mt-1">{agentCount}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Partner agents & managers</div>
        </div>

        <div className="bg-slate-900/70 border border-slate-750 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Freelance Associates</span>
            <Award className="w-4 h-4 text-brand-purple" />
          </div>
          <div className="text-2xl font-black text-brand-purple font-mono mt-1">{freelanceCount}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Specialized copy & tech</div>
        </div>
      </div>

      {/* Controls Bar: Search, Filter, Add */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Search employee, agent, associate or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-750 p-1 rounded-xl overflow-x-auto text-xs font-medium">
            {(['All', 'Internal Employee', 'Agent / Associate', 'Freelance Consultant'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTypeFilter(type)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  typeFilter === type
                    ? 'bg-brand-teal text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {type === 'Internal Employee' ? 'Employees' : type === 'Agent / Associate' ? 'Agents & Associates' : type === 'Freelance Consultant' ? 'Freelancers' : 'All Team'}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setMemberToEdit(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-teal text-slate-950 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/10 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>Add Employee / Associate</span>
        </button>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map((member) => {
          const assignedClients = getAssignedClients(member.id);

          return (
            <div
              key={member.id}
              className="bg-slate-900/80 border border-slate-750 hover:border-slate-600 rounded-2xl p-5 transition-all space-y-4 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm border ${
                      member.type === 'Internal Employee'
                        ? 'bg-brand-indigo/20 text-brand-indigo border-brand-indigo/30'
                        : member.type === 'Agent / Associate'
                        ? 'bg-brand-orange/20 text-brand-orange border-brand-orange/30'
                        : 'bg-brand-purple/20 text-brand-purple border-brand-purple/30'
                    }`}>
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white leading-tight">
                        {member.name}
                      </h4>
                      <p className="text-xs text-brand-teal font-semibold mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        setMemberToEdit(member);
                        setIsModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Edit Member"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Remove ${member.name} from the CRM?`)) {
                          onDeleteMember(member.id);
                        }
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                      title="Remove Member"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Badge tags */}
                <div className="flex flex-wrap items-center gap-1.5 mt-3">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    member.type === 'Internal Employee'
                      ? 'bg-brand-indigo/10 text-indigo-300 border-brand-indigo/30'
                      : member.type === 'Agent / Associate'
                      ? 'bg-brand-orange/10 text-orange-300 border-brand-orange/30'
                      : 'bg-brand-purple/10 text-purple-300 border-brand-purple/30'
                  }`}>
                    {member.type}
                  </span>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    member.status === 'Active'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : member.status === 'On Leave'
                      ? 'bg-amber-500/10 text-amber-400'
                      : 'bg-slate-700/30 text-slate-400'
                  }`}>
                    ● {member.status}
                  </span>

                  <span className="text-[10px] text-slate-400 font-mono">
                    Joined {member.joinDate}
                  </span>
                </div>

                {/* Contact strip */}
                <div className="text-xs text-slate-300 space-y-1 mt-3 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/80">
                  {member.email && (
                    <div className="flex items-center gap-2 truncate">
                      <Mail className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      <a href={`mailto:${member.email}`} className="hover:text-brand-teal truncate">
                        {member.email}
                      </a>
                    </div>
                  )}
                  {member.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      <a href={`tel:${member.phone}`} className="hover:text-brand-teal">
                        {member.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Specialties */}
                {member.specialties && member.specialties.length > 0 && (
                  <div className="mt-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Expertise & Scope:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((spec, sIdx) => (
                        <span 
                          key={sIdx}
                          className="text-[11px] font-medium bg-slate-800/90 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700/60"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Assigned Clients Footer */}
              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-400 font-medium">Assigned Accounts:</span>
                  <span className="font-bold font-mono text-brand-teal">
                    {assignedClients.length} Clients
                  </span>
                </div>

                {assignedClients.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {assignedClients.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => onSelectClient?.(c)}
                        className="text-[11px] font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-brand-teal px-2 py-0.5 rounded border border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                        title={`Click to view ${c.companyName} CRM details`}
                      >
                        <span>{c.companyName}</span>
                        <ChevronRight className="w-2.5 h-2.5 opacity-60" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-500 italic">
                    Currently available for new account allocations.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredMembers.length === 0 && (
        <div className="p-12 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
          <Users className="w-10 h-10 text-slate-600 mx-auto mb-2" />
          <h5 className="text-sm font-semibold text-slate-300">No Members Match Search</h5>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
            Try adjusting your search query or filter by a different engagement type.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setTypeFilter('All');
            }}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Team Member Modal */}
      {isModalOpen && (
        <CrmTeamModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setMemberToEdit(null);
          }}
          onSave={onSaveMember}
          memberToEdit={memberToEdit}
        />
      )}
    </div>
  );
}
