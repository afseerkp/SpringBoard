import Box from "@mui/material/Box";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { colors, fontDisplay, gradients } from "../../theme/tokens.ts";
import { PageContainer } from "./PageContainer.tsx";
import { Reveal } from "./Reveal.tsx";
import { Eyebrow } from "./SectionHeading.tsx";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  crumbs,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
  crumbs?: Array<{ label: string; to?: string }>;
  aside?: ReactNode;
}) {
  const trail = crumbs ?? [{ label: "Home", to: "/" }, { label: eyebrow }];
  return (
    <Box
      component="section"
      className="sb-grain"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: "132px", md: "172px" },
        pb: { xs: 8, md: 11 },
        background: gradients.plum,
        color: colors.white,
      }}
    >
      <HeroOrnaments />
      <PageContainer wide>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: aside ? "1.2fr 0.8fr" : "1fr" },
            gap: { xs: 5, lg: 8 },
            alignItems: "end",
          }}
        >
          <Reveal>
            <Box
              component="nav"
              aria-label="Breadcrumb"
              sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 4, fontSize: "0.82rem", color: colors.onDarkSubtle }}
            >
              {trail.map((crumb, index) => (
                <Box key={crumb.label} sx={{ display: "inline-flex", alignItems: "center", gap: 0.8 }}>
                  {crumb.to ? (
                    <Box component={Link} to={crumb.to} sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: colors.white } }}>
                      {crumb.label}
                    </Box>
                  ) : (
                    <Box component="span" sx={{ color: colors.onDark }}>{crumb.label}</Box>
                  )}
                  {index < trail.length - 1 ? <ChevronRight size={14} aria-hidden="true" /> : null}
                </Box>
              ))}
            </Box>
            <Eyebrow light>{eyebrow}</Eyebrow>
            <Box
              component="h1"
              sx={{
                m: 0,
                fontFamily: fontDisplay,
                fontSize: "clamp(2.6rem, 6vw, 5.2rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                fontWeight: 400,
                maxWidth: 900,
                fontVariationSettings: '"opsz" 144',
              }}
            >
              {title}
            </Box>
            <Box
              component="p"
              sx={{ m: 0, mt: 3, color: colors.onDark, fontSize: { xs: "1.02rem", md: "1.14rem" }, lineHeight: 1.75, maxWidth: 640 }}
            >
              {subtitle}
            </Box>
            {children}
          </Reveal>
          {aside ? <Reveal delay={0.12}>{aside}</Reveal> : null}
        </Box>
      </PageContainer>
    </Box>
  );
}

export function HeroOrnaments() {
  return (
    <>
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "radial-gradient(ellipse at 70% 30%, #000 10%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 30%, #000 10%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: 620,
          height: 620,
          right: -180,
          top: -220,
          borderRadius: "50%",
          border: "1px solid rgba(228,188,122,0.16)",
          pointerEvents: "none",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 70,
            borderRadius: "50%",
            border: "1px solid rgba(228,188,122,0.1)",
          },
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(228,188,122,0.5), transparent)",
        }}
      />
    </>
  );
}
