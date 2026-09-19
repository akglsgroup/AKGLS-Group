import React, { useEffect, useRef } from 'react';

interface EngineNode {
  name: string;
  sub: string;
  angle: number; // in radians
  distance: number; // distance from center
  color: string;
  glow: string;
  badgeBg: string;
  badgeBorder: string;
  icon: string;
}

export const CleanAdvancedHeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Engine Nodes
    const engines = [
      { name: 'ChatGPT', angle: -Math.PI * 0.75, color: '#10b981', glow: 'rgba(16, 185, 129, 0.4)' },
      { name: 'Perplexity', angle: -Math.PI * 0.25, color: '#14b8a6', glow: 'rgba(20, 184, 166, 0.4)' },
      { name: 'Google Gemini', angle: Math.PI * 0.35, color: '#6366f1', glow: 'rgba(99, 102, 241, 0.4)' },
      { name: 'Claude', angle: Math.PI * 0.85, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)' },
    ];

    // Background floating particles
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      size: 1 + Math.random() * 1.5,
      alpha: 0.15 + Math.random() * 0.35,
      color: Math.random() > 0.5 ? '#14b8a6' : '#6366f1',
    }));

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.36;

      // Draw background particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Concentric Orbit Rings
      const ringRadii = [radius * 0.55, radius, radius * 1.3];
      ringRadii.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 1 ? 'rgba(20, 184, 166, 0.22)' : 'rgba(99, 102, 241, 0.1)';
        ctx.lineWidth = idx === 1 ? 1.5 : 1;
        ctx.setLineDash(idx === 0 ? [3, 6] : idx === 1 ? [] : [4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Rotating subtle radar beam
      const radarAngle = time * 0.6;
      const radarGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.25);
      radarGrad.addColorStop(0, 'rgba(20, 184, 166, 0.15)');
      radarGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.05)');
      radarGrad.addColorStop(1, 'transparent');
      
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius * 1.25, radarAngle, radarAngle + Math.PI / 3);
      ctx.closePath();
      ctx.fillStyle = radarGrad;
      ctx.fill();
      ctx.restore();

      // Energy Beams from Center to 4 Engine Targets
      engines.forEach((eng, i) => {
        // Subtle orbital floating motion
        const currentAngle = eng.angle + Math.sin(time * 0.8 + i) * 0.05;
        const ex = cx + Math.cos(currentAngle) * radius;
        const ey = cy + Math.sin(currentAngle) * radius;

        // Draw beam connecting line
        const beamGrad = ctx.createLinearGradient(cx, cy, ex, ey);
        beamGrad.addColorStop(0, 'rgba(20, 184, 166, 0.6)');
        beamGrad.addColorStop(0.6, eng.glow);
        beamGrad.addColorStop(1, 'rgba(255, 255, 255, 0.8)');

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = beamGrad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Traveling Light Photons along the beam (Citation stream)
        const pulseProgress1 = (time * 0.4 + i * 0.25) % 1;
        const pulseProgress2 = (time * 0.4 + i * 0.25 + 0.5) % 1;

        [pulseProgress1, pulseProgress2].forEach((prog) => {
          const px = cx + (ex - cx) * prog;
          const py = cy + (ey - cy) * prog;

          // Glowing pulse dot
          const pGrad = ctx.createRadialGradient(px, py, 0, px, py, 6);
          pGrad.addColorStop(0, '#ffffff');
          pGrad.addColorStop(0.4, eng.color);
          pGrad.addColorStop(1, 'transparent');

          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fillStyle = pGrad;
          ctx.fill();
        });

        // Engine node halo
        const haloGrad = ctx.createRadialGradient(ex, ey, 0, ex, ey, 32);
        haloGrad.addColorStop(0, eng.glow);
        haloGrad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(ex, ey, 32, 0, Math.PI * 2);
        ctx.fillStyle = haloGrad;
        ctx.fill();

        // Engine outer ring
        ctx.beginPath();
        ctx.arc(ex, ey, 14, 0, Math.PI * 2);
        ctx.fillStyle = '#050914';
        ctx.fill();
        ctx.strokeStyle = eng.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Engine inner glowing core
        ctx.beginPath();
        ctx.arc(ex, ey, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = eng.color;
        ctx.fill();

        // Engine Label
        ctx.font = 'bold 11px system-ui, -apple-system, sans-serif';
        ctx.fillStyle = '#f8fafc';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Offset label outward from orbit
        const labelDist = radius + 32;
        const lx = cx + Math.cos(currentAngle) * labelDist;
        const ly = cy + Math.sin(currentAngle) * labelDist;
        
        // Background badge behind label
        const textWidth = ctx.measureText(eng.name).width;
        ctx.fillStyle = 'rgba(11, 17, 32, 0.85)';
        ctx.strokeStyle = 'rgba(51, 65, 85, 0.7)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(lx - textWidth / 2 - 8, ly - 10, textWidth + 16, 20, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.fillText(eng.name, lx, ly);
      });

      // Center Brand Entity Node
      const centerPulse = 1 + Math.sin(time * 2) * 0.08;
      
      // Outer ambient glowing auras
      const coreAura = ctx.createRadialGradient(cx, cy, 0, cx, cy, 54 * centerPulse);
      coreAura.addColorStop(0, 'rgba(20, 184, 166, 0.35)');
      coreAura.addColorStop(0.6, 'rgba(99, 102, 241, 0.15)');
      coreAura.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, 54 * centerPulse, 0, Math.PI * 2);
      ctx.fillStyle = coreAura;
      ctx.fill();

      // Center Core Shell
      ctx.beginPath();
      ctx.arc(cx, cy, 24, 0, Math.PI * 2);
      ctx.fillStyle = '#050914';
      ctx.fill();
      ctx.strokeStyle = '#14b8a6';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Center Core Inner Light
      const coreLight = ctx.createRadialGradient(cx, cy, 0, cx, cy, 14);
      coreLight.addColorStop(0, '#ffffff');
      coreLight.addColorStop(0.6, '#14b8a6');
      coreLight.addColorStop(1, '#0d9488');
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fillStyle = coreLight;
      ctx.fill();

      // Center Text Label
      ctx.font = 'bold 9px monospace';
      ctx.fillStyle = '#99f6e4';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('YOUR BRAND', cx, cy + 30);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center select-none"
      id="clean-advanced-hero-visual"
    >
      {/* Soft background ambient gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/15 via-transparent to-brand-indigo/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Crisp 60fps HTML5 Canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block relative z-10"
      />
    </div>
  );
};

export default CleanAdvancedHeroVisual;
