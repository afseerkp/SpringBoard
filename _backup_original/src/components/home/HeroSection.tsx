import Box from "@mui/material/Box";
import { BookOpen, Footprints, Pencil, Shirt } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { productCategories } from "../../config/products.ts";
import { colors, radii, shadows } from "../../theme/tokens.ts";
import { ActionButton } from "../ui/ActionButton.tsx";
import { PageContainer } from "../ui/PageContainer.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { HeroComposition } from "../visuals/HeroComposition.tsx";

const icons: Record<string, LucideIcon> = {
  books: BookOpen,
  stationery: Pencil,
  uniforms: Shirt,
  shoes: Footprints,
};

export function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: "108px", md: "128px" },
        pb: { xs: 4, md: 2 },
        background:
          "radial-gradient(circle at 12% 18%, rgba(159,51,126,0.14), transparent 28%), radial-gradient(circle at 88% 8%, rgba(244,160,48,0.2), transparent 26%), radial-gradient(circle at 70% 80%, rgba(36,92,154,0.08), transparent 24%), linear-gradient(180deg, #FFFFFF 0%, #F4F7FC 100%)",
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(28,20,36,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(28,20,36,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(circle at 70% 40%, #000 20%, transparent 72%)",
          pointerEvents: "none",
        }}
      />
      <PageContainer wide>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
            gap: { xs: 2, lg: 4 },
            alignItems: "center",
          }}
        >
          <Reveal>
            <Box component="p" sx={{ m: 0, color: colors.purple, fontWeight: 700, letterSpacing: "0.16em", fontSize: "0.78rem" }}>
              ESSENTIALS FOR EVERY SCHOOL DAY
            </Box>
            <Box
              component="h1"
              sx={{
                m: 0,
                mt: 2,
                fontSize: "clamp(2.5rem, 5.4vw, 4.7rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
                fontWeight: 800,
                maxWidth: 680,
              }}
            >
              Everything Students Need
              <Box component="span" sx={{ display: "block", color: colors.purple }}>
                for a Better School Day.
              </Box>
            </Box>
            <Box component="p" sx={{ m: 0, mt: 2.5, maxWidth: 540, color: colors.muted, fontSize: "1.08rem", lineHeight: 1.7 }}>
              From school books and stationery to uniforms and footwear, we bring essential school supplies together with quality, care and consistency.
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4 }}>
              <ActionButton to="/products">Explore Products</ActionButton>
              <ActionButton to="/contact" variant="secondary">
                Contact Us
              </ActionButton>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <HeroComposition />
          </Reveal>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
            gap: 2,
            mt: { xs: 4, lg: 2 },
            position: "relative",
            zIndex: 2,
          }}
        >
          {productCategories.map((category, index) => {
            const Icon = icons[category.slug];
            return (
              <Reveal key={category.slug} delay={index * 0.05}>
                <Box
                  component={Link}
                  to={`/products/${category.slug}`}
                  aria-label={`Explore ${category.name}`}
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    color: colors.ink,
                    height: "100%",
                    p: 2.4,
                    borderRadius: radii.lg,
                    background: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow: shadows.card,
                    backdropFilter: "blur(18px)",
                    transition: "transform 0.28s ease, box-shadow 0.28s ease",
                    "&:hover": { transform: "translateY(-6px)", boxShadow: shadows.lift },
                    "&:hover .arrow": { transform: "translateX(4px)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: "16px",
                      display: "grid",
                      placeItems: "center",
                      background: index % 2 === 0 ? colors.purpleSoft : colors.goldSoft,
                      color: index % 2 === 0 ? colors.purple : colors.goldDeep,
                    }}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </Box>
                  <Box component="h2" sx={{ m: 0, mt: 2, fontSize: "1.2rem", letterSpacing: "-0.02em" }}>
                    {category.name}
                  </Box>
                  <Box component="p" sx={{ m: 0, mt: 1, color: colors.muted, lineHeight: 1.55, minHeight: { lg: 72 } }}>
                    {category.shortDescription}
                  </Box>
                  <Box className="arrow" sx={{ mt: 2, color: colors.purple, fontWeight: 700, transition: "transform 0.25s ease" }}>
                    Explore →
                  </Box>
                </Box>
              </Reveal>
            );
          })}
        </Box>
      </PageContainer>
    </Box>
  );
}
