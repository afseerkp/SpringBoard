import Box from "@mui/material/Box";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { productCategories } from "../../config/products.ts";
import type { ProductCategory } from "../../types/content.ts";
import { colors, radii, shadows } from "../../theme/tokens.ts";
import { PageContainer } from "../ui/PageContainer.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionHeading } from "../ui/SectionHeading.tsx";
import { VisualMedia } from "../visuals/SceneArt.tsx";

function ShowcaseCard({ category, featured = false }: { category: ProductCategory; featured?: boolean }) {
  return (
    <Box
      component={Link}
      to={`/products/${category.slug}`}
      aria-label={`Explore ${category.name}`}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textDecoration: "none",
        color: colors.ink,
        background: colors.white,
        borderRadius: radii.xl,
        overflow: "hidden",
        border: `1px solid ${colors.border}`,
        boxShadow: shadows.soft,
        transition: "transform 0.28s ease, box-shadow 0.28s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: shadows.lift },
        "&:hover .visual": { transform: "scale(1.04)" },
        "&:hover .arrow": { transform: "translateX(4px)" },
      }}
    >
      <Box sx={{ height: featured ? { xs: 240, md: 360 } : 180, overflow: "hidden" }}>
        <Box className="visual" sx={{ width: "100%", height: "100%", transition: "transform 0.5s ease" }}>
          <VisualMedia visual={category.hero} />
        </Box>
      </Box>
      <Box sx={{ p: { xs: 2.4, md: 3 }, display: "flex", flexDirection: "column", gap: 1.2, flex: 1 }}>
        <Box sx={{ color: colors.purple, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          {category.slug === "books" ? "Learning" : category.slug === "stationery" ? "Classroom" : category.slug === "uniforms" ? "Schoolwear" : "Footwear"}
        </Box>
        <Box component="h3" sx={{ m: 0, fontSize: featured ? "1.8rem" : "1.25rem", letterSpacing: "-0.03em" }}>
          {category.name}
        </Box>
        <Box component="p" sx={{ m: 0, color: colors.muted, lineHeight: 1.65 }}>
          {category.cardDescription}
        </Box>
        <Box className="arrow" sx={{ mt: "auto", pt: 1, display: "inline-flex", alignItems: "center", gap: 0.8, color: colors.purple, fontWeight: 700, transition: "transform 0.25s ease" }}>
          Explore Category <ArrowRight size={18} aria-hidden="true" />
        </Box>
      </Box>
    </Box>
  );
}

export function CategoryShowcase() {
  const [books, stationery, uniforms, shoes] = productCategories;
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <PageContainer wide>
        <Reveal>
          <SectionHeading
            eyebrow="Product range"
            title="Everything in One Place"
            subtitle="Essential products designed to support learning, comfort and everyday school life."
          />
        </Reveal>
        <Box
          sx={{
            mt: 5,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
            gap: 2.5,
          }}
        >
          <Reveal>
            <ShowcaseCard category={books} featured />
          </Reveal>
          <Box sx={{ display: "grid", gap: 2.5 }}>
            <Reveal delay={0.05}>
              <ShowcaseCard category={stationery} />
            </Reveal>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }}>
              <Reveal delay={0.08}>
                <ShowcaseCard category={uniforms} />
              </Reveal>
              <Reveal delay={0.1}>
                <ShowcaseCard category={shoes} />
              </Reveal>
            </Box>
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}
