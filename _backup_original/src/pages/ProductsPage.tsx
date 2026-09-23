import Box from "@mui/material/Box";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/site.ts";
import { productCategories } from "../config/products.ts";
import { Seo } from "../components/seo/Seo.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { PageHero } from "../components/ui/PageHero.tsx";
import { colors, radii, shadows } from "../theme/tokens.ts";
import { VisualMedia } from "../components/visuals/SceneArt.tsx";

export default function ProductsPage() {
  return (
    <>
      <Seo
        title={`School Essentials | ${siteConfig.shortName}`}
        description={`Discover school books, stationery, uniforms and school shoes from ${siteConfig.shortName}.`}
        path="/products"
      />
      <PageHero
        eyebrow="Products"
        title="School Essentials, All in One Place."
        subtitle="Four collections cover the practical side of a school day. Explore each one, then contact us if you would like to know more."
      />
      <PageContainer wide>
        <Box sx={{ display: "grid", gap: 3, pb: 6 }}>
          {productCategories.map((category, index) => (
            <Box
              key={category.slug}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
                gap: 0,
                borderRadius: radii.xl,
                overflow: "hidden",
                background: colors.white,
                border: `1px solid ${colors.border}`,
                boxShadow: shadows.soft,
              }}
            >
              <Box sx={{ minHeight: 280, order: { md: index % 2 === 0 ? 0 : 1 } }}>
                <VisualMedia visual={category.hero} />
              </Box>
              <Box sx={{ p: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center", order: { md: index % 2 === 0 ? 1 : 0 } }}>
                <Box sx={{ color: colors.purple, fontWeight: 700, letterSpacing: "0.12em", fontSize: "0.78rem" }}>{category.name.toUpperCase()}</Box>
                <Box component="h2" sx={{ m: "10px 0 0", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}>{category.name}</Box>
                <Box component="p" sx={{ color: colors.muted, lineHeight: 1.7, maxWidth: 460 }}>{category.cardDescription}</Box>
                <Box
                  component={Link}
                  to={`/products/${category.slug}`}
                  sx={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 1, textDecoration: "none", color: colors.white, background: colors.purple, px: 2.4, py: 1.3, borderRadius: radii.pill, fontWeight: 700 }}
                >
                  Explore <ArrowRight size={18} aria-hidden="true" />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </PageContainer>
    </>
  );
}
