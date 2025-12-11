import { cn } from "./utils";

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  };
}

export function ResponsiveGrid({
  children,
  className,
  cols = { default: 1, md: 2, lg: 3, xl: 4 },
  gap = { default: 'gap-4', md: 'gap-6', lg: 'gap-8' },
}: ResponsiveGridProps) {
  const gridClasses = cn(
    'grid',
    cols.default && `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
    cols['2xl'] && `2xl:grid-cols-${cols['2xl']}`,
    gap.default,
    gap.sm,
    gap.md,
    gap.lg,
    gap.xl,
    gap['2xl'],
    className
  );

  return <div className={gridClasses}>{children}</div>;
}