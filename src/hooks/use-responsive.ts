import { useState, useEffect } from 'react';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < breakpoints.md;
  const isTablet = windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg;
  const isDesktop = windowSize.width >= breakpoints.lg;

  const isAboveSm = windowSize.width >= breakpoints.sm;
  const isAboveMd = windowSize.width >= breakpoints.md;
  const isAboveLg = windowSize.width >= breakpoints.lg;
  const isAboveXl = windowSize.width >= breakpoints.xl;
  const isAbove2Xl = windowSize.width >= breakpoints['2xl'];

  const isBelowSm = windowSize.width < breakpoints.sm;
  const isBelowMd = windowSize.width < breakpoints.md;
  const isBelowLg = windowSize.width < breakpoints.lg;
  const isBelowXl = windowSize.width < breakpoints.xl;
  const isBelow2Xl = windowSize.width < breakpoints['2xl'];

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isAboveSm,
    isAboveMd,
    isAboveLg,
    isAboveXl,
    isAbove2Xl,
    isBelowSm,
    isBelowMd,
    isBelowLg,
    isBelowXl,
    isBelow2Xl,
  };
}

export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const { windowSize } = useResponsive();
  return windowSize.width >= breakpoints[breakpoint];
}