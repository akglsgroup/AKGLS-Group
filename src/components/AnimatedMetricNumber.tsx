import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';

interface AnimatedMetricNumberProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function AnimatedMetricNumber({ 
  value, 
  className = '', 
  duration = 2.0 
}: AnimatedMetricNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState<string>(value);

  useEffect(() => {
    // Parse the value string for numeric portion, prefix, and suffix
    // Examples:
    // "+140,000/mo" -> prefix: "+", target: 140000, decimals: 0, suffix: "/mo", hasCommas: true
    // "$22,000/mo"  -> prefix: "$", target: 22000,  decimals: 0, suffix: "/mo", hasCommas: true
    // "+42.5%"      -> prefix: "+", target: 42.5,   decimals: 1, suffix: "%",   hasCommas: false
    // "Rank #1 Option" -> prefix: "Rank #", target: 1, decimals: 0, suffix: " Option", hasCommas: false
    const match = value.match(/^([^\d]*?)([\d,]+(?:\.\d+)?)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const rawNumberStr = match[2];
    const suffix = match[3];
    const targetNumber = parseFloat(rawNumberStr.replace(/,/g, ''));
    const decimals = rawNumberStr.includes('.') ? rawNumberStr.split('.')[1].length : 0;
    const hasCommas = rawNumberStr.includes(',');

    // Helper to format the counter
    const formatNumber = (current: number) => {
      let formatted: string;
      if (decimals > 0) {
        formatted = current.toFixed(decimals);
        if (hasCommas) {
          const parts = formatted.split('.');
          parts[0] = parseInt(parts[0], 10).toLocaleString('en-US');
          formatted = parts.join('.');
        }
      } else {
        const rounded = Math.round(current);
        formatted = hasCommas ? rounded.toLocaleString('en-US') : rounded.toString();
      }
      return `${prefix}${formatted}${suffix}`;
    };

    if (!isInView) {
      // Prior to entering viewport: start at zero
      setDisplayValue(formatNumber(0));
      return;
    }

    // Trigger counting animation when in view
    const controls = animate(0, targetNumber, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier easeOut
      onUpdate(latest) {
        setDisplayValue(formatNumber(latest));
      },
      onComplete() {
        // Ensure final exact value formatting matches original
        setDisplayValue(value);
      }
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
