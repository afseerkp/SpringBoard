import Box from "@mui/material/Box";
import { colors, radii } from "../../theme/tokens.ts";
import { PageContainer } from "../ui/PageContainer.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionHeading } from "../ui/SectionHeading.tsx";

const marks = ["Books", "Stationery", "Uniforms", "Footwear"];

export function IntroSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <PageContainer>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" }, gap: { xs: 4, lg: 8 }, alignItems: "center" }}>
          <Reveal>
            <SectionHeading
              eyebrow="A complete range"
              title="Complete School Essentials, Thoughtfully Selected."
              subtitle="SPRINGBOARD provides essential products for students and educational environments. Books, stationery, uniforms and footwear sit together so a school day can start with everything it needs."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
              {marks.map((mark) => (
                <Box
                  key={mark}
                  sx={{
                    borderRadius: radii.lg,
                    minHeight: 120,
                    display: "grid",
                    placeItems: "center",
                    background: mark === "Books" || mark === "Footwear" ? colors.purple : colors.white,
                    color: mark === "Books" || mark === "Footwear" ? colors.white : colors.ink,
                    border: `1px solid ${colors.border}`,
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    letterSpacing: "-0.03em",
                    boxShadow: "0 16px 40px rgba(28,20,36,0.05)",
                  }}
                >
                  {mark}
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </PageContainer>
    </Box>
  );
}
