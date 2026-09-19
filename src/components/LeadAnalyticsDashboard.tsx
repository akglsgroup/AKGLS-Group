import React, { useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area, CartesianGrid, Legend 
} from 'recharts';
import { 
  TrendingUp, Users, Target, DollarSign, Globe, CheckCircle2, 
  PieChart as PieIcon, BarChart3, Clock, ArrowUpRight 
} from 'lucide-react';
import { LeadRecord } from '../types';

interface LeadAnalyticsDashboardProps {
  leads: LeadRecord[];
  onCreateTestLead?: () => void;
}

// Consistent dark palette for analytics
const STATUS_COLORS: Record<string, string> = {
  'New': '#38bdf8',         // Sky
  'Contacted': '#818cf8',   // Indigo
  'In Progress': '#fbbf24', // Amber
  'Converted': '#34d399',   // Emerald
  'Archived': '#64748b',    // Slate
  'Spam': '#f87171',        // Rose
};

const PALETTE = ['#6366f1', '#14b8a6', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#10b981'];

export default function LeadAnalyticsDashboard({ leads, onCreateTestLead }: LeadAnalyticsDashboardProps) {
  // Aggregate Status Data
  const statusData = useMemo(() => {
    const counts: Record<string, number> = {
      'New': 0,
      'Contacted': 0,
      'In Progress': 0,
      'Converted': 0,
      'Archived': 0,
    };

    leads.forEach((l) => {
      const s = l.status || 'New';
      counts[s] = (counts[s] || 0) + 1;
    });

    return Object.entries(counts).map(([name, count]) => ({
      name,
      count,
      fill: STATUS_COLORS[name] || '#94a3b8',
    }));
  }, [leads]);

  // Aggregate Timeline Data (Daily acquisitions over the last 14 days or actual dates)
  const timelineData = useMemo(() => {
    if (leads.length === 0) return [];

    const dateMap = new Map<string, { date: string; leads: number; converted: number }>();

    // Sort leads chronologically
    const sorted = [...leads].sort((a, b) => new Date(a.time || 0).getTime() - new Date(b.time || 0).getTime());

    sorted.forEach((lead) => {
      const d = new Date(lead.time || Date.now());
      const key = isNaN(d.getTime()) 
        ? 'Recent' 
        : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

      const existing = dateMap.get(key) || { date: key, leads: 0, converted: 0 };
      existing.leads += 1;
      if (lead.status === 'Converted') {
        existing.converted += 1;
      }
      dateMap.set(key, existing);
    });

    return Array.from(dateMap.values());
  }, [leads]);

  // Aggregate Primary Goal / Service Requested
  const goalData = useMemo(() => {
    const goals: Record<string, number> = {};

    leads.forEach((l) => {
      const g = l.primaryGoal?.trim() || 'General Inquiry';
      goals[g] = (goals[g] || 0) + 1;
    });

    return Object.entries(goals)
      .map(([goal, count]) => ({
        goal: goal.length > 22 ? goal.slice(0, 20) + '…' : goal,
        fullGoal: goal,
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, [leads]);

  // Aggregate Budget Distribution
  const budgetData = useMemo(() => {
    const brackets: Record<string, number> = {};

    leads.forEach((l) => {
      const b = l.budget?.trim() || 'Not Disclosed';
      brackets[b] = (brackets[b] || 0) + 1;
    });

    return Object.entries(brackets)
      .map(([budget, count]) => ({ budget, count }))
      .sort((a, b) => b.count - a.count);
  }, [leads]);

  // Geographic Breakdown
  const geoData = useMemo(() => {
    const geoMap: Record<string, number> = {};

    leads.forEach((l) => {
      const loc = [l.city, l.country].filter(Boolean).join(', ') || l.country || 'Global / Online';
      geoMap[loc] = (geoMap[loc] || 0) + 1;
    });

    return Object.entries(geoMap)
      .map(([location, count]) => ({ location, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [leads]);

  // Analytical Metrics
  const total = leads.length;
  const converted = leads.filter(l => l.status === 'Converted').length;
  const inPipeline = leads.filter(l => l.status === 'Contacted' || l.status === 'In Progress').length;
  const unaddressed = leads.filter(l => l.status === 'New').length;
  const conversionRate = total > 0 ? ((converted / total) * 100).toFixed(1) : '0.0';
  const pipelineRate = total > 0 ? (((converted + inPipeline) / total) * 100).toFixed(1) : '0.0';

  if (leads.length === 0) {
    return (
      <div className="bg-slate-900/20 border border-dashed border-slate-800 rounded-3xl p-12 text-center my-6" id="analytics-empty-state">
        <BarChart3 className="w-12 h-12 text-slate-700 mx-auto mb-4" />
        <h3 className="text-base font-semibold text-slate-200">No Lead Data Available for Visualization</h3>
        <p className="text-slate-400 text-xs mt-1.5 max-w-md mx-auto">
          Analytics will automatically populate once inquiries are captured through website landing pages or the proposal builder.
        </p>
        {onCreateTestLead && (
          <button
            onClick={onCreateTestLead}
            className="mt-6 px-4 py-2 bg-brand-indigo hover:bg-brand-indigo/90 text-white text-xs font-semibold rounded-xl transition-all shadow-md cursor-pointer"
          >
            Create Sample Lead to Test Analytics
          </button>
        )}
      </div>
    );
  }

  // Custom Chart Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-2.5 rounded-xl shadow-xl text-xs font-mono">
          <div className="text-slate-300 font-bold mb-1">{label || payload[0]?.name}</div>
          {payload.map((entry: any, index: number) => (
            <div key={`tooltip-${index}`} className="flex items-center gap-2 text-slate-200">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.fill }} />
              <span className="capitalize">{entry.name}:</span>
              <strong className="text-white font-bold">{entry.value}</strong>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 my-6" id="crm-analytics-dashboard">
      {/* High-level Analytical KPI Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4.5 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
            <span>Conversion Ratio</span>
            <Target className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">{conversionRate}%</span>
            <span className="text-[11px] text-slate-500 font-mono">({converted}/{total})</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 font-mono flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Fully converted leads
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4.5 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
            <span>Engagement Rate</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">{pipelineRate}%</span>
            <span className="text-[11px] text-slate-500 font-mono">pipeline</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 font-mono">
            {inPipeline} active consultations ongoing
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4.5 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
            <span>Response Backlog</span>
            <Clock className="w-4 h-4 text-sky-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-sky-400">{unaddressed}</span>
            <span className="text-[11px] text-slate-500 font-mono">new</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 font-mono">
            Requires initial review / contact
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4.5 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
            <span>Total Captured</span>
            <Users className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white">{total}</span>
            <span className="text-[11px] text-slate-500 font-mono">submissions</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 font-mono">
            Unified across cloud & local
          </p>
        </div>
      </div>

      {/* Row 1: Status Distribution & Inflow Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Status Distribution Bar Chart */}
        <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-6" id="chart-status-breakdown">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-brand-indigo" />
                Pipeline Status Breakdown
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Distribution of leads across workflow stages</p>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
              {total} Total
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusData} margin={{ top: 10, right: 10, left: -15, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#64748b" 
                  fontSize={10} 
                  tickLine={false} 
                  angle={-20}
                  textAnchor="end"
                />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} allowDecimals={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" name="Leads" radius={[6, 6, 0, 0]}>
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-status-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Inflow Over Time (Area Chart) */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-6" id="chart-timeline">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Lead Acquisition Trajectory
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Chronological volume and conversion rate tracking</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-brand-indigo"></span> Inquiries
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Converted
              </span>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData} margin={{ top: 10, right: 10, left: -15, bottom: 10 }}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorConverted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={10} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} allowDecimals={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="leads" 
                  name="Leads" 
                  stroke="#6366f1" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorLeads)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="converted" 
                  name="Converted" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorConverted)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 2: Service Goals & Budget Segmentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Most Requested Goals / Services */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-6" id="chart-service-goals">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-sky-400" />
                Inquiries by Core Service & Goal
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Top business consultation and service requirements requested</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={goalData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" stroke="#64748b" fontSize={10} tickLine={false} allowDecimals={false} />
                <YAxis 
                  type="category" 
                  dataKey="goal" 
                  stroke="#94a3b8" 
                  fontSize={10} 
                  tickLine={false} 
                  width={110}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" name="Inquiries" radius={[0, 6, 6, 0]}>
                  {goalData.map((_, index) => (
                    <Cell key={`cell-goal-${index}`} fill={PALETTE[index % PALETTE.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Budget Distribution / Pie */}
        <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-6" id="chart-budget-pie">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-amber-400" />
                Budget Bracket Allocation
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Client planned expenditure brackets</p>
            </div>
          </div>

          <div className="h-64 w-full flex items-center justify-center">
            {budgetData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetData}
                    dataKey="count"
                    nameKey="budget"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={45}
                    paddingAngle={3}
                  >
                    {budgetData.map((_, index) => (
                      <Cell key={`cell-budget-${index}`} fill={PALETTE[index % PALETTE.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    iconSize={8}
                    wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-xs text-slate-500 font-mono">No budget data available</div>
            )}
          </div>
        </div>
      </div>

      {/* Row 3: Top Visitor Geographic Origins Table / Card */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-6" id="chart-geo-breakdown">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand-teal" />
            <h4 className="text-sm font-bold text-white">Top Inquiring Locations</h4>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Geographic Reach</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {geoData.map((item, idx) => {
            const percentage = total > 0 ? Math.round((item.count / total) * 100) : 0;
            return (
              <div key={idx} className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-xl">
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="truncate" title={item.location}>{item.location}</span>
                  <span className="font-mono text-white text-[11px] font-bold">{item.count}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div 
                    className="bg-brand-teal h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.max(percentage, 5)}%` }}
                  />
                </div>
                <div className="text-[9px] text-slate-500 font-mono mt-1 text-right">{percentage}% of total</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
