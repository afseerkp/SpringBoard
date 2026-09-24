import Box from "@mui/material/Box";
import { Check } from "lucide-react";
import { siteConfig } from "../config/site.ts";
import { productCategories } from "../config/products.ts";
import { Seo } from "../components/seo/Seo.tsx";
import { ActionButton } from "../components/ui/ActionButton.tsx";
import { CatalogueDownload } from "../components/ui/CatalogueDownload.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { PageHero } from "../components/ui/PageHero.tsx";
import { Reveal } from "../components/ui/Reveal.tsx";
import { Accent } from "../components/ui/SectionHeading.tsx";
import { colors, fontDisplay, radii } from "../theme/tokens.ts";
import { VisualMedia } from "../components/visuals/SceneArt.tsx";

export default function ProductsPage() {
  return (
    <>
      <Seo
        title={`Products | ${siteConfig.groupName}`}
        description={`School books, stationery, uniforms and school shoes supplied by ${siteConfig.companyName} to schools across the region.`}
        path="/products"
      />
      <PageHero
        eyebrow="Products"
        title={
          <>
            School essentials, <Accent light>all under one roof.</Accent>
          </>
        }
        subtitle="Four collections cover the practical side of every school day — supplied with the consistency, timeliness and care institutions expect."
      />
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, background: colors.ivory }}>
        <PageContainer wide>
          <Box sx={{ display: "grid", gap: { xs: 3, md: 4 } }}>
            {productCategories.map((category, index) => {
              const flip = index % 2 === 1;
              return (
                <Reveal key={category.slug}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
                      borderRadius: radii.xl,
                      overflow: "hidden",
                      background: colors.paper,
                      border: `1px solid ${colors.border}`,
                      transition: "box-shadow 0.6s ease",
                      "&:hover": { boxShadow: "0 40px 90px rgba(23,11,27,0.1)" },
                      "&:hover .visual": { transform: "scale(1.04)" },
                    }}
                  >
                    <Box sx={{ minHeight: { xs: 260, md: 440 }, overflow: "hidden", order: { md: flip ? 1 : 0 } }}>
                      <Box className="visual" sx={{ height: "100%", transition: "transform 0.9s cubic-bezier(.22,1,.36,1)" }}>
                        <VisualMedia visual={category.hero} />
                      </Box>
                    </Box>
                    <Box sx={{ p: { xs: 3.5, md: 6 }, display: "flex", flexDirection: "column", justifyContent: "center", order: { md: flip ? 0 : 1 } }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: colors.purple, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                        <Box sx={{ fontFamily: fontDisplay, fontStyle: "italic", fontSize: "1rem", letterSpacing: 0, textTransform: "none", color: colors.champagne }}>
                          0{index + 1}
                        </Box>
                        Collection
                      </Box>
                      <Box component="h2" sx={{ m: "14px 0 0", fontFamily: fontDisplay, fontWeight: 400, fontSize: "clamp(2rem, 3.4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.08 }}>
                        {category.name}
                      </Box>
                      <Box component="p" sx={{ m: 0, mt: 2, color: colors.muted, lineHeight: 1.75, maxWidth: 460 }}>
                        {category.cardDescription}
                      </Box>
                      <Box component="ul" sx={{ listStyle: "none", p: 0, m: "24px 0 32px", display: "grid", gridTemplateColumns: { sm: "1fr 1fr" }, gap: 1.2 }}>
                        {category.features.map((feature) => (
                          <Box component="li" key={feature} sx={{ display: "flex", alignItems: "center", gap: 1.2, fontSize: "0.92rem", fontWeight: 500 }}>
                            <Check size={15} color={colors.purple} aria-hidden="true" />
                            {feature}
                          </Box>
                        ))}
                      </Box>
                      <Box>
                        <ActionButton to={`/products/${category.slug}`} variant="secondary">
                          Explore {category.name}
                        </ActionButton>
                      </Box>
                    </Box>
                  </Box>
                </Reveal>
              );
            })}
          </Box>
        </PageContainer>
      </Box>
      <CatalogueDownload />
    </>
  );
}
