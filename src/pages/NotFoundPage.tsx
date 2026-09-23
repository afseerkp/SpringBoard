import Box from "@mui/material/Box";
import { siteConfig } from "../config/site.ts";
import { Seo } from "../components/seo/Seo.tsx";
import { ActionButton } from "../components/ui/ActionButton.tsx";
import { HeroOrnaments } from "../components/ui/PageHero.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { Accent, Eyebrow } from "../components/ui/SectionHeading.tsx";
import { colors, fontDisplay, gradients } from "../theme/tokens.ts";

export default function NotFoundPage() {
  return (
    <>
      <Seo title={`Page Not Found | ${siteConfig.shortName}`} description="This page is missing. Return to the SpringBoard home page." path="/404" />
      <Box
        component="section"
        className="sb-grain"
        sx={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "grid", alignItems: "center", background: gradients.plum, color: colors.white, pt: "120px", pb: 8 }}
      >
        <HeroOrnaments />
        <PageContainer>
          <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 720, mx: "auto" }}>
            <Box
              aria-hidden="true"
              sx={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(7rem, 22vw, 14rem)",
                lineHeight: 0.9,
                background: gradients.goldText,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              404
            </Box>
            <Box sx={{ mt: 3 }}>
              <Eyebrow light align="center">
                Page not found
              </Eyebrow>
            </Box>
            <Box component="h1" sx={{ m: 0, fontFamily: fontDisplay, fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              This page seems to have <Accent light>stepped out.</Accent>
            </Box>
            <Box component="p" sx={{ color: colors.onDark, fontSize: "1.05rem", lineHeight: 1.7, mt: 2, mb: 4 }}>
              Let's get you back to somewhere familiar.
            </Box>
            <ActionButton to="/" variant="gold">
              Back to Home
            </ActionButton>
          </Box>
        </PageContainer>
      </Box>
    </>
  );
}
