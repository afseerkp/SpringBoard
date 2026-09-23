import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { colors, radii, shadows } from "../../theme/tokens.ts";

type GlassCardProps = {
  children: ReactNode;
  hover?: boolean;
  dark?: boolean;
  sx?: Record<string, unknown>;
};

export function GlassCard({ children, hover = false, dark = false, sx }: GlassCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        background: dark ? "linear-gradient(160deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))" : colors.paper,
        backdropFilter: dark ? "blur(18px)" : undefined,
        border: dark ? `1px solid ${colors.plumLine}` : `1px solid ${colors.border}`,
        boxShadow: dark ? shadows.inset : shadows.soft,
        borderRadius: radii.lg,
        transition: "transform 0.45s cubic-bezier(.22,1,.36,1), box-shadow 0.45s ease, border-color 0.45s ease",
        ...(hover
          ? {
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: dark ? shadows.inset : shadows.lift,
                borderColor: dark ? "rgba(228,188,122,0.35)" : "rgba(159,51,126,0.22)",
              },
            }
          : {}),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
