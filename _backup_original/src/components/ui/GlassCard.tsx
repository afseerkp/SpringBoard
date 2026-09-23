import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { colors, radii, shadows } from "../../theme/tokens.ts";

type GlassCardProps = {
  children: ReactNode;
  hover?: boolean;
  sx?: Record<string, unknown>;
};

export function GlassCard({ children, hover = false, sx }: GlassCardProps) {
  return (
    <Box
      sx={{
        background: colors.glass,
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.72)",
        boxShadow: shadows.card,
        borderRadius: radii.lg,
        transition: "transform 0.28s ease, box-shadow 0.28s ease",
        ...(hover
          ? {
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: shadows.lift,
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
