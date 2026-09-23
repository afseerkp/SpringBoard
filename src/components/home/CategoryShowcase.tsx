import Box from "@mui/material/Box";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { productCategories } from "../../config/products.ts";
import type { ProductCategory } from "../../types/content.ts";
import { colors, fontDisplay, radii } from "../../theme/tokens.ts";
import { ArrowLink } from "../ui/ActionButton.tsx";
import { PageContainer } from "../ui/PageContainer.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { Accent, SectionHeading } from "../ui/SectionHeading.tsx";
import { VisualMedia } from "../visuals/SceneArt.tsx";

const labels: Record<ProductCategory["slug"], string> = {
  books: "Learning",
  stationery: "Classroom",
  uniforms: "Schoolwear",
  shoes: "Footwear",
};

export function ShowcaseCard({ category, index, tall = false }: { category: ProductCategory; index: number; tall?: boolean }) {
  return (
    <Box
      component={Link}
      to={`/products/${category.slug}`}
      aria-label={`Explore ${category.name}`}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textDecoration: "none",
        color: colors.ink,
        background: colors.paper,
        borderRadius: radii.xl,
        overflow: "hidden",
        border: `1px solid ${colors.border}`,
        transition: "transform 0.6s cubic-bezier(.22,1,.36,1), box-shadow 0.6s ease",
        "&:hover": { transform: "translateY(-8px)", boxShadow: "0 40px 90px rgba(23,11,27,0.12)" },
        "&:hover .visual": { transform: "scale(1.06)" },
        "&:hover .go": { background: colors.ink, color: colors.white, transform: "rotate(45deg)" },
      }}
    >
      <Box sx={{ position: "relative", height: tall ? { xs: 260, md: 420 } : { xs: 220, md: 240 }, overflow: "hidden" }}>
        <Box className="visual" sx={{ width: "100%", height: "100%", transition: "transform 0.9s cubic-bezier(.22,1,.36,1)" }}>
          <VisualMedia visual={category.hero} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: 16,
            top: 16,
            px: 1.4,
            py: 0.5,
            borderRadius: radii.pill,
            background: "rgba(255,253,249,0.88)",
            backdropFilter: "blur(10px)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: colors.purple,
          }}
        >
          {labels[category.slug]}
        </Box>
      </Box>
      <Box sx={{ p: { xs: 3, md: 3.5 }, display: "flex", gap: 2, alignItems: "flex-start", justifyContent: "space-between", flex: 1 }}>
        <Box>
          <Box sx={{ fontFamily: fontDisplay, fontStyle: "italic", color: colors.subtle, fontSize: "0.95rem" }}>0{index + 1}</Box>
          <Box component="h3" sx={{ m: 0, mt: 0.5, fontFamily: fontDisplay, fontWeight: 500, fontSize: tall ? "2rem" : "1.55rem", letterSpacing: "-0.02em" }}>
            {category.name}
          </Box>
          <Box component="p" sx={{ m: 0, mt: 1.2, color: colors.muted, lineHeight: 1.65, fontSize: "0.95rem", maxWidth: 460 }}>
            {category.cardDescription}
          </Box>
        </Box>
        <Box
          className="go"
          sx={{
            flex: "none",
            width: 46,
            height: 46,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            border: `1px solid ${colors.borderStrong}`,
            transition: "all 0.45s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <ArrowUpRight size={18} aria-hidden="true" />
        </Box>
      </Box>
    </Box>
  );
}

export function CategoryShowcase() {
  const [books, stationery, uniforms, shoes] = productCategories;
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 }, background: colors.paper }}>
      <PageContainer wide>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "space-between", alignItems: "flex-end" }}>
          <Reveal>
            <SectionHeading
              eyebrow="Product range"
              title={
                <>
                  Complete school essentials, <Accent>thoughtfully supplied.</Accent>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ArrowLink to="/products">View all products</ArrowLink>
          </Reveal>
        </Box>
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1.25fr 1fr 1fr" },
            gridTemplateRows: { lg: "auto auto" },
            gap: 2.5,
          }}
        >
          <Box sx={{ gridRow: { lg: "span 2" } }}>
            <Reveal style={{ height: "100%" }}>
              <ShowcaseCard category={books} index={0} tall />
            </Reveal>
          </Box>
          <Reveal delay={0.06} style={{ height: "100%" }}>
            <ShowcaseCard category={stationery} index={1} />
          </Reveal>
          <Reveal delay={0.12} style={{ height: "100%" }}>
            <ShowcaseCard category={uniforms} index={2} />
          </Reveal>
          <Box sx={{ gridColumn: { md: "span 2", lg: "span 2" } }}>
            <Reveal delay={0.18} style={{ height: "100%" }}>
              <WideCard category={shoes} />
            </Reveal>
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}

function WideCard({ category }: { category: ProductCategory }) {
  return (
    <Box
      component={Link}
      to={`/products/${category.slug}`}
      aria-label={`Explore ${category.name}`}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        height: "100%",
        textDecoration: "none",
        color: colors.white,
        borderRadius: radii.xl,
        overflow: "hidden",
        background: "linear-gradient(160deg, #2C1133, #13061A)",
        transition: "transform 0.6s cubic-bezier(.22,1,.36,1), box-shadow 0.6s ease",
        "&:hover": { transform: "translateY(-8px)", boxShadow: "0 40px 90px rgba(23,11,27,0.22)" },
        "&:hover .go": { background: colors.champagne, color: colors.plumDeep, transform: "rotate(45deg)" },
      }}
    >
      <Box sx={{ p: { xs: 3, md: 4 }, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 3 }}>
        <Box>
          <Box sx={{ fontFamily: fontDisplay, fontStyle: "italic", color: colors.onDarkSubtle, fontSize: "0.95rem" }}>04</Box>
          <Box component="h3" sx={{ m: 0, mt: 0.5, fontFamily: fontDisplay, fontWeight: 500, fontSize: "1.8rem", letterSpacing: "-0.02em" }}>
            {category.name}
          </Box>
          <Box component="p" sx={{ m: 0, mt: 1.2, color: colors.onDark, lineHeight: 1.65, fontSize: "0.95rem" }}>
            {category.cardDescription}
          </Box>
        </Box>
        <Box
          className="go"
          sx={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            border: "1px solid rgba(255,255,255,0.25)",
            transition: "all 0.45s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <ArrowUpRight size={18} aria-hidden="true" />
        </Box>
      </Box>
      <Box sx={{ minHeight: 220 }}>
        <VisualMedia visual={category.hero} />
      </Box>
    </Box>
  );
}
