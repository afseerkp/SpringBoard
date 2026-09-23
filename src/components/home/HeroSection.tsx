import Box from "@mui/material/Box";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { useRef } from "react";
import type { ReactNode } from "react";
import { siteConfig, stats } from "../../config/site.ts";
import { asset } from "../../lib/asset.ts";
import { colors, ease, fontDisplay, gradients, radii } from "../../theme/tokens.ts";
import { ActionButton } from "../ui/ActionButton.tsx";
import { HeroOrnaments } from "../ui/PageHero.tsx";
import { PageContainer } from "../ui/PageContainer.tsx";
import { StatCounter } from "../ui/StatCounter.tsx";

const words = ["Empowering", "education", "through"];

export function HeroSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease },
        };

  return (
    <Box
      ref={ref}
      component="section"
      className="sb-grain"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: "128px", md: "150px" },
        pb: { xs: 6, md: 0 },
        background: gradients.plum,
        color: colors.white,
      }}
    >
      <HeroOrnaments />
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: 520,
          height: 520,
          left: "52%",
          top: "18%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,69,143,0.35), transparent 65%)",
          filter: "blur(30px)",
          animation: "sb-pulse 9s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <PageContainer wide>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.08fr 0.92fr" },
            gap: { xs: 6, lg: 5 },
            alignItems: "center",
          }}
        >
          <Box>
            <motion.div {...fadeUp(0.05)}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  pl: 0.8,
                  pr: 2,
                  py: 0.8,
                  borderRadius: radii.pill,
                  border: "1px solid rgba(228,188,122,0.28)",
                  background: "rgba(228,188,122,0.06)",
                  fontSize: { xs: "0.72rem", sm: "0.78rem" },
                  letterSpacing: "0.08em",
                  color: colors.champagneSoft,
                  whiteSpace: "nowrap",
                }}
              >
                <Box component="span" sx={{ px: 1.2, py: 0.4, borderRadius: radii.pill, background: gradients.gold, color: colors.plumDeep, fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.12em" }}>
                  UAE · INDIA
                </Box>
                {siteConfig.groupName}
              </Box>
            </motion.div>

            <Box
              component="h1"
              sx={{
                m: 0,
                mt: 3.5,
                fontFamily: fontDisplay,
                fontWeight: 400,
                fontSize: "clamp(2.8rem, 6.2vw, 5.5rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
                fontVariationSettings: '"opsz" 144',
              }}
            >
              <Box component="span" sx={{ display: "block" }}>
                {words.map((word, index) => (
                  <motion.span
                    key={word}
                    style={{ display: "inline-block", marginRight: "0.24em" }}
                    {...(reduce
                      ? {}
                      : {
                          initial: { opacity: 0, y: 40, filter: "blur(8px)" },
                          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                          transition: { duration: 1.1, delay: 0.15 + index * 0.09, ease },
                        })}
                  >
                    {word}
                  </motion.span>
                ))}
              </Box>
              <motion.span style={{ display: "block" }} {...fadeUp(0.45)}>
                <Box
                  component="em"
                  sx={{
                    fontStyle: "italic",
                    fontWeight: 300,
                    background: gradients.goldText,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    pr: "0.06em",
                  }}
                >
                  quality, reach
                </Box>
              </motion.span>
              <motion.span style={{ display: "block" }} {...fadeUp(0.55)}>
                & reliability.
              </motion.span>
            </Box>

            <motion.div {...fadeUp(0.7)}>
              <Box component="p" sx={{ m: 0, mt: 3.5, maxWidth: 540, color: colors.onDark, fontSize: { xs: "1.02rem", md: "1.12rem" }, lineHeight: 1.75 }}>
                A trusted partner to leading IGCSE and CBSE schools across the Middle East and Africa — supplying textbooks, notebooks and educational materials with the backing of five decades of publishing and distribution experience.
              </Box>
            </motion.div>

            <motion.div {...fadeUp(0.85)}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4.5 }}>
                <ActionButton to="/about" variant="gold" size="lg">
                  Discover SpringBoard
                </ActionButton>
                <ActionButton to="/products" variant="outlineLight" size="lg">
                  Explore Products
                </ActionButton>
              </Box>
            </motion.div>
          </Box>

          <motion.div style={{ y: artY }} {...fadeUp(0.35)}>
            <HeroShowcase />
          </motion.div>
        </Box>

        {/* Stats */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            mt: { xs: 8, lg: 4 },
            borderTop: `1px solid ${colors.plumLine}`,
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" },
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={stat.label}
              sx={{
                py: { xs: 3.5, md: 5 },
                pl: { xs: index % 2 === 1 ? 2.5 : 0, lg: index === 0 ? 0 : 4 },
                borderLeft: {
                  xs: index % 2 === 1 ? `1px solid ${colors.plumLine}` : "none",
                  lg: index === 0 ? "none" : `1px solid ${colors.plumLine}`,
                },
                borderTop: { xs: index >= 2 ? `1px solid ${colors.plumLine}` : "none", lg: "none" },
              }}
            >
              <StatCounter light stat={stat} />
            </Box>
          ))}
        </Box>
      </PageContainer>
    </Box>
  );
}

function HeroShowcase() {
  return (
    <Box sx={{ position: "relative", maxWidth: 600, mx: "auto" }}>
      <Box
        sx={{
          position: "relative",
          borderRadius: "300px 300px 32px 32px",
          p: { xs: 2, md: 3 },
          pt: { xs: 5, md: 7 },
          background: "linear-gradient(180deg, #FFFDF9 0%, #F6EFE6 100%)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.6)",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 10,
            borderRadius: "290px 290px 24px 24px",
            border: "1px solid rgba(185,119,26,0.28)",
            pointerEvents: "none",
          },
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% 30%, rgba(159,51,126,0.1), transparent 60%)",
          }}
        />
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            left: "12%",
            right: "12%",
            bottom: { xs: 18, md: 26 },
            height: 46,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(110,33,86,0.18), transparent 70%)",
          }}
        />
        <Box
          component="img"
          src={asset("/images/students-portrait.webp")}
          alt="Two smiling students in blue and white school uniforms, ready for the school day"
          width={1200}
          height={1018}
          fetchPriority="high"
          sx={{
            position: "relative",
            display: "block",
            width: "100%",
            height: "auto",
            mixBlendMode: "multiply",
          }}
        />
      </Box>

      <FloatingBadge
        sx={{ left: { xs: -6, md: -34 }, top: { xs: "30%", md: "34%" } }}
        delay={0}
        icon={<GraduationCap size={18} aria-hidden="true" />}
        title="IGCSE & CBSE"
        text="Schools served"
      />
      <FloatingBadge
        sx={{ right: { xs: -6, md: -28 }, bottom: { xs: "12%", md: "16%" } }}
        delay={1.6}
        icon={<Award size={18} aria-hidden="true" />}
        title="5 decades"
        text="Publishing legacy"
      />
    </Box>
  );
}

function FloatingBadge({
  sx,
  icon,
  title,
  text,
  delay,
}: {
  sx: Record<string, unknown>;
  icon: ReactNode;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 8,
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        gap: 1.4,
        pl: 1,
        pr: 2.2,
        py: 1,
        borderRadius: radii.pill,
        background: "rgba(30,11,35,0.78)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(228,188,122,0.3)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
        animation: `sb-float 7s ease-in-out ${delay}s infinite`,
        ...sx,
      }}
    >
      <Box sx={{ width: 38, height: 38, borderRadius: "50%", display: "grid", placeItems: "center", background: gradients.gold, color: colors.plumDeep }}>
        {icon}
      </Box>
      <Box>
        <Box sx={{ fontWeight: 700, fontSize: "0.9rem", color: colors.white, lineHeight: 1.2 }}>{title}</Box>
        <Box sx={{ fontSize: "0.74rem", color: colors.onDarkSubtle }}>{text}</Box>
      </Box>
    </Box>
  );
}
