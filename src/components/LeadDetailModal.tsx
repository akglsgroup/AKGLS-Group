import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, Copy, Check, ExternalLink, Mail, Phone, Calendar, MapPin, 
  Globe, Building, User, DollarSign, Target, FileText, Code2, 
  Layers, Search, Clock, Save, UserCheck, ShieldCheck, Terminal, 
  CheckCircle2, Laptop, Tag, ArrowRight
} from 'lucide-react';
import { LeadRecord } from '../types';

interface LeadDetailModalProps {
  lead: LeadRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateLead?: (leadId: string, updates: Partial<LeadRecord>) => Promise<void>;
  onDeleteLead?: (leadId: string) => Promise<void>;
}

export default function LeadDetailModal({
  lead,
  isOpen,
  onClose,
  onUpdateLead,
  onDeleteLead,
}: LeadDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'raw' | 'manage'>('overview');
  const [rawViewMode, setRawViewMode] = useState<'table' | 'json'>('table');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [rawSearchQuery, setRawSearchQuery] = useState('');
  
  // Local edit states for "manage" tab
  const [status, setStatus] = useState<LeadRecord['status']>('New');
  const [assignedTo, setAssignedTo] = useState('');
  const [notes, setNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync state whenever lead changes
  useEffect(() => {
    if (lead) {
      setStatus(lead.status || 'New');
      setAssignedTo(lead.assignedTo || '');
      setNotes(lead.notes || '');
      setSaveSuccess(false);
    }
  }, [lead]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Copy helper
  const copyToClipboard = (text: string, fieldKey: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => setCopiedField(null), 2200);
  };

  // Compile raw submission data payload
  const rawSubmissionData = useMemo(() => {
    if (!lead) return {};
    
    // Start with explicitly captured rawDetails
    const compiled: Record<string, any> = {
      ...(lead.rawDetails || {}),
    };

    // Ensure core fields are populated if not present in rawDetails
    if (!compiled.leadId) compiled.leadId = lead.id;
    if (!compiled.name) compiled.name = lead.name;
    if (!compiled.email) compiled.email = lead.email;
    if (lead.phone && !compiled.phone) compiled.phone = lead.phone;
    if (lead.companyName && !compiled.companyName) compiled.companyName = lead.companyName;
    if (lead.websiteUrl && !compiled.websiteUrl) compiled.websiteUrl = lead.websiteUrl;
    if (lead.budget && !compiled.budget) compiled.budget = lead.budget;
    if (lead.primaryGoal && !compiled.primaryGoal) compiled.primaryGoal = lead.primaryGoal;
    if (lead.pageAddress && !compiled.pageAddress) compiled.pageAddress = lead.pageAddress;
    if (lead.pageTitle && !compiled.pageTitle) compiled.pageTitle = lead.pageTitle;
    if (lead.time && !compiled.submissionTimestamp) compiled.submissionTimestamp = lead.time;
    if (lead.ip && !compiled.ip) compiled.ip = lead.ip;
    if (lead.country && !compiled.country) compiled.country = lead.country;
    if (lead.city && !compiled.city) compiled.city = lead.city;
    if (lead.region && !compiled.region) compiled.region = lead.region;
    if (lead.status && !compiled.crmStatus) compiled.crmStatus = lead.status;
    if (lead.assignedTo && !compiled.assignedRepresentative) compiled.assignedRepresentative = lead.assignedTo;
    if (lead.notes && !compiled.inquirerNotes) compiled.inquirerNotes = lead.notes;

    return compiled;
  }, [lead]);

  // Filtered raw properties for search
  const filteredRawEntries = useMemo(() => {
    const entries = Object.entries(rawSubmissionData);
    if (!rawSearchQuery.trim()) return entries;
    const q = rawSearchQuery.toLowerCase();
    return entries.filter(
      ([key, val]) => 
        key.toLowerCase().includes(q) || 
        String(val).toLowerCase().includes(q)
    );
  }, [rawSubmissionData, rawSearchQuery]);

  // Format date helper
  const formattedDate = useMemo(() => {
    if (!lead?.time) return 'N/A';
    const date = new Date(lead.time);
    if (isNaN(date.getTime())) return lead.time;
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }, [lead?.time]);

  // Relative time helper (e.g., "5 minutes ago")
  const relativeTime = useMemo(() => {
    if (!lead?.time) return '';
    const date = new Date(lead.time);
    if (isNaN(date.getTime())) return '';
    const diffSec = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diffSec < 60) return 'Just now';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)} min ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} hr ago`;
    return `${Math.floor(diffSec / 86400)} days ago`;
  }, [lead?.time]);

  // Save changes handler
  const handleSave = async () => {
    if (!lead || !onUpdateLead) return;
    setIsSaving(true);
    try {
      await onUpdateLead(lead.id, {
        status,
        assignedTo,
        notes,
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (e) {
      console.error('Failed to update lead from modal:', e);
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen || !lead) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      id="lead-detail-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-lead-title"
    >
      <div 
        className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto"
        id="lead-detail-modal-container"
      >
        {/* Modal Top Navigation Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800/80 bg-slate-950/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 id="modal-lead-title" className="text-xl font-bold text-white tracking-tight font-display">
                {lead.name}
              </h2>

              {/* Status Badge */}
              <span className={`text-[11px] uppercase font-mono tracking-wider font-semibold px-2.5 py-0.5 rounded-full ${
                lead.status === 'New' ? 'bg-blue-950/80 text-blue-400 border border-blue-800/40' :
                lead.status === 'Contacted' ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-800/40' :
                lead.status === 'Proposal Sent' ? 'bg-purple-950/80 text-purple-400 border border-purple-800/40' :
                lead.status === 'In Progress' ? 'bg-amber-950/80 text-amber-400 border border-amber-800/40' :
                lead.status === 'Converted' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40' :
                lead.status === 'Spam' ? 'bg-slate-900 text-slate-500 border border-slate-800' :
                'bg-slate-950 text-slate-400 border border-slate-800'
              }`}>
                {lead.status}
              </span>

              {lead.assignedTo && lead.assignedTo !== 'Unassigned' && (
                <span className="bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <UserCheck className="w-3 h-3 text-brand-indigo" />
                  <span>{lead.assignedTo}</span>
                </span>
              )}
            </div>

            {/* Lead Meta Strip */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1 text-slate-300">
                <Clock className="w-3 h-3 text-slate-500" />
                <span>{formattedDate}</span>
                {relativeTime && <span className="text-slate-500 font-normal">({relativeTime})</span>}
              </span>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <button
                type="button"
                onClick={() => copyToClipboard(lead.id, 'id')}
                className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px] bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded-md hover:border-slate-700 transition-colors"
                title="Click to copy lead unique ID"
              >
                <span>ID: {lead.id.slice(0, 14)}...</span>
                {copiedField === 'id' ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Actions & Close Button */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              onClick={() => copyToClipboard(JSON.stringify(rawSubmissionData, null, 2), 'raw-json')}
              className="px-3 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              title="Copy entire raw submission data as formatted JSON"
            >
              {copiedField === 'raw-json' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">JSON Copied</span>
                </>
              ) : (
                <>
                  <Code2 className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>Copy Raw JSON</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer"
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Tabs Bar */}
        <div className="flex items-center gap-2 px-4 sm:px-6 py-2.5 border-b border-slate-800/80 bg-slate-950/20 text-xs font-semibold shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-brand-indigo text-white shadow-md shadow-brand-indigo/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Overview & Context</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('raw')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'raw'
                ? 'bg-brand-indigo text-white shadow-md shadow-brand-indigo/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Raw Submission Data</span>
            <span className="bg-slate-800 text-slate-300 text-[10px] font-mono px-1.5 py-0.2 rounded-full">
              {Object.keys(rawSubmissionData).length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('manage')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'manage'
                ? 'bg-brand-indigo text-white shadow-md shadow-brand-indigo/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Manage & Update</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-slate-200">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Primary Contact Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Email Box */}
                <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Mail className="w-3.5 h-3.5 text-brand-indigo" />
                      <span>Email Address</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(lead.email, 'email')}
                      className="text-[10px] font-mono text-slate-500 hover:text-slate-200 cursor-pointer"
                    >
                      {copiedField === 'email' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <a 
                    href={`mailto:${lead.email}`}
                    className="text-sm font-semibold text-white hover:text-brand-indigo transition-colors block truncate"
                  >
                    {lead.email}
                  </a>
                </div>

                {/* Phone Box */}
                <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Phone Number</span>
                    </span>
                    {lead.phone && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(lead.phone || '', 'phone')}
                        className="text-[10px] font-mono text-slate-500 hover:text-slate-200 cursor-pointer"
                      >
                        {copiedField === 'phone' ? 'Copied!' : 'Copy'}
                      </button>
                    )}
                  </div>
                  {lead.phone ? (
                    <a 
                      href={`tel:${lead.phone}`}
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors block font-mono"
                    >
                      {lead.phone}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 italic">Not provided</span>
                  )}
                </div>

                {/* Company & Website */}
                <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-2xl space-y-2 md:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Building className="w-3.5 h-3.5 text-amber-400" />
                      <span>Company & URL</span>
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-white truncate">
                      {lead.companyName || 'Private Individual'}
                    </div>
                    {lead.websiteUrl ? (
                      <a 
                        href={lead.websiteUrl.startsWith('http') ? lead.websiteUrl : `https://${lead.websiteUrl}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-brand-indigo hover:underline flex items-center gap-1 truncate"
                      >
                        <span className="truncate">{lead.websiteUrl}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-500 italic block">No URL specified</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Commercial Intent & Project Parameters */}
              <div className="bg-slate-950/40 border border-slate-800/90 rounded-2xl p-4 sm:p-5 space-y-4">
                <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Commercial Intent & Requirements</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 uppercase font-mono block mb-1">Declared Budget</span>
                    <span className="text-sm font-bold font-mono text-emerald-400">
                      {lead.budget || 'Not specified'}
                    </span>
                  </div>

                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 uppercase font-mono block mb-1">Primary Objective</span>
                    <span className="text-sm font-semibold text-white">
                      {lead.primaryGoal || 'General Consultation'}
                    </span>
                  </div>

                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 uppercase font-mono block mb-1">Assigned Representative</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {lead.assignedTo || 'Unassigned'}
                    </span>
                  </div>
                </div>

                {/* Inquirer Message or Notes */}
                {lead.notes && (
                  <div className="mt-4 pt-4 border-t border-slate-800/80">
                    <span className="text-[10.5px] uppercase font-mono tracking-wider font-semibold text-slate-400 block mb-2">
                      Inquirer Message / Project Notes
                    </span>
                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap font-sans">
                      "{lead.notes}"
                    </div>
                  </div>
                )}
              </div>

              {/* Source Origin & Geo-Location Trace */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Source Page Info */}
                <div className="bg-slate-950/40 border border-slate-800/90 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span>Submission Origin</span>
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[10.5px] text-slate-500 font-mono block">Page Title:</span>
                      <span className="font-semibold text-white leading-tight block pt-0.5">
                        {lead.pageTitle || 'AKGLS Website'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10.5px] text-slate-500 font-mono block">Captured URL:</span>
                      <a
                        href={lead.pageAddress}
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-indigo hover:underline flex items-center gap-1 font-mono text-[11px] break-all pt-0.5"
                      >
                        <span className="break-all">{lead.pageAddress}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Geolocation & Network Trace */}
                <div className="bg-slate-950/40 border border-slate-800/90 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>Geo-Location & Network Trace</span>
                  </h3>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[10.5px] text-slate-500 font-mono">Location:</span>
                      <span className="font-semibold text-slate-200">
                        {lead.country && lead.country !== 'Unknown'
                          ? `${lead.city ? lead.city + ', ' : ''}${lead.region ? lead.region + ', ' : ''}${lead.country}`
                          : 'Location Blocked or Local Host'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10.5px] text-slate-500 font-mono">Client IP:</span>
                      <span className="font-mono text-[11px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-300">
                        {lead.ip || '127.0.0.1 (Local)'}
                      </span>
                      {lead.ip && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(lead.ip || '', 'ip')}
                          className="text-[10px] text-slate-500 hover:text-white"
                        >
                          {copiedField === 'ip' ? 'Copied' : 'Copy'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RAW SUBMISSION DATA */}
          {activeTab === 'raw' && (
            <div className="space-y-4">
              {/* Raw Bar Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950/60 p-3 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex items-center text-xs">
                    <button
                      type="button"
                      onClick={() => setRawViewMode('table')}
                      className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                        rawViewMode === 'table'
                          ? 'bg-brand-indigo text-white font-semibold shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Layers className="w-3 h-3" />
                      <span>Key-Value Explorer</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setRawViewMode('json')}
                      className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                        rawViewMode === 'json'
                          ? 'bg-brand-indigo text-white font-semibold shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Code2 className="w-3 h-3" />
                      <span>Formatted JSON</span>
                    </button>
                  </div>

                  <span className="text-[11px] text-slate-500 font-mono">
                    {filteredRawEntries.length} field{filteredRawEntries.length === 1 ? '' : 's'}
                  </span>
                </div>

                {/* Attribute Search */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={rawSearchQuery}
                    onChange={(e) => setRawSearchQuery(e.target.value)}
                    placeholder="Search attributes or values..."
                    className="bg-slate-900 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-indigo w-full sm:w-64"
                  />
                  {rawSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setRawSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* View Mode 1: Key-Value Table */}
              {rawViewMode === 'table' && (
                <div className="bg-slate-950/60 border border-slate-800 rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-950 border-b border-slate-800 text-[10px] uppercase text-slate-400 tracking-wider">
                        <tr>
                          <th className="py-3 px-4 w-1/3">Field Name</th>
                          <th className="py-3 px-4 w-1/2">Submitted Value</th>
                          <th className="py-3 px-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {filteredRawEntries.length === 0 ? (
                          <tr>
                            <td colSpan={3} className="py-8 text-center text-slate-500 font-sans italic">
                              No fields matched your filter criteria "{rawSearchQuery}"
                            </td>
                          </tr>
                        ) : (
                          filteredRawEntries.map(([key, value]) => {
                            const strValue = typeof value === 'object' && value !== null 
                              ? JSON.stringify(value) 
                              : String(value ?? '');
                            return (
                              <tr key={key} className="hover:bg-slate-900/40 transition-colors group">
                                <td className="py-2.5 px-4 font-semibold text-brand-indigo break-all">
                                  <span className="flex items-center gap-1.5">
                                    <Tag className="w-3 h-3 text-slate-600 group-hover:text-brand-indigo transition-colors" />
                                    <span>{key}</span>
                                  </span>
                                </td>
                                <td className="py-2.5 px-4 text-slate-200 break-all">
                                  {typeof value === 'object' && value !== null ? (
                                    <span className="text-amber-300 font-mono text-[11px] bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800">
                                      {strValue}
                                    </span>
                                  ) : (
                                    <span>{strValue || <span className="text-slate-600 italic">empty</span>}</span>
                                  )}
                                </td>
                                <td className="py-2.5 px-4 text-right">
                                  <button
                                    type="button"
                                    onClick={() => copyToClipboard(strValue, `raw-${key}`)}
                                    className="p-1 px-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-[10px] cursor-pointer transition-colors"
                                    title={`Copy value of ${key}`}
                                  >
                                    {copiedField === `raw-${key}` ? (
                                      <Check className="w-3 h-3 text-emerald-400 inline" />
                                    ) : (
                                      <Copy className="w-3 h-3 inline" />
                                    )}
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* View Mode 2: Formatted JSON */}
              {rawViewMode === 'json' && (
                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden p-4">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span>rawSubmissionData.json</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(JSON.stringify(rawSubmissionData, null, 2), 'raw-json-tab')}
                      className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedField === 'raw-json-tab' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy JSON</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-xs font-mono text-emerald-400/90 overflow-x-auto p-2 bg-black/40 rounded-xl leading-relaxed">
                    {JSON.stringify(rawSubmissionData, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: MANAGE & UPDATE */}
          {activeTab === 'manage' && (
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-5 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-brand-indigo" />
                    <span>CRM Lead Pipeline Management</span>
                  </h3>
                  <p className="text-xs text-slate-400">Update status, assign representatives, and document engagement history</p>
                </div>

                {saveSuccess && (
                  <span className="bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Saved Successfully</span>
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10.5px] uppercase font-mono tracking-wider font-semibold text-slate-400 mb-1.5" htmlFor="modal-status-select">
                    Pipeline Status
                  </label>
                  <select
                    id="modal-status-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white uppercase tracking-wider font-mono focus:outline-none focus:border-brand-indigo cursor-pointer"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Converted">Converted</option>
                    <option value="Spam">Spam</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10.5px] uppercase font-mono tracking-wider font-semibold text-slate-400 mb-1.5" htmlFor="modal-assignee-input">
                    Assigned Representative
                  </label>
                  <input
                    id="modal-assignee-input"
                    type="text"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    placeholder="e.g. Amrish Singh, Senior Partner"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-indigo"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10.5px] uppercase font-mono tracking-wider font-semibold text-slate-400 mb-1.5" htmlFor="modal-notes-input">
                  Administrative Notes & Follow-up Logs
                </label>
                <textarea
                  id="modal-notes-input"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Record client communication history, pitch meetings, proposal links, or next action dates..."
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-indigo"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                {onDeleteLead ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Are you sure you want to delete the inquiry from "${lead.name}"?`)) {
                        onDeleteLead(lead.id);
                        onClose();
                      }
                    }}
                    className="px-3.5 py-2 bg-red-950/30 hover:bg-red-950/60 border border-red-900/40 text-red-400 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                  >
                    Delete Inquiry
                  </button>
                ) : <div />}

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="px-5 py-2 bg-brand-indigo hover:bg-brand-indigo/90 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer shadow-lg shadow-brand-indigo/20"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{isSaving ? 'Saving Changes...' : 'Save Pipeline Changes'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-[11px] text-slate-400">Authenticated Enterprise CRM • Real-time Firestore</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-medium transition-all cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
