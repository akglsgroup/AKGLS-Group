import { useState } from 'react';
import { Download, Smartphone, Share2, PlusSquare, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'header' | 'footer' | 'floating';
}

export function PWAInstallButton({ className = '', variant = 'nav' }: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installedSuccess, setInstalledSuccess] = useState(false);

  // Suppress if already running in standalone mode
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      setInstalledSuccess(true);
      setTimeout(() => setInstalledSuccess(false), 4000);
    }
  };

  // Base styles for navigation header
  const navStyle = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-indigo/15 text-brand-teal border border-brand-teal/30 hover:bg-brand-teal hover:text-slate-950 transition-all shadow-sm";

  return (
    <>
      {/* Chromium / Android / Desktop prompt available */}
      {isInstallable && (
        <button
          type="button"
          onClick={handleInstallClick}
          id="pwa-install-btn"
          className={className || navStyle}
          aria-label="Install AKGLS Web App"
          title="Install app for faster loading and offline access"
        >
          {installedSuccess ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Installed!</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5" />
              <span>Install App</span>
            </>
          )}
        </button>
      )}

      {/* iOS Safari manual instructions guide trigger */}
      {!isInstallable && isIOS && (
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          id="pwa-install-ios-btn"
          className={className || navStyle}
          aria-label="Install AKGLS App on iOS Safari"
          title="Add to iOS Home Screen"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Install App</span>
        </button>
      )}

      {/* Fallback button on desktop when prompt hasn't fired yet or to provide manual guidance */}
      {!isInstallable && !isIOS && variant === 'footer' && (
        <button
          type="button"
          onClick={() => {
            alert('To install this web app, use the install button in your browser address bar (Chromium/Edge) or choose "Install AKGLS Group" in your browser menu.');
          }}
          className={className}
          title="Install Web App"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install App (PWA)</span>
        </button>
      )}

      {/* iOS Install Instruction Modal */}
      {showIOSGuide && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ios-install-title"
        >
          <div className="w-full max-w-sm rounded-2xl bg-[#121829] border border-slate-700/60 p-6 text-white shadow-2xl relative">
            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close installation guide"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-indigo/30 border border-brand-teal/40 flex items-center justify-center text-brand-teal">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 id="ios-install-title" className="text-base font-bold text-white font-display">
                  Install on iPhone / iPad
                </h3>
                <p className="text-xs text-slate-400">Offline static access & instant loading</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300 mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-800 text-brand-teal flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </div>
                <p>
                  Tap the <strong className="text-white inline-flex items-center gap-1 mx-1 bg-slate-800 px-1.5 py-0.5 rounded"><Share2 className="w-3 h-3 text-brand-teal" /> Share</strong> button in Safari's bottom toolbar.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-800 text-brand-teal flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </div>
                <p>
                  Scroll down the menu and tap <strong className="text-white inline-flex items-center gap-1 mx-1 bg-slate-800 px-1.5 py-0.5 rounded"><PlusSquare className="w-3 h-3 text-brand-teal" /> Add to Home Screen</strong>.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-800 text-brand-teal flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </div>
                <p>
                  Confirm by tapping <strong className="text-brand-teal font-semibold">Add</strong> in the top-right corner to launch AKGLS as a native fullscreen app.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 rounded-xl bg-brand-indigo text-white font-bold text-xs hover:bg-brand-indigo/90 transition-colors shadow-sm"
            >
              Got it, continue browsing
            </button>
          </div>
        </div>
      )}
    </>
  );
}
