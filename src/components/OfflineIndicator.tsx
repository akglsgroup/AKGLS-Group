import { WifiOff, RefreshCw } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <aside 
      id="pwa-offline-indicator"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 max-w-sm rounded-xl bg-slate-900/95 border border-amber-500/40 text-slate-200 px-3.5 py-2.5 shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs animate-in slide-in-from-bottom-2 duration-300"
    >
      <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
        <WifiOff className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse inline-block" />
          Offline Mode Active
        </p>
        <p className="text-[11px] text-slate-400 truncate">
          Serving cached static pages & content.
        </p>
      </div>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
        title="Retry connection"
        aria-label="Retry connection"
      >
        <RefreshCw className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
