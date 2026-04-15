import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:opacity-60 disabled:cursor-not-allowed";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-ink-900 text-cream-50 hover:bg-ink-800 shadow-soft",
  secondary:
    "bg-cream-50 text-ink-900 border border-ink-200 hover:bg-cream-100",
  ghost: "text-ink-700 hover:text-ink-900 hover:bg-cream-100",
};

const SIZES: Record<Size, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-sm sm:text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cn(BASE, VARIANTS[variant], SIZES[size], className)}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: AnchorProps) {
  return (
    <a
      href={href}
      className={cn(BASE, VARIANTS[variant], SIZES[size], className)}
      {...rest}
    >
      {children}
    </a>
  );
}
