import Box from "@mui/material/Box";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { colors, radii, shadows } from "../../theme/tokens.ts";

type ActionButtonProps = {
  children: ReactNode;
  to?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variantStyles = {
  primary: {
    background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.purpleMid} 72%)`,
    color: colors.white,
    border: "1px solid transparent",
    boxShadow: shadows.glow,
  },
  secondary: {
    background: "rgba(255,255,255,0.78)",
    color: colors.ink,
    border: `1px solid ${colors.border}`,
    boxShadow: shadows.soft,
    backdropFilter: "blur(16px)",
  },
};

export function ActionButton({
  children,
  to,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}: ActionButtonProps) {
  const sx = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    minHeight: 52,
    px: 2.8,
    borderRadius: radii.pill,
    fontWeight: 700,
    fontSize: "0.98rem",
    letterSpacing: "-0.01em",
    textDecoration: "none",
    fontFamily: "inherit",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.65 : 1,
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    "& .arrow": { transition: "transform 0.25s ease" },
    "&:hover": disabled
      ? undefined
      : {
          transform: "translateY(-2px)",
          "& .arrow": { transform: "translateX(4px)" },
        },
    ...variantStyles[variant],
  };

  const content = (
    <>
      {children}
      <ArrowRight className="arrow" size={18} aria-hidden="true" />
    </>
  );

  if (to) {
    return (
      <Box component={Link} to={to} sx={sx}>
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
        gap: 0.8,
        color: light ? colors.white : colors.purple,
        fontWeight: 700,
        textDecoration: "none",
        "& .arrow": { transition: "transform 0.25s ease" },
        "&:hover .arrow": { transform: "translateX(4px)" },
      }}
    >
      {children}
      <ArrowRight className="arrow" size={18} aria-hidden="true" />
    </Box>
  );
}
