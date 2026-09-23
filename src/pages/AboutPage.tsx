import Box from "@mui/material/Box";
import { Building2, MapPin } from "lucide-react";
import { groupCompanies, offices, profile, siteConfig, stats } from "../config/site.ts";
import { SolutionsSection } from "../components/home/StorySections.tsx";
import { StrengthsSection, VisionSection } from "../components/home/ValueSections.tsx";
import { Seo } from "../components/seo/Seo.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { PageHero } from "../components/ui/PageHero.tsx";
import { Reveal } from "../components/ui/Reveal.tsx";
import { Accent, Eyebrow, SectionHeading } from "../components/ui/SectionHeading.tsx";
import { StatCounter } from "../components/ui/StatCounter.tsx";
import { asset } from "../lib/asset.ts";
import { colors, fontDisplay, gradients, radii } from "../theme/tokens.ts";

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`About Us | ${siteConfig.groupName}`}
        description={`${siteConfig.companyName} is an established name in educational material distribution and school services across the UAE, backed by five decades of experience in India.`}
        path="/about"
      />
      <PageHero
        eyebrow="About SpringBoard"
        title={
          <>
            Empowering education through <Accent light>quality, reach & reliability.</Accent>
          </>
        }
        subtitle={profile.about[0]}
        aside={
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderRadius: radii.lg,
              border: `1px solid ${colors.plumLine}`,
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={stat.label}
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  borderLeft: index % 2 === 1 ? `1px solid ${colors.plumLine}` : "none",
                  borderTop: index >= 2 ? `1px solid ${colors.plumLine}` : "none",
                }}
              >
                <StatCounter light stat={stat} />
              </Box>
            ))}
          </Box>
        }
      />

      {/* Who we are */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: colors.ivory }}>
        <PageContainer wide>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" }, gap: { xs: 5, lg: 10 } }}>
            <Reveal>
              <SectionHeading
                eyebrow="Who we are"
                title={
                  <>
                    A trusted partner for <Accent>educational institutions.</Accent>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={0.1}>
              {[...profile.about.slice(1), profile.reach].map((paragraph, index) => (
                <Box
                  key={paragraph}
                  component="p"
                  sx={{
                    m: 0,
                    mb: 2.5,
                    color: index === 0 ? colors.ink : colors.muted,
                    fontSize: index === 0 ? { xs: "1.15rem", md: "1.3rem" } : "1.04rem",
                    fontFamily: index === 0 ? fontDisplay : undefined,
                    lineHeight: index === 0 ? 1.6 : 1.8,
                  }}
                >
                  {paragraph}
                </Box>
              ))}
            </Reveal>
          </Box>
        </PageContainer>
      </Box>

      {/* Photo mosaic */}
      <Box component="section" sx={{ pb: { xs: 8, md: 12 }, background: colors.ivory }}>
        <PageContainer wide>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" },
              gridTemplateRows: { md: "260px 260px" },
              gap: 2,
            }}
          >
            {[
              { src: asset("/images/uniforms.webp"), alt: "School uniform collection on display", label: "School Uniforms", span: true },
              { src: asset("/images/books.webp"), alt: "SpringBoard school books and stationery", label: "Books & Stationery" },
              { src: asset("/images/shoes.webp"), alt: "School shoes in black, brown and white", label: "School Shoes" },
            ].map((photo, index) => (
              <Box key={photo.src} sx={{ gridRow: { md: photo.span ? "span 2" : "auto" } }}>
                <Reveal delay={index * 0.08} style={{ height: "100%" }}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 240, md: "100%" },
                      borderRadius: radii.xl,
                      overflow: "hidden",
                      background: colors.white,
                      border: `1px solid ${colors.border}`,
                      "& img": { transition: "transform 1s cubic-bezier(.22,1,.36,1)" },
                      "&:hover img": { transform: "scale(1.05)" },
                    }}
                  >
                    <Box component="img" src={photo.src} alt={photo.alt} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <Box
                      sx={{
                        position: "absolute",
                        left: 16,
                        bottom: 16,
                        px: 1.6,
                        py: 0.7,
                        borderRadius: radii.pill,
                        background: "rgba(30,11,35,0.8)",
                        backdropFilter: "blur(10px)",
                        color: colors.white,
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {photo.label}
                    </Box>
                  </Box>
                </Reveal>
              </Box>
            ))}
          </Box>
        </PageContainer>
      </Box>

      {/* The group */}
      <Box component="section" sx={{ pb: { xs: 10, md: 14 }, background: colors.ivory }}>
        <PageContainer wide>
          <Reveal>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: colors.purple }}>
                Our Group comprises
              </Box>
              <Box sx={{ flex: 1, height: "1px", background: colors.border }} />
            </Box>
          </Reveal>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2 }}>
            {groupCompanies.map((company, index) => {
              const flagship = "flagship" in company && company.flagship;
              return (
                <Reveal key={company.name} delay={index * 0.08} style={{ height: "100%" }}>
                  <Box
                    className={flagship ? "sb-grain" : undefined}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      minHeight: 240,
                      p: 3.5,
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: radii.lg,
                      background: flagship ? gradients.plum : colors.paper,
                      color: flagship ? colors.white : colors.ink,
                      border: flagship ? "none" : `1px solid ${colors.border}`,
                      transition: "transform 0.5s cubic-bezier(.22,1,.36,1), box-shadow 0.5s ease",
                      "&:hover": { transform: "translateY(-6px)", boxShadow: "0 30px 70px rgba(23,11,27,0.12)" },
                    }}
                  >
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        border: flagship ? "1px solid rgba(228,188,122,0.35)" : `1px solid ${colors.borderStrong}`,
                        color: flagship ? colors.champagne : colors.purple,
                      }}
                    >
                      <Building2 size={20} strokeWidth={1.6} aria-hidden="true" />
                    </Box>
                    <Box sx={{ mt: "auto", pt: 4 }}>
                      {flagship ? (
                        <Box sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: colors.champagne, mb: 1 }}>
                          Flagship · UAE
                        </Box>
                      ) : null}
                      <Box component="h3" sx={{ m: 0, fontFamily: fontDisplay, fontWeight: 500, fontSize: "1.35rem", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                        {company.name}
                      </Box>
                      <Box sx={{ mt: 1, fontSize: "0.88rem", color: flagship ? colors.onDark : colors.muted }}>{company.location}</Box>
                    </Box>
                  </Box>
                </Reveal>
              );
            })}
          </Box>
        </PageContainer>
      </Box>

      {/* Legacy */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: colors.paper }}>
        <PageContainer wide>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 5, lg: 10 }, alignItems: "center" }}>
            <Reveal>
              <Box
                className="sb-grain"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: radii.xl,
                  background: gradients.plum,
                  color: colors.white,
                  p: { xs: 4, md: 6 },
                  minHeight: { md: 460 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    position: "absolute",
                    right: -40,
                    bottom: -80,
                    fontFamily: fontDisplay,
                    fontSize: { xs: "14rem", md: "20rem" },
                    lineHeight: 1,
                    fontStyle: "italic",
                    color: "rgba(228,188,122,0.1)",
                  }}
                >
                  50
                </Box>
                <Eyebrow light>Our legacy & expertise</Eyebrow>
                <Box sx={{ position: "relative" }}>
                  <Box sx={{ fontFamily: fontDisplay, fontSize: { xs: "4.5rem", md: "6.5rem" }, lineHeight: 1, letterSpacing: "-0.04em" }}>
                    50<Box component="span" sx={{ color: colors.champagne }}>+</Box>
                  </Box>
                  <Box sx={{ mt: 1.5, fontSize: "1.1rem", color: colors.onDark, maxWidth: 320, lineHeight: 1.6 }}>
                    years of publishing and distribution experience within our Indian network.
                  </Box>
                </Box>
              </Box>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                title={
                  <>
                    Understanding what schools need — <Accent>and delivering it.</Accent>
                  </>
                }
                size="sm"
              />
              <Box sx={{ mt: 3 }}>
                {profile.legacy.map((paragraph) => (
                  <Box key={paragraph} component="p" sx={{ m: 0, mb: 2.2, color: colors.muted, lineHeight: 1.8, fontSize: "1.02rem" }}>
                    {paragraph}
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 4, display: "grid", gap: 1.5 }}>
                {profile.philosophy.map((step, index) => (
                  <Box key={step.title} sx={{ display: "flex", alignItems: "baseline", gap: 2, pb: 1.5, borderBottom: `1px solid ${colors.border}` }}>
                    <Box sx={{ fontFamily: fontDisplay, fontStyle: "italic", color: colors.champagne, fontSize: "1.1rem", minWidth: 28 }}>0{index + 1}</Box>
                    <Box sx={{ fontFamily: fontDisplay, fontSize: "1.3rem", letterSpacing: "-0.01em" }}>{step.title}</Box>
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Box>
        </PageContainer>
      </Box>

      <SolutionsSection showCta={false} />
      <StrengthsSection />
      <VisionSection />

      {/* Offices */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: colors.ivory }}>
        <PageContainer wide>
          <Reveal>
            <SectionHeading
              eyebrow="Our presence"
              title={
                <>
                  Rooted in India. <Accent>Serving the region from the UAE.</Accent>
                </>
              }
            />
          </Reveal>
          <Box sx={{ mt: { xs: 5, md: 7 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2 }}>
            {offices.map((office, index) => (
              <Reveal key={office.city} delay={index * 0.08} style={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3.5,
                    borderRadius: radii.lg,
                    background: colors.paper,
                    border: `1px solid ${colors.border}`,
                    transition: "border-color 0.4s ease",
                    "&:hover": { borderColor: "rgba(159,51,126,0.3)" },
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: colors.purple }}>
                      {"headquarters" in office && office.headquarters ? "UAE · Head office" : `${office.region} operations`}
                    </Box>
                    <MapPin size={16} color={colors.champagne} aria-hidden="true" />
                  </Box>
                  <Box component="h3" sx={{ m: 0, mt: 3, fontFamily: fontDisplay, fontWeight: 500, fontSize: "1.8rem", letterSpacing: "-0.02em" }}>
                    {office.city}
                  </Box>
                  <Box sx={{ mt: 1.5, color: colors.muted, lineHeight: 1.7, fontSize: "0.94rem" }}>
                    {office.lines.map((line) => (
                      <Box key={line}>{line}</Box>
                    ))}
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>
        </PageContainer>
      </Box>
    </>
  );
}
