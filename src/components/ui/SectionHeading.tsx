import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { colors, fontDisplay } from "../../theme/tokens.ts";

export function Eyebrow({
  children,
  light = false,
  align = "left",
}: {
  children: ReactNode;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Box
      component="p"
      sx={{
        m: 0,
        mb: 2.2,
        display: "inline-flex",
        alignItems: "center",
        gap: 1.4,
        color: light ? colors.champagne : colors.purple,
        fontSize: "0.74rem",
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        justifyContent: align === "center" ? "center" : "flex-start",
        "&::before": {
          content: '""',
          width: 28,
          height: "1px",
          background: light ? colors.champagne : colors.purple,
          opacity: 0.7,
        },
        ...(align === "center"
          ? {
              "&::after": {
                content: '""',
                width: 28,
                height: "1px",
                background: light ? colors.champagne : colors.purple,
                opacity: 0.7,
              },
            }
          : {}),
      }}
    >
      {children}
    </Box>
  );
}

/** Italic, brand-tinted accent inside a serif headline. */
export function Accent({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <Box
      component="em"
      sx={{
        fontStyle: "italic",
        fontWeight: 400,
        color: light ? colors.champagne : colors.purple,
      }}
    >
      {children}
    </Box>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  size = "md",
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  size?: "sm" | "md" | "lg";
  as?: "h1" | "h2" | "h3";
}) {
  const fontSize = {
    sm: "clamp(1.75rem, 3vw, 2.4rem)",
    md: "clamp(2.1rem, 4.2vw, 3.4rem)",
    lg: "clamp(2.5rem, 5.5vw, 4.4rem)",
  }[size];

  return (
    <Box sx={{ textAlign: align, maxWidth: align === "center" ? 780 : 680, mx: align === "center" ? "auto" : 0 }}>
      {eyebrow ? (
        <Eyebrow light={light} align={align}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Box
        component={as}
        sx={{
          m: 0,
          color: light ? colors.white : colors.ink,
          fontFamily: fontDisplay,
          fontSize,
          lineHeight: 1.08,
          letterSpacing: "-0.022em",
          fontWeight: 500,
          fontVariationSettings: '"opsz" 96',
        }}
      >
        {title}
      </Box>
      {subtitle ? (
        <Box
          component="p"
          sx={{
            m: 0,
            mt: 2.5,
            color: light ? colors.onDark : colors.muted,
            fontSize: { xs: "1rem", md: "1.08rem" },
            lineHeight: 1.75,
            maxWidth: align === "center" ? 640 : 600,
            mx: align === "center" ? "auto" : 0,
          }}
        >
          {subtitle}
        </Box>
      ) : null}
    </Box>
  );
}
