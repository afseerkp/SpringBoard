import Box from "@mui/material/Box";
import { GraduationCap, Layers, Repeat, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { colors, radii, shadows } from "../../theme/tokens.ts";
import { PageContainer } from "../ui/PageContainer.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionHeading } from "../ui/SectionHeading.tsx";
import { SceneArt } from "../visuals/SceneArt.tsx";
import type { SceneId } from "../../types/content.ts";

const values: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Quality Focus",
    text: "Carefully selected products designed for everyday school use.",
    icon: Sparkles,
  },
  {
    title: "Complete Range",
    text: "Essential school products brought together across key categories.",
    icon: Layers,
  },
  {
    title: "Consistency",
    text: "A dependable product experience across books, stationery, uniforms and footwear.",
    icon: Repeat,
  },
  {
    title: "Student Focused",
    text: "Designed around the practical needs of students and everyday learning.",
    icon: GraduationCap,
  },
];

const details: Array<{ scene: SceneId; label: string }> = [
  { scene: "paper-detail", label: "Notebook pages" },
  { scene: "pencil-detail", label: "Pencil texture" },
  { scene: "fabric-detail", label: "Uniform fabric" },
  { scene: "stitch-detail", label: "Shoe stitching" },
];

export function ValueSections() {
  return (
    <>
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <PageContainer wide>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.8fr 1.2fr" }, gap: { xs: 4, lg: 6 } }}>
            <Reveal>
              <SectionHeading eyebrow="Why SPRINGBOARD" title="A calmer way to prepare for school." subtitle="Four promises guide the range. They stay practical, and they stay close to the school day itself." />
            </Reveal>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} delay={index * 0.05}>
                    <Box sx={{ height: "100%", p: 3, borderRadius: radii.lg, background: colors.white, border: `1px solid ${colors.border}`, boxShadow: shadows.soft }}>
                      <Box sx={{ width: 46, height: 46, borderRadius: "16px", display: "grid", placeItems: "center", background: colors.purpleSoft, color: colors.purple }}>
                        <Icon size={22} aria-hidden="true" />
                      </Box>
                      <Box component="h3" sx={{ m: "16px 0 8px", fontSize: "1.2rem" }}>{value.title}</Box>
                      <Box component="p" sx={{ m: 0, color: colors.muted, lineHeight: 1.65 }}>{value.text}</Box>
                    </Box>
                  </Reveal>
                );
              })}
            </Box>
          </Box>
        </PageContainer>
      </Box>

      <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
        <PageContainer wide>
          <Reveal>
            <SectionHeading
              title="Quality That Belongs in Every School Day."
              subtitle="From the feel of a notebook page to the comfort of everyday footwear, every detail matters."
            />
          </Reveal>
          <Box sx={{ mt: 4, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2 }}>
            {details.map((detail) => (
              <Box key={detail.scene} sx={{ borderRadius: radii.lg, overflow: "hidden", background: colors.white, border: `1px solid ${colors.border}` }}>
                <Box sx={{ height: 170 }}>
                  <SceneArt scene={detail.scene} alt={detail.label} />
                </Box>
                <Box sx={{ px: 2, py: 1.6, fontWeight: 700 }}>{detail.label}</Box>
              </Box>
            ))}
          </Box>
        </PageContainer>
      </Box>
    </>
  );
}
