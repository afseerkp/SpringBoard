import Box from "@mui/material/Box";
import { Factory, Globe2, Plane, Truck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { clients, curricula, profile } from "../../config/site.ts";
import { colors, fontDisplay, gradients, radii } from "../../theme/tokens.ts";
import { ActionButton } from "../ui/ActionButton.tsx";
import { GlassCard } from "../ui/GlassCard.tsx";
import { HeroOrnaments } from "../ui/PageHero.tsx";
import { PageContainer } from "../ui/PageContainer.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { Accent, SectionHeading } from "../ui/SectionHeading.tsx";

const solutionIcons: Record<string, LucideIcon> = {
  distribution: Truck,
  team: Users,
  partners: Plane,
  manufacturing: Factory,
};

/** Integrated educational solutions — dark, premium band. */
export function SolutionsSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <Box
      component="section"
      className="sb-grain"
      sx={{ position: "relative", overflow: "hidden", py: { xs: 10, md: 15 }, background: gradients.plum, color: colors.white }}
    >
      <HeroOrnaments />
      <PageContainer wide>
        <Box sx={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" }, gap: { xs: 6, lg: 10 }, alignItems: "start" }}>
          <Box sx={{ position: { lg: "sticky" }, top: { lg: 120 } }}>
            <Reveal>
              <SectionHeading
                light
                eyebrow="Integrated educational solutions"
                title={
                  <>
                    Beyond distribution — <Accent light>everything under one roof.</Accent>
                  </>
                }
                subtitle={profile.solutions.closing}
              />
              {showCta ? (
                <Box sx={{ mt: 4.5 }}>
                  <ActionButton to="/about" variant="outlineLight">
                    How we work
                  </ActionButton>
                </Box>
              ) : null}
            </Reveal>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            {profile.solutions.items.map((item, index) => {
              const Icon = solutionIcons[item.key] ?? Truck;
              return (
                <Reveal key={item.key} delay={index * 0.08} style={{ height: "100%" }}>
                  <GlassCard dark hover sx={{ height: "100%", p: { xs: 3, md: 3.5 } }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: radii.md,
                          display: "grid",
                          placeItems: "center",
                          background: "rgba(228,188,122,0.1)",
                          border: "1px solid rgba(228,188,122,0.25)",
                          color: colors.champagne,
                        }}
                      >
                        <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                      </Box>
                      <Box sx={{ fontFamily: fontDisplay, fontStyle: "italic", color: colors.onDarkSubtle, fontSize: "1.1rem" }}>0{index + 1}</Box>
                    </Box>
                    <Box component="h3" sx={{ m: 0, mt: 4, fontFamily: fontDisplay, fontWeight: 500, fontSize: "1.5rem", letterSpacing: "-0.015em" }}>
                      {item.title}
                    </Box>
                    <Box component="p" sx={{ m: 0, mt: 1.5, color: colors.onDark, lineHeight: 1.7, fontSize: "0.96rem" }}>
                      {item.text}
                    </Box>
                  </GlassCard>
                </Reveal>
              );
            })}
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}

/** Institutional associations and reach. */
export function ClientsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 }, background: colors.paper }}>
      <PageContainer wide>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 5, lg: 10 }, alignItems: "center" }}>
          <Reveal>
            <SectionHeading
              eyebrow="Our institutional associations"
              title={
                <>
                  The privilege of serving <Accent>established institutions.</Accent>
                </>
              }
              subtitle="SpringBoard has had the privilege of serving a diverse portfolio of established educational institutions across the UAE."
            />
            <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 1 }}>
              {curricula.map((item) => (
                <Chip key={item}>{item} curriculum</Chip>
              ))}
              <Chip>
                <Globe2 size={14} aria-hidden="true" /> Middle East & Africa
              </Chip>
            </Box>
          </Reveal>

          <Box sx={{ display: "grid", gap: 2 }}>
            <Reveal>
              <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: colors.subtle, mb: 0.5 }}>
                Selected prestigious clients
              </Box>
            </Reveal>
            {clients.map((client, index) => (
              <Reveal key={client.name} delay={index * 0.1}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: { xs: 2, md: 3 },
                    alignItems: "center",
                    p: { xs: 2.5, md: 3.5 },
                    borderRadius: radii.lg,
                    background: colors.ivory,
                    border: `1px solid ${colors.border}`,
                    transition: "transform 0.5s cubic-bezier(.22,1,.36,1), border-color 0.4s ease, background 0.4s ease",
                    "&:hover": { transform: "translateX(8px)", borderColor: "rgba(159,51,126,0.25)", background: colors.white },
                  }}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: { xs: 52, md: 64 },
                      height: { xs: 52, md: 64 },
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      background: gradients.brand,
                      color: colors.white,
                      fontFamily: fontDisplay,
                      fontSize: { xs: "1.3rem", md: "1.6rem" },
                    }}
                  >
                    {client.name.charAt(0)}
                  </Box>
                  <Box>
                    <Box sx={{ fontFamily: fontDisplay, fontSize: { xs: "1.35rem", md: "1.75rem" }, letterSpacing: "-0.015em", lineHeight: 1.15 }}>
                      {client.name}
                    </Box>
                    <Box sx={{ mt: 0.5, color: colors.muted, fontSize: "0.92rem" }}>{client.location}, UAE</Box>
                  </Box>
                  <Box
                    sx={{
                      px: 1.6,
                      py: 0.6,
                      borderRadius: radii.pill,
                      border: `1px solid ${colors.borderStrong}`,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                    }}
                  >
                    {client.board}
                  </Box>
                </Box>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <Box sx={{ mt: 1, color: colors.subtle, fontSize: "0.9rem" }}>
                …and a growing network of IGCSE and CBSE schools across the region.
              </Box>
            </Reveal>
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.8,
        px: 1.8,
        py: 0.9,
        borderRadius: radii.pill,
        background: colors.purpleSoft,
        color: colors.purpleDeep,
        fontSize: "0.85rem",
        fontWeight: 600,
      }}
    >
      {children}
    </Box>
  );
}

