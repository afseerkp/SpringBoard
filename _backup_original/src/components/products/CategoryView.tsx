import Box from "@mui/material/Box";
import { Check } from "lucide-react";
import { siteConfig } from "../../config/site.ts";
import type { ProductCategory } from "../../types/content.ts";
import { colors, radii, shadows } from "../../theme/tokens.ts";
import { ActionButton } from "../ui/ActionButton.tsx";
import { PageContainer } from "../ui/PageContainer.tsx";
import { PageHero } from "../ui/PageHero.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionHeading } from "../ui/SectionHeading.tsx";
import { Seo } from "../seo/Seo.tsx";
import { VisualMedia } from "../visuals/SceneArt.tsx";

export function CategoryView({ category }: { category: ProductCategory }) {
  return (
    <>
      <Seo
        title={`${category.name} | ${siteConfig.shortName}`}
        description={`${category.cardDescription} From ${siteConfig.shortName}.`}
        path={`/products/${category.slug}`}
      />
      <PageHero eyebrow={category.name} title={category.heroTitle} subtitle={category.heroText}>
        <Box sx={{ mt: 3.5 }}>
          <ActionButton to="/contact">Contact Us</ActionButton>
        </Box>
      </PageHero>
      <PageContainer wide>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" }, gap: 3, alignItems: "center", pb: { xs: 6, md: 8 } }}>
          <Box sx={{ borderRadius: radii.xl, overflow: "hidden", minHeight: { xs: 280, md: 460 }, boxShadow: shadows.card }}>
            <VisualMedia visual={category.hero} />
          </Box>
          <Box>
            <SectionHeading title="What this range includes" subtitle={category.description} />
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: "22px 0 0", display: "grid", gap: 1.2 }}>
              {category.features.map((feature) => (
                <Box component="li" key={feature} sx={{ display: "flex", gap: 1.2, alignItems: "center", fontWeight: 600 }}>
                  <Box sx={{ width: 28, height: 28, borderRadius: "50%", display: "grid", placeItems: "center", background: colors.purpleSoft, color: colors.purple, flex: "none" }}>
                    <Check size={16} aria-hidden="true" />
                  </Box>
                  {feature}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ pb: { xs: 6, md: 9 } }}>
          <SectionHeading eyebrow="Examples" title="A closer look" subtitle="A few of the pieces students use most often." />
          <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            {category.examples.map((example) => (
              <Reveal key={example.name}>
                <Box sx={{ p: 3, borderRadius: radii.lg, background: colors.white, border: `1px solid ${colors.border}`, height: "100%" }}>
                  <Box component="h3" sx={{ m: 0, fontSize: "1.25rem" }}>{example.name}</Box>
                  <Box component="p" sx={{ m: 0, mt: 1, color: colors.muted, lineHeight: 1.65 }}>{example.detail}</Box>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>

        <Box sx={{ pb: { xs: 6, md: 9 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" }, gap: 3, alignItems: "center" }}>
          <SectionHeading title={category.qualityTitle} subtitle={category.qualityText} />
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1.5 }}>
            {category.gallery.map((visual) => (
              <Box key={visual.type === "scene" ? visual.scene : visual.src} sx={{ borderRadius: radii.md, overflow: "hidden", minHeight: 140 }}>
                <VisualMedia visual={visual} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: { xs: 2, md: 4 }, p: { xs: 3, md: 5 }, borderRadius: radii.xl, background: colors.purpleSoft, display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <Box component="h2" sx={{ m: 0, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.03em" }}>Talk to us about {category.name.toLowerCase()}.</Box>
            <Box component="p" sx={{ m: 0, mt: 1, color: colors.muted }}>Send an inquiry and we will respond with the details you need.</Box>
          </Box>
          <ActionButton to="/contact">Contact Us</ActionButton>
        </Box>
      </PageContainer>
    </>
  );
}
