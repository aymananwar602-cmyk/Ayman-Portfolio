import Link from "next/link";
import type { ComponentType, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ComponentType<{ size?: number; className?: string }>;
  external?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-orange-500 text-black font-semibold hover:bg-orange-400",
  secondary:
    "border border-white/15 bg-white/5 text-white font-medium backdrop-blur-xl hover:bg-white/10",
  ghost:
    "text-zinc-400 hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm transition";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon size={16} />}
    </Link>
  );
}