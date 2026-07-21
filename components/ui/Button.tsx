import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

function isLinkProps(props: Props): props is LinkProps {
  return "href" in props && typeof props.href === "string";
}

const baseStyles =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variantStyles: Record<Variant, string> = {
  primary: "bg-ink-900 text-white shadow-soft hover:bg-accent-600 hover:shadow-lift",
  secondary: "border border-sand-300 bg-white text-ink-900 hover:border-accent-500/35 hover:bg-sand-50",
  ghost: "bg-transparent text-ink-700 hover:bg-sand-100 hover:text-ink-900"
};

const sizeStyles = {
  sm: "min-h-9 px-4 py-2 text-xs",
  md: "",
  lg: "min-h-[50px] px-7 py-3 text-[15px]"
};

function LoadingSpinner() {
  return <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/25 border-t-current" aria-hidden="true" />;
}

export default function Button({ variant = "primary", size = "md", loading = false, className, ...props }: Props) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (isLinkProps(props)) {
    const { children, href, rel, target, ...linkProps } = props;
    const external = href.startsWith("http") || href.startsWith("mailto:");

    if (loading) {
      return (
        <span className={classes} aria-busy="true" aria-disabled="true" role="link">
          <LoadingSpinner />
          {children}
        </span>
      );
    }

    return (
      <Link
        {...linkProps}
        href={href}
        className={classes}
        target={target ?? (external ? "_blank" : undefined)}
        rel={rel ?? (external ? "noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }

  const { children, type = "button", disabled, ...buttonProps } = props as ButtonProps;

  return (
    <button {...buttonProps} type={type} className={classes} disabled={disabled || loading} aria-busy={loading || undefined}>
      {loading ? <LoadingSpinner /> : null}
      {children}
    </button>
  );
}
