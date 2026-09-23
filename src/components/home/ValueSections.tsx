import Box from "@mui/material/Box";
import { Award, Globe2, Handshake, Layers, Quote, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile, siteConfig } from "../../config/site.ts";
import { colors, fontDisplay, gradients, radii } from "../../theme/tokens.ts";
import { PageContainer } from "../ui/PageContainer.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { Accent, Eyebrow, SectionHeading } from "../ui/SectionHeading.tsx";

const strengthIcons: Record<string, LucideIcon> = {
  experience: Award,
  reach: Globe2,
  integrated: Layers,
  team: Users,
  service: ShieldCheck,
  relationships: Handshake,
};

export function StrengthsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 }, background: colors.ivory }}>
      <PageContainer wide>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "space-between", alignItems: "flex-end" }}>
          <Reveal>
            <SectionHeading
              eyebrow="Our core strengths"
              title={
                <>
                  Six reasons schools <Accent>choose SpringBoard.</Accent>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Box component="p" sx={{ m: 0, maxWidth: 380, color: colors.muted, lineHeight: 1.75 }}>
              Experience, reach and an integrated supply model — delivered by a dedicated team focused on responsiveness.
            </Box>
          </Reveal>
        </Box>

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" },
            borderTop: `1px solid ${colors.border}`,
            borderLeft: { sm: `1px solid ${colors.border}` },
          }}
        >
          {profile.strengths.map((strength, index) => {
            const Icon = strengthIcons[strength.key] ?? Award;
            return (
              <Reveal key={strength.key} delay={(index % 3) * 0.08} style={{ height: "100%" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    p: { xs: 3.5, md: 5 },
                    borderRight: { sm: `1px solid ${colors.border}` },
                    borderBottom: `1px solid ${colors.border}`,
                    overflow: "hidden",
                    transition: "background 0.5s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "2px",
                      width: 0,
                      background: gradients.brand,
                      transition: "width 0.6s cubic-bezier(.22,1,.36,1)",
                    },
                    "&:hover": { background: colors.paper },
                    "&:hover::before": { width: "100%" },
                    "&:hover .icon": { background: gradients.brand, color: colors.white, borderColor: "transparent" },
                  }}
                >
                  <Box
                    className="icon"
                    sx={{
                      width: 54,
                      height: 54,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      border: `1px solid ${colors.borderStrong}`,
                      color: colors.purple,
                      transition: "all 0.4s ease",
                    }}
                  >
                    <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  </Box>
                  <Box component="h3" sx={{ m: 0, mt: 4, fontFamily: fontDisplay, fontWeight: 500, fontSize: "1.5rem", letterSpacing: "-0.015em" }}>
                    {strength.title}
                  </Box>
                  <Box component="p" sx={{ m: 0, mt: 1.5, color: colors.muted, lineHeight: 1.7 }}>
                    {strength.text}
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

export function VisionSection() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 }, background: colors.paper, position: "relative", overflow: "hidden" }}>
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: 700,
          height: 700,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(228,188,122,0.18), transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <PageContainer>
        <Reveal>
          <Box sx={{ position: "relative", textAlign: "center", maxWidth: 960, mx: "auto" }}>
            <Eyebrow align="center">Our vision</Eyebrow>
            <Box sx={{ display: "flex", justifyContent: "center", color: colors.champagne, mb: 2 }}>
              <Quote size={40} strokeWidth={1.2} aria-hidden="true" />
            </Box>
            <Box
              component="blockquote"
              sx={{
                m: 0,
                fontFamily: fontDisplay,
                fontWeight: 300,
                fontSize: "clamp(1.7rem, 3.6vw, 3rem)",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: colors.ink,
              }}
            >
              To build a respected and dependable educational supply network that{" "}
              <Accent>connects publishers, schools and students</Accent> through quality products, efficient distribution and responsive service.
            </Box>
          </Box>
        </Reveal>

        <Box
          sx={{
            position: "relative",
            mt: { xs: 7, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
            gap: { xs: 3, md: 6 },
            p: { xs: 3.5, md: 6 },
            borderRadius: radii.xl,
            background: colors.ivory,
            border: `1px solid ${colors.border}`,
          }}
        >
          <Reveal>
            <Eyebrow>Our commitment</Eyebrow>
            <Box component="h3" sx={{ m: 0, fontFamily: fontDisplay, fontWeight: 400, fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              More than products — an essential part of the <Accent>learning ecosystem.</Accent>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            {profile.commitment.map((paragraph) => (
              <Box key={paragraph} component="p" sx={{ m: 0, mb: 2, color: colors.muted, lineHeight: 1.8, fontSize: "1.02rem" }}>
                {paragraph}
              </Box>
            ))}
            <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ width: 40, height: "1px", background: colors.champagne }} />
              <Box sx={{ fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: colors.purple }}>
                {siteConfig.motto}
              </Box>
            </Box>
          </Reveal>
        </Box>
      </PageContainer>
    </Box>
  );
}
