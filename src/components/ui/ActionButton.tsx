import Box from "@mui/material/Box";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { colors, gradients, radii, shadows } from "../../theme/tokens.ts";

type Variant = "primary" | "secondary" | "gold" | "light" | "outlineLight";

type ActionButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  size?: "md" | "lg";
};

const variantStyles: Record<Variant, Record<string, unknown>> = {
  primary: {
    background: gradients.brand,
    color: colors.white,
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: `${shadows.glow}, inset 0 1px 0 rgba(255,255,255,0.18)`,
    "&:hover": { boxShadow: `0 18px 40px rgba(159,51,126,0.4), inset 0 1px 0 rgba(255,255,255,0.18)` },
  },
  gold: {
    background: gradients.gold,
    color: colors.plumDeep,
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: `${shadows.goldGlow}, inset 0 1px 0 rgba(255,255,255,0.5)`,
    "&:hover": { boxShadow: `0 18px 44px rgba(228,188,122,0.4), inset 0 1px 0 rgba(255,255,255,0.5)` },
  },
  secondary: {
    background: colors.paper,
    color: colors.ink,
    border: `1px solid ${colors.borderStrong}`,
    boxShadow: shadows.soft,
    "&:hover": { borderColor: colors.ink },
  },
  light: {
    background: colors.white,
    color: colors.plumDeep,
    border: "1px solid transparent",
    boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
  },
  outlineLight: {
    background: "rgba(255,255,255,0.04)",
    color: colors.white,
    border: "1px solid rgba(255,255,255,0.24)",
    backdropFilter: "blur(12px)",
    "&:hover": { borderColor: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.08)" },
  },
};

export function ActionButton({
  children,
  to,
  href,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  size = "md",
}: ActionButtonProps) {
  const { "&:hover": variantHover, ...variantBase } = variantStyles[variant] as {
    "&:hover"?: Record<string, unknown>;
  } & Record<string, unknown>;

  const sx = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.2,
    minHeight: size === "lg" ? 58 : 52,
    pl: size === "lg" ? 3.4 : 2.8,
    pr: size === "lg" ? 3 : 2.5,
    borderRadius: radii.pill,
    fontWeight: 600,
    fontSize: size === "lg" ? "1rem" : "0.95rem",
    letterSpacing: "0.005em",
    textDecoration: "none",
    fontFamily: "inherit",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease, border-color 0.3s ease, background 0.3s ease",
    "& .arrow": { transition: "transform 0.35s cubic-bezier(.22,1,.36,1)" },
    ...variantBase,
    ...(disabled
      ? {}
      : {
          "&:hover": {
            transform: "translateY(-2px)",
            "& .arrow": { transform: href ? "translate(2px,-2px)" : "translateX(4px)" },
            ...variantHover,
          },
        }),
  } as const;

  const Icon = href ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      {children}
      <Icon className="arrow" size={18} strokeWidth={2} aria-hidden="true" />
    </>
  );

  if (to) {
    return (
      <Box component={Link} to={to} sx={sx}>
        {content}
      </Box>
    );
  }

  if (href) {
    return (
      <Box component="a" href={href} sx={sx}>
        {content}
      </Box>
    );
  }

  return (
    <Box component="button" type={type} onClick={onClick} disabled={disabled} sx={sx}>
      {content}
    </Box>
  );
}

export function ArrowLink({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Box
      component={Link}
      to={to}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        color: light ? colors.champagne : colors.purple,
        fontWeight: 600,
        fontSize: "0.95rem",
        textDecoration: "none",
        pb: 0.4,
        backgroundImage: `linear-gradient(currentColor, currentColor)`,
        backgroundSize: "0% 1px",
        backgroundPosition: "0 100%",
        backgroundRepeat: "no-repeat",
        transition: "background-size 0.4s cubic-bezier(.22,1,.36,1)",
        "& .arrow": { transition: "transform 0.35s cubic-bezier(.22,1,.36,1)" },
        "&:hover": { backgroundSize: "100% 1px" },
        "&:hover .arrow": { transform: "translateX(4px)" },
      }}
    >
      {children}
      <ArrowRight className="arrow" size={17} aria-hidden="true" />
    </Box>
  );
}
