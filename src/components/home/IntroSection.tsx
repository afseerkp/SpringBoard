import Box from "@mui/material/Box";
import { groupCompanies, profile } from "../../config/site.ts";
import { colors, fontDisplay, radii } from "../../theme/tokens.ts";
import { ArrowLink } from "../ui/ActionButton.tsx";
import { Marquee } from "../ui/Marquee.tsx";
import { PageContainer } from "../ui/PageContainer.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { Accent, Eyebrow } from "../ui/SectionHeading.tsx";

/** Group companies ticker directly under the hero. */
export function GroupStrip() {
  return (
    <Box component="section" aria-label="Group companies" sx={{ background: colors.paper, borderBottom: `1px solid ${colors.border}`, py: { xs: 3, md: 3.5 } }}>
      <PageContainer wide>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "auto 1fr" }, gap: { xs: 2, md: 5 }, alignItems: "center" }}>
          <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: colors.subtle, whiteSpace: "nowrap" }}>
            The SpringBoard Group
          </Box>
          <Marquee duration={36}>
            {groupCompanies.map((company) => (
              <Box key={company.name} sx={{ display: "flex", alignItems: "center", gap: 5, pr: 5 }}>
                <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5, whiteSpace: "nowrap" }}>
                  <Box sx={{ fontFamily: fontDisplay, fontSize: { xs: "1.2rem", md: "1.45rem" }, color: colors.ink, letterSpacing: "-0.01em" }}>
                    {company.name}
                  </Box>
                  <Box sx={{ fontSize: "0.78rem", color: colors.subtle }}>{company.location}</Box>
                </Box>
                <Box aria-hidden="true" sx={{ color: colors.champagne, fontSize: "0.9rem" }}>
                  ✦
                </Box>
              </Box>
            ))}
          </Marquee>
        </Box>
      </PageContainer>
    </Box>
  );
}

export function IntroSection() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 16 }, background: colors.ivory }}>
      <PageContainer wide>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" }, gap: { xs: 5, lg: 10 }, alignItems: "start" }}>
          <Reveal>
            <Eyebrow>About SpringBoard</Eyebrow>
            <Box
              component="h2"
              sx={{
                m: 0,
                fontFamily: fontDisplay,
                fontWeight: 400,
                fontSize: "clamp(2rem, 4.2vw, 3.5rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
              }}
            >
              A trusted partner for schools, built on a{" "}
              <Accent>five‑decade legacy</Accent> of publishing and distribution.
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ pt: { lg: 5 } }}>
              {profile.about.slice(0, 2).map((paragraph) => (
                <Box key={paragraph} component="p" sx={{ m: 0, mb: 2.5, color: colors.muted, fontSize: "1.04rem", lineHeight: 1.8 }}>
                  {paragraph}
                </Box>
              ))}
              <Box sx={{ mt: 1 }}>
                <ArrowLink to="/about">Read our story</ArrowLink>
              </Box>
            </Box>
          </Reveal>
        </Box>

        {/* Philosophy */}
        <Box sx={{ mt: { xs: 9, md: 13 } }}>
          <Reveal>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: colors.purple }}>
                Our philosophy is simple
              </Box>
              <Box sx={{ flex: 1, height: "1px", background: colors.border }} />
            </Box>
          </Reveal>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 2, md: 2.5 } }}>
            {profile.philosophy.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1} style={{ height: "100%" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: radii.lg,
                    background: colors.paper,
                    border: `1px solid ${colors.border}`,
                    overflow: "hidden",
                    transition: "transform 0.5s cubic-bezier(.22,1,.36,1), box-shadow 0.5s ease",
                    "&:hover": { transform: "translateY(-6px)", boxShadow: "0 30px 70px rgba(23,11,27,0.08)" },
                    "&:hover .num": { color: colors.purple },
                  }}
                >
                  <Box
                    className="num"
                    sx={{
                      fontFamily: fontDisplay,
                      fontStyle: "italic",
                      fontSize: "3.6rem",
                      lineHeight: 1,
                      color: colors.champagne,
                      transition: "color 0.4s ease",
                    }}
                  >
                    0{index + 1}
                  </Box>
                  <Box component="h3" sx={{ m: 0, mt: 3, fontFamily: fontDisplay, fontWeight: 500, fontSize: "1.55rem", letterSpacing: "-0.015em" }}>
                    {step.title}
                  </Box>
                  <Box component="p" sx={{ m: 0, mt: 1.5, color: colors.muted, lineHeight: 1.7 }}>
                    {step.text}
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}
