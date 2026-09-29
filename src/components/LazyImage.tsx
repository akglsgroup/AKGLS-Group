import React, { useState, useEffect, useRef } from 'react';
import { ImageOff, Sparkles } from 'lucide-react';

export interface LazyImageProps extends React.ComponentPropsWithoutRef<'img'> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: string; // e.g. "16/9", "4/3", "1/1", "16/10"
  containerClassName?: string;
  imgClassName?: string;
  className?: string;
  priority?: boolean; // For above-the-fold hero images (LCP boost)
  showShimmer?: boolean;
  blurEffect?: boolean;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  width?: number | string;
  height?: number | string;
  id?: string;
  onImageLoad?: () => void;
  onImageError?: () => void;
  [key: string]: any;
}

export function LazyImage({
  src,
  alt,
  fallbackSrc,
  aspectRatio,
  containerClassName = '',
  imgClassName = '',
  className = '',
  priority = false,
  showShimmer = true,
  blurEffect = true,
  width,
  height,
  referrerPolicy = 'no-referrer',
  onImageLoad,
  onImageError,
  ...restProps
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for view-port threshold loading
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '250px 0px', // Preload when within 250px of viewport
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Reset state if src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onImageLoad) onImageLoad();
  };

  const handleError = () => {
    setHasError(true);
    if (onImageError) onImageError();
  };

  const resolvedSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName} ${
        aspectRatio ? '' : ''
      }`}
      style={{
        aspectRatio: aspectRatio || undefined,
        width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
      }}
    >
      {/* SHIMMER SKELETON PLACEHOLDER */}
      {!isLoaded && !hasError && showShimmer && (
        <div 
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-slate-900/80 animate-pulse flex items-center justify-center overflow-hidden"
        >
          {/* Subtle gradient shimmer pass */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/40 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />
          <Sparkles className="w-5 h-5 text-slate-700/50" />
        </div>
      )}

      {/* FALLBACK STATE ON BROKEN / ERROR URLS */}
      {hasError && !fallbackSrc && (
        <div 
          role="img" 
          aria-label={alt || 'Image failed to load'} 
          className="absolute inset-0 z-0 bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center p-3 text-center text-slate-500"
        >
          <ImageOff className="w-6 h-6 mb-1 text-slate-600" />
          <span className="text-[10px] font-mono truncate max-w-[90%]">{alt || 'Image unavailable'}</span>
        </div>
      )}

      {/* THE ACTUAL LAZY-LOADED IMAGE */}
      {isInView && (
        <img
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          referrerPolicy={referrerPolicy}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-all duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${blurEffect && !isLoaded ? 'scale-105 blur-sm' : 'scale-100 blur-0'} ${
            imgClassName || className || 'w-full h-full object-cover'
          }`}
          {...restProps}
        />
      )}
    </div>
  );
}

export default LazyImage;
export const Image = LazyImage;
