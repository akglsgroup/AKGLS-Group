import { useState } from 'react';
import { WifiOff, RefreshCw, Zap } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { forcePwaCacheRefresh } from '../utils/pwaCache';

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [statusText, setStatusText] = useState<string | null>(null);

  if (isOnline) {
    return null;
  }

  const handleForceRefresh = async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    try {
      await forcePwaCacheRefresh({
        onStatusUpdate: (msg) => setStatusText(msg)
      });
    } catch (_) {
      window.location.reload();
    }
  };

  return (
    <aside 
      id="pwa-offline-indicator"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 max-w-md rounded-2xl bg-slate-900/95 border border-amber-500/40 text-slate-200 p-3.5 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs animate-in slide-in-from-bottom-2 duration-300"
    >
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
          <WifiOff className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse inline-block" />
            Offline Mode Active
          </p>
          <p className="text-[11px] text-slate-400 truncate">
            {statusText || 'Serving cached static pages & content.'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end pt-1 sm:pt-0 border-t border-slate-800 sm:border-t-0">
        <button
          type="button"
          onClick={handleForceRefresh}
          disabled={isRefreshing}
          className="px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-semibold transition-all flex items-center gap-1.5 shrink-0 disabled:opacity-50 cursor-pointer shadow-sm"
          title="Clear PWA Service Worker cache & force reload"
          aria-label="Force Refresh and clear cache"
        >
          <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>{isRefreshing ? 'Refreshing...' : 'Force Refresh'}</span>
        </button>

        <button
          type="button"
          onClick={() => window.location.reload()}
          disabled={isRefreshing}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
          title="Retry connection"
          aria-label="Retry connection"
        >
          <Zap className="w-3.5 h-3.5 text-slate-400 hover:text-amber-400" />
        </button>
      </div>
    </aside>
  );
}
