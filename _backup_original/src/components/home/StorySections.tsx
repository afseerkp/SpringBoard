import Box from "@mui/material/Box";
import { Check } from "lucide-react";
import { getCategory } from "../../config/products.ts";
import { colors, radii, shadows } from "../../theme/tokens.ts";
import { ActionButton } from "../ui/ActionButton.tsx";
import { PageContainer } from "../ui/PageContainer.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionHeading } from "../ui/SectionHeading.tsx";
import { VisualMedia } from "../visuals/SceneArt.tsx";

export function StorySections() {
  const books = getCategory("books");
  const stationery = getCategory("stationery");
  const uniforms = getCategory("uniforms");
  const shoes = getCategory("shoes");
  if (!books || !stationery || !uniforms || !shoes) return null;

  return (
    <>
      <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
        <PageContainer wide>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" }, gap: { xs: 3, lg: 6 }, alignItems: "center" }}>
            <Reveal>
              <Box sx={{ borderRadius: radii.xl, overflow: "hidden", minHeight: { xs: 280, md: 460 }, boxShadow: shadows.card }}>
                <VisualMedia visual={books.hero} />
              </Box>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading eyebrow="School books" title={books.heroTitle} subtitle={books.heroText} />
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: "22px 0 0", display: "grid", gap: 1.3 }}>
                {books.features.map((feature) => (
                  <Box component="li" key={feature} sx={{ display: "flex", alignItems: "center", gap: 1.2, fontWeight: 600 }}>
                    <Box sx={{ width: 28, height: 28, borderRadius: "50%", display: "grid", placeItems: "center", background: colors.purpleSoft, color: colors.purple }}>
                      <Check size={16} aria-hidden="true" />
                    </Box>
                    {feature}
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 3.5 }}>
                <ActionButton to="/products/books">Explore School Books</ActionButton>
              </Box>
            </Reveal>
          </Box>
        </PageContainer>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 10 }, background: `linear-gradient(180deg, ${colors.goldSoft}, ${colors.white} 40%, ${colors.purpleSoft})` }}>
        <PageContainer>
          <Reveal>
            <SectionHeading align="center" eyebrow="Stationery" title={stationery.heroTitle} subtitle={stationery.heroText} />
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ mt: 4, borderRadius: radii.xl, overflow: "hidden", minHeight: { xs: 280, md: 420 }, boxShadow: shadows.card }}>
              <VisualMedia visual={stationery.hero} />
            </Box>
          </Reveal>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3.5 }}>
            <ActionButton to="/products/stationery" variant="secondary">
              Explore Stationery
            </ActionButton>
          </Box>
        </PageContainer>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <PageContainer wide>
          <Reveal>
            <SectionHeading eyebrow="School uniforms" title={uniforms.heroTitle} subtitle={uniforms.heroText} />
          </Reveal>
          <Box sx={{ mt: 4, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
            {uniforms.gallery.slice(0, 2).map((visual, index) => (
              <Reveal key={visual.type === "scene" ? visual.scene : visual.src} delay={index * 0.06}>
                <Box sx={{ borderRadius: radii.xl, overflow: "hidden", minHeight: 420, boxShadow: shadows.soft }}>
                  <VisualMedia visual={visual} />
                </Box>
              </Reveal>
            ))}
          </Box>
          <Box sx={{ mt: 3.5 }}>
            <ActionButton to="/products/uniforms">Explore Uniforms</ActionButton>
          </Box>
        </PageContainer>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, background: `linear-gradient(180deg, #3A1844, ${colors.plum})`, color: colors.white }}>
        <PageContainer wide>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.85fr 1.15fr" }, gap: { xs: 4, lg: 6 }, alignItems: "center" }}>
            <Reveal>
              <SectionHeading light eyebrow="School shoes" title={shoes.heroTitle} subtitle={shoes.heroText} />
              <Box sx={{ mt: 3.5 }}>
                <ActionButton to="/products/shoes">Explore School Shoes</ActionButton>
              </Box>
            </Reveal>
            <Reveal delay={0.08}>
              <Box sx={{ borderRadius: radii.xl, overflow: "hidden", minHeight: { xs: 260, md: 380 } }}>
                <VisualMedia visual={shoes.hero} />
              </Box>
            </Reveal>
          </Box>
        </PageContainer>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <PageContainer wide>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: radii.xl,
              minHeight: { xs: 420, md: 460 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              background: `linear-gradient(120deg, ${colors.purpleDeep}, ${colors.purple} 55%, ${colors.goldDeep})`,
              color: colors.white,
            }}
          >
            <Box sx={{ p: { xs: 3.5, md: 6 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Box component="h2" sx={{ m: 0, fontSize: "clamp(2.2rem, 4vw, 3.6rem)", letterSpacing: "-0.04em", lineHeight: 1.05, fontWeight: 800 }}>
                Made for Learning.
                <Box component="span" sx={{ display: "block" }}>Ready for Every Day.</Box>
              </Box>
              <Box component="p" sx={{ m: 0, mt: 2, maxWidth: 420, color: "rgba(255,255,255,0.84)", lineHeight: 1.7 }}>
                Books, stationery, uniforms and shoes, gathered for the rhythm of an ordinary school day.
              </Box>
              <Box sx={{ mt: 3.5 }}>
                <ActionButton to="/products" variant="secondary">
                  Discover Our Products
                </ActionButton>
              </Box>
            </Box>
            <Box sx={{ minHeight: 260 }}>
              <VisualMedia visual={{ type: "scene", scene: "school-desk", alt: "A desk prepared with books, a notebook and a school bag" }} />
            </Box>
          </Box>
        </PageContainer>
      </Box>
    </>
  );
}
