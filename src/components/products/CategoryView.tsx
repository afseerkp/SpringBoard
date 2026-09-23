import Box from "@mui/material/Box";
import { Check } from "lucide-react";
import { siteConfig } from "../../config/site.ts";
import { productCategories } from "../../config/products.ts";
import type { ProductCategory } from "../../types/content.ts";
import { colors, fontDisplay, gradients, radii } from "../../theme/tokens.ts";
import { ShowcaseCard } from "../home/CategoryShowcase.tsx";
import { ActionButton } from "../ui/ActionButton.tsx";
import { PageContainer } from "../ui/PageContainer.tsx";
import { PageHero } from "../ui/PageHero.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionHeading } from "../ui/SectionHeading.tsx";
import { Seo } from "../seo/Seo.tsx";
import { VisualMedia } from "../visuals/SceneArt.tsx";

export function CategoryView({ category }: { category: ProductCategory }) {
  const others = productCategories.filter((item) => item.slug !== category.slug);
  return (
    <>
      <Seo
        title={`${category.name} | ${siteConfig.groupName}`}
        description={`${category.cardDescription} From ${siteConfig.companyName}.`}
        path={`/products/${category.slug}`}
      />
      <PageHero
        eyebrow={category.name}
        title={category.heroTitle}
        subtitle={category.heroText}
        crumbs={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: category.name }]}
        aside={
          <Box
            sx={{
              borderRadius: "220px 220px 28px 28px",
              overflow: "hidden",
              height: { xs: 300, md: 380 },
              boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
              border: "6px solid rgba(255,253,249,0.95)",
            }}
          >
            <VisualMedia visual={category.hero} />
          </Box>
        }
      >
        <Box sx={{ mt: 4.5, display: "flex", flexWrap: "wrap", gap: 1.5 }}>
          <ActionButton to="/contact" variant="gold">
            Request a Quote
          </ActionButton>
          <ActionButton to="/products" variant="outlineLight">
            All Products
          </ActionButton>
        </Box>
      </PageHero>

      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: colors.ivory }}>
        <PageContainer wide>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 5, lg: 10 }, alignItems: "center" }}>
            <Reveal>
              <SectionHeading eyebrow="The range" title="What this collection includes" subtitle={category.description} />
            </Reveal>
            <Reveal delay={0.1}>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, borderTop: `1px solid ${colors.border}` }}>
                {category.features.map((feature, index) => (
                  <Box
                    component="li"
                    key={feature}
                    sx={{ display: "flex", gap: 2.5, alignItems: "center", py: 2.4, borderBottom: `1px solid ${colors.border}` }}
                  >
                    <Box sx={{ fontFamily: fontDisplay, fontStyle: "italic", color: colors.champagne, fontSize: "1.05rem", minWidth: 28 }}>0{index + 1}</Box>
                    <Box sx={{ fontFamily: fontDisplay, fontSize: { xs: "1.25rem", md: "1.5rem" }, letterSpacing: "-0.01em", flex: 1 }}>{feature}</Box>
                    <Check size={18} color={colors.purple} aria-hidden="true" />
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Box>
        </PageContainer>
      </Box>

      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: colors.paper }}>
        <PageContainer wide>
          <Reveal>
            <SectionHeading eyebrow="A closer look" title="The pieces schools use most." />
          </Reveal>
          <Box sx={{ mt: { xs: 5, md: 7 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2 }}>
            {category.examples.map((example, index) => (
              <Reveal key={example.name} delay={index * 0.08} style={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3.5,
                    borderRadius: radii.lg,
                    background: colors.ivory,
                    border: `1px solid ${colors.border}`,
                    transition: "transform 0.5s cubic-bezier(.22,1,.36,1), background 0.4s ease",
                    "&:hover": { transform: "translateY(-6px)", background: colors.white },
                  }}
                >
                  <Box sx={{ width: 36, height: 2, background: gradients.brand, borderRadius: 2 }} />
                  <Box component="h3" sx={{ m: 0, mt: 3, fontFamily: fontDisplay, fontWeight: 500, fontSize: "1.4rem", letterSpacing: "-0.01em" }}>
                    {example.name}
                  </Box>
                  <Box component="p" sx={{ m: 0, mt: 1.2, color: colors.muted, lineHeight: 1.7, fontSize: "0.95rem" }}>
                    {example.detail}
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>

          <Box sx={{ mt: { xs: 8, md: 12 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" }, gap: { xs: 4, md: 6 }, alignItems: "center" }}>
            <Reveal>
              <SectionHeading eyebrow="Quality" title={category.qualityTitle} subtitle={category.qualityText} size="sm" />
            </Reveal>
            <Reveal delay={0.1}>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1.5 }}>
                {category.gallery.slice(0, 3).map((visual, index) => (
                  <Box
                    key={visual.type === "scene" ? visual.scene : visual.src}
                    sx={{ borderRadius: radii.md, overflow: "hidden", height: { xs: 140, md: 220 }, mt: { md: index === 1 ? 4 : 0 } }}
                  >
                    <VisualMedia visual={visual} />
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Box>
        </PageContainer>
      </Box>

      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: colors.ivory }}>
        <PageContainer wide>
          <Reveal>
            <SectionHeading eyebrow="Explore more" title="Other collections" />
          </Reveal>
          <Box sx={{ mt: 5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2.5 }}>
            {others.map((item) => (
              <Reveal key={item.slug} style={{ height: "100%" }}>
                <ShowcaseCard category={item} index={productCategories.indexOf(item)} />
              </Reveal>
            ))}
          </Box>
        </PageContainer>
      </Box>
    </>
  );
}
