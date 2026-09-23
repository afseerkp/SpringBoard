import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { colors } from "../../theme/tokens.ts";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Box sx={{ textAlign: align, maxWidth: align === "center" ? 760 : 680, mx: align === "center" ? "auto" : 0 }}>
      {eyebrow ? (
        <Box
          component="p"
          sx={{
            m: 0,
            mb: 1.5,
            color: light ? colors.gold : colors.purple,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </Box>
      ) : null}
      <Box
        component="h2"
        sx={{
          m: 0,
          color: light ? colors.white : colors.ink,
          fontSize: "clamp(2rem, 4vw, 3.35rem)",
          lineHeight: 1.08,
          letterSpacing: "-0.035em",
          fontWeight: 750,
        }}
      >
        {title}
      </Box>
      {subtitle ? (
        <Box
          component="p"
          sx={{
            m: 0,
            mt: 2,
            color: light ? "rgba(255,255,255,0.78)" : colors.muted,
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Box>
      ) : null}
    </Box>
  );
}
