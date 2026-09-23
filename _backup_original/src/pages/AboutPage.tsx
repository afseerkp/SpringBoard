import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/site.ts";
import { productCategories } from "../config/products.ts";
import { Seo } from "../components/seo/Seo.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { PageHero } from "../components/ui/PageHero.tsx";
import { SectionHeading } from "../components/ui/SectionHeading.tsx";
import { colors, radii, shadows } from "../theme/tokens.ts";
import { VisualMedia } from "../components/visuals/SceneArt.tsx";

const chapters = [
  { title: "Who We Are", text: siteConfig.about.who },
  { title: "Our Purpose", text: siteConfig.about.purpose },
  { title: "Our Commitment", text: siteConfig.about.commitment },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`About Us | ${siteConfig.shortName}`}
        description={`${siteConfig.companyName} provides school books, stationery, uniforms and footwear for everyday learning.`}
        path="/about"
      />
      <PageHero
        eyebrow={siteConfig.shortName}
        title="Supporting Better School Days."
        subtitle="A school-supplies company focused on books, stationery, uniforms and shoes. The work is simple: prepare essentials that students can rely on."
      />
      <PageContainer>
        <Box sx={{ display: "grid", gap: 3, pb: { xs: 6, md: 8 } }}>
          {chapters.map((chapter, index) => (
            <Box
              key={chapter.title}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: index % 2 === 0 ? "0.7fr 1.3fr" : "1.3fr 0.7fr" },
                gap: 3,
                alignItems: "center",
                p: { xs: 2.5, md: 3 },
                borderRadius: radii.xl,
                background: colors.white,
                border: `1px solid ${colors.border}`,
              }}
            >
              <Box sx={{ order: { md: index % 2 === 0 ? 0 : 1 } }}>
                <SectionHeading eyebrow={`0${index + 1}`} title={chapter.title} subtitle={chapter.text} />
              </Box>
              <Box sx={{ borderRadius: radii.lg, overflow: "hidden", minHeight: 220, order: { md: index % 2 === 0 ? 1 : 0 } }}>
                <VisualMedia visual={productCategories[index]?.hero ?? productCategories[0].hero} />
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ pb: 4 }}>
          <SectionHeading eyebrow="Our product range" title="Four essentials. One standard of care." />
          <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            {productCategories.map((category) => (
              <Box
                key={category.slug}
                component={Link}
                to={`/products/${category.slug}`}
                sx={{
                  textDecoration: "none",
                  color: colors.ink,
                  p: 3,
                  borderRadius: radii.lg,
                  background: colors.mist,
                  boxShadow: shadows.soft,
                  "&:hover": { transform: "translateY(-4px)" },
                  transition: "transform 0.25s ease",
                }}
              >
                <Box component="h3" sx={{ m: 0 }}>{category.name}</Box>
                <Box component="p" sx={{ m: 0, mt: 1, color: colors.muted, lineHeight: 1.6 }}>{category.shortDescription}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </PageContainer>
    </>
  );
}
