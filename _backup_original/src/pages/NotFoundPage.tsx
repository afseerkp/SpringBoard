import Box from "@mui/material/Box";
import { siteConfig } from "../config/site.ts";
import { Seo } from "../components/seo/Seo.tsx";
import { ActionButton } from "../components/ui/ActionButton.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { BooksSvg } from "../components/visuals/art.tsx";
import { colors } from "../theme/tokens.ts";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title={`Page Not Found | ${siteConfig.shortName}`}
        description="This page is missing. Return to the SPRINGBOARD home page."
        path="/404"
      />
      <PageContainer>
        <Box sx={{ minHeight: "70vh", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4, alignItems: "center", pt: { xs: "132px", md: "160px" }, pb: { xs: 6, md: 8 } }}>
          <Box>
            <Box component="p" sx={{ m: 0, color: colors.purple, fontWeight: 700, letterSpacing: "0.14em" }}>404</Box>
            <Box component="h1" sx={{ m: "12px 0 0", fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Oops! This Page Is Missing.
            </Box>
            <Box component="p" sx={{ color: colors.muted, fontSize: "1.08rem", lineHeight: 1.7, maxWidth: 460 }}>
              Let's get you back to the main collection.
            </Box>
            <ActionButton to="/">Back to Home</ActionButton>
          </Box>
          <Box sx={{ maxWidth: 420, mx: "auto" }} aria-hidden="true">
            <BooksSvg title="" variant="open" />
          </Box>
        </Box>
      </PageContainer>
    </>
  );
}
