import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { colors } from "../../theme/tokens.ts";
import { PageContainer } from "./PageContainer.tsx";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: "124px", md: "156px" },
        pb: { xs: 5, md: 7 },
        background:
          "radial-gradient(circle at 8% 10%, rgba(159,51,126,0.12), transparent 32%), radial-gradient(circle at 90% 0%, rgba(244,160,48,0.16), transparent 28%), linear-gradient(180deg, #FFFFFF 0%, #F4F7FC 100%)",
      }}
    >
      <PageContainer>
        <Box sx={{ maxWidth: 760 }}>
          <Box component="p" sx={{ m: 0, mb: 1.5, color: colors.purple, fontWeight: 700, letterSpacing: "0.16em", fontSize: "0.78rem" }}>
            {eyebrow}
          </Box>
          <Box component="h1" sx={{ m: 0, fontSize: "clamp(2.4rem, 5vw, 4.4rem)", lineHeight: 1.05, letterSpacing: "-0.04em", fontWeight: 800 }}>
            {title}
          </Box>
          <Box component="p" sx={{ m: 0, mt: 2.5, color: colors.muted, fontSize: "1.08rem", lineHeight: 1.7, maxWidth: 640 }}>
            {subtitle}
          </Box>
        </Box>
        {children}
      </PageContainer>
    </Box>
  );
}
