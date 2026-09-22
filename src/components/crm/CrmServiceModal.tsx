import React, { useState, useEffect } from 'react';
import { X, Layers, DollarSign, Calendar, Percent, Check, CheckCircle2 } from 'lucide-react';
import { 
  CrmService, 
  CrmServiceCategory, 
  CrmServiceStatus, 
  CrmPricingModel 
} from '../../types/crm';

interface CrmServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (service: CrmService) => void;
  serviceToEdit?: CrmService | null;
  defaultCurrency?: 'INR' | 'USD';
}

export default function CrmServiceModal({
  isOpen,
  onClose,
  onSave,
  serviceToEdit,
  defaultCurrency = 'INR'
}: CrmServiceModalProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<CrmServiceCategory>('seo');
  const [status, setStatus] = useState<CrmServiceStatus>('Active');
  const [pricingModel, setPricingModel] = useState<CrmPricingModel>('Monthly Retainer');
  const [budgetOrFee, setBudgetOrFee] = useState<number>(35000);
  const [currency, setCurrency] = useState<'INR' | 'USD'>(defaultCurrency);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [renewalDate, setRenewalDate] = useState('');
  const [deliverablesSummary, setDeliverablesSummary] = useState('');
  const [progressPercentage, setProgressPercentage] = useState<number>(50);

  useEffect(() => {
    if (serviceToEdit) {
      setName(serviceToEdit.name || '');
      setCategory(serviceToEdit.category || 'seo');
      setStatus(serviceToEdit.status || 'Active');
      setPricingModel(serviceToEdit.pricingModel || 'Monthly Retainer');
      setBudgetOrFee(serviceToEdit.budgetOrFee || 0);
      setCurrency(serviceToEdit.currency || defaultCurrency);
      setStartDate(serviceToEdit.startDate || new Date().toISOString().split('T')[0]);
      setRenewalDate(serviceToEdit.renewalDate || '');
      setDeliverablesSummary(serviceToEdit.deliverablesSummary || '');
      setProgressPercentage(serviceToEdit.progressPercentage || 0);
    } else {
      setName('');
      setCategory('seo');
      setStatus('Active');
      setPricingModel('Monthly Retainer');
      setBudgetOrFee(defaultCurrency === 'USD' ? 1500 : 35000);
      setCurrency(defaultCurrency);
      setStartDate(new Date().toISOString().split('T')[0]);
      
      const nextYear = new Date();
      nextYear.setFullYear(nextYear.getFullYear() + 1);
      setRenewalDate(nextYear.toISOString().split('T')[0]);
      setDeliverablesSummary('');
      setProgressPercentage(25);
    }
  }, [serviceToEdit, defaultCurrency, isOpen]);

  if (!isOpen) return null;

  const handleQuickServicePick = (selectedName: string, cat: CrmServiceCategory) => {
    setName(selectedName);
    setCategory(cat);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const srvData: CrmService = {
      id: serviceToEdit?.id || `srv_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      category,
      status,
      pricingModel,
      budgetOrFee: Number(budgetOrFee) || 0,
      currency,
      startDate,
      renewalDate: renewalDate || undefined,
      deliverablesSummary: deliverablesSummary.trim(),
      progressPercentage: Math.min(100, Math.max(0, Number(progressPercentage) || 0))
    };

    onSave(srvData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0f172a] border border-slate-750 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {serviceToEdit ? 'Edit Client Service' : 'Add Service Taken by Client'}
              </h3>
              <p className="text-xs text-slate-400">
                Track deliverables, monthly fees, milestones, and implementation progress.
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

        {/* Quick presets */}
        {!serviceToEdit && (
          <div className="px-6 pt-4 pb-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Quick Pick Agency Services:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'Full-Stack Web Development', cat: 'webdev' as CrmServiceCategory },
                { name: 'Technical & On-Page SEO', cat: 'seo' as CrmServiceCategory },
                { name: 'Google Ads & Performance Max', cat: 'ppc' as CrmServiceCategory },
                { name: 'Meta Ads & Instagram Funnel', cat: 'ppc' as CrmServiceCategory },
                { name: 'Generative Engine Optimization (GEO)', cat: 'aiseo' as CrmServiceCategory },
                { name: 'Shopify Store & CRO', cat: 'webdev' as CrmServiceCategory },
                { name: 'Local SEO & Google 3-Pack', cat: 'seo' as CrmServiceCategory },
                { name: 'WordPress Maintenance & Speed', cat: 'maintenance' as CrmServiceCategory }
              ].map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuickServicePick(preset.name, preset.cat)}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                >
                  + {preset.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Service Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Technical SEO & Schema Graph"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Service Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CrmServiceCategory)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="webdev">💻 Web & Shopify Development</option>
                <option value="seo">🔍 Search Engine Optimization (SEO)</option>
                <option value="ppc">🎯 Google & Paid Ads (PPC)</option>
                <option value="aiseo">🤖 AI Search & GEO Optimization</option>
                <option value="smm">📱 Social Media Marketing (SMM)</option>
                <option value="content">✍️ Content & Whitepapers</option>
                <option value="maintenance">⚡ Speed & Server Maintenance</option>
                <option value="branding">🎨 Branding & Graphic Design</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as CrmServiceStatus)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="Active">🟢 Active</option>
                <option value="In Progress">🟡 In Progress</option>
                <option value="Under Review">🔵 Under Review</option>
                <option value="Completed">✅ Completed</option>
                <option value="Paused">⏸️ Paused</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Billing Model
              </label>
              <select
                value={pricingModel}
                onChange={(e) => setPricingModel(e.target.value as CrmPricingModel)}
                className="w-full bg-slate-900/80 border border-slate-750 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
              >
                <option value="Monthly Retainer">Monthly Recurring Retainer</option>
                <option value="One-Time Project">One-Time Project Fee</option>
                <option value="Milestone">Milestone Based</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Fee / Budget Amount
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
                    value={budgetOrFee || ''}
                    onChange={(e) => setBudgetOrFee(Number(e.target.value))}
                    className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Service Start Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Renewal / Target End Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="date"
                  value={renewalDate}
                  onChange={(e) => setRenewalDate(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-750 rounded-xl pl-9 pr-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-brand-teal"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Implementation / Deliverables Progress
              </label>
              <span className="text-xs font-mono font-bold text-brand-teal">
                {progressPercentage}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={progressPercentage}
              onChange={(e) => setProgressPercentage(Number(e.target.value))}
              className="w-full accent-teal-400 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Key Deliverables & Action Scope
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Weekly audits, Core Web Vitals score 90+, Google Shopping feed sync, Perplexity entity citations..."
              value={deliverablesSummary}
              onChange={(e) => setDeliverablesSummary(e.target.value)}
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
              className="px-5 py-2 rounded-xl text-sm font-bold bg-brand-purple text-white hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/10 flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>{serviceToEdit ? 'Save Service' : 'Add Service to Client'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
