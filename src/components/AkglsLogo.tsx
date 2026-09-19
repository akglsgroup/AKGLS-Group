import React from 'react';

interface AkglsLogoProps {
  variant?: 'full' | 'navbar' | 'footer';
  theme?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
}

export default function AkglsLogo({
  variant = 'navbar',
  theme = 'dark',
  className = '',
  showTagline = true,
}: AkglsLogoProps) {
  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex flex-col text-left justify-center select-none ${className}`}>
      {/* Brand Wordmark: "AKGLS Group" */}
      <div className="flex items-baseline leading-none tracking-tight">
        <span 
          className={`font-black font-sans ${
            variant === 'full' 
              ? 'text-2xl sm:text-3xl tracking-tight' 
              : variant === 'navbar' 
              ? 'text-xl sm:text-2xl tracking-tight' 
              : 'text-2xl tracking-tight'
          } ${isDark ? 'text-white' : 'text-[#00174f]'}`}
        >
          AKGLS
        </span>
        <span 
          className={`font-extrabold ml-1.5 font-sans ${
            variant === 'full' 
              ? 'text-2xl sm:text-3xl' 
              : variant === 'navbar' 
              ? 'text-xl sm:text-2xl' 
              : 'text-2xl'
          } ${isDark ? 'text-slate-100' : 'text-[#00174f]'}`}
        >
          Group
        </span>
      </div>

      {/* Signature Gradient Divider Line matching the logo (Teal to Magenta) */}
      <div 
        className={`w-full rounded-full bg-gradient-to-r from-[#00c4b4] via-[#00a89d] to-[#ff1475] shadow-sm ${
          variant === 'full'
            ? 'h-[3px] my-1.5 sm:my-2'
            : variant === 'navbar'
            ? 'h-[2.5px] my-1 sm:my-1.5'
            : 'h-[2.5px] my-1.5'
        }`} 
      />

      {/* Tagline: "We're the 'Ctrl+Alt+Del' for Your Business" */}
      {showTagline && (
        <div 
          className={`font-sans tracking-tight leading-none whitespace-nowrap ${
            variant === 'full'
              ? 'text-xs sm:text-sm font-semibold'
              : variant === 'navbar'
              ? 'text-[10.5px] sm:text-[11.5px] font-medium'
              : 'text-xs font-medium'
          } ${isDark ? 'text-slate-300' : 'text-[#00174f]'}`}
        >
          <span>We’re the </span>
          <span className={isDark ? 'text-slate-400' : 'text-[#00174f]'}>‘</span>
          <span className="text-[#00c4b4] font-bold">Ctrl</span>
          <span className={isDark ? 'text-slate-200 font-bold' : 'text-[#00174f] font-bold'}>+Alt+</span>
          <span className="text-[#ff1475] font-bold">Del</span>
          <span className={isDark ? 'text-slate-400' : 'text-[#00174f]'}>’</span>
          <span className={isDark ? 'text-slate-300' : 'text-[#00174f]'}> for Your Business</span>
        </div>
      )}
    </div>
  );
}
