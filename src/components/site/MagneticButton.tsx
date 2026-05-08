import { forwardRef, useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";

type Variant = "primary" | "secondary" | "ghost" | "amber";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: "md" | "lg";
}
interface ButtonProps extends BaseProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
  to?: never;
}
interface LinkProps extends BaseProps {
  to: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}
type Props = ButtonProps | LinkProps;

const variantClass: Record<Variant, string> = {
  primary: "bg-forest text-cream hover:bg-forest-light",
  secondary: "bg-transparent text-ink border border-ink/20 hover:border-ink/60 hover:bg-ink/5",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  amber: "bg-amber text-white hover:bg-amber-light",
};

export const MagneticButton = forwardRef<HTMLElement, Props>((props, _ref) => {
  const { children, variant = "primary", className = "", size = "md" } = props;
  const elRef = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = elRef.current;
    if (!el || (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches)) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 10;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    const el = elRef.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  const sizeClass = size === "lg" ? "px-7 py-3.5 text-[15px]" : "px-6 py-3 text-sm";
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-[background-color,border-color,color] duration-300 will-change-transform ${sizeClass} ${variantClass[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link
        to={props.to}
        ref={elRef as React.Ref<HTMLAnchorElement>}
        className={cls}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      ref={elRef as React.Ref<HTMLButtonElement>}
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${cls} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
});
MagneticButton.displayName = "MagneticButton";
