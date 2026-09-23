import Box from "@mui/material/Box";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { BackpackSvg, BooksSvg, ShoesSvg, StationerySvg, UniformSvg } from "./art.tsx";

function Float({
  children,
  delay,
  amplitude = 8,
}: {
  children: ReactNode;
  delay: number;
  amplitude?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      style={{ width: "100%", height: "100%" }}
      animate={reduce ? undefined : { y: [0, -amplitude, 0] }}
      transition={reduce ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function HeroComposition() {
  return (
    <Box
      role="img"
      aria-label="School books, a backpack, stationery, uniforms and shoes arranged on a glass platform"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 680,
        mx: "auto",
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", lg: "none" },
        gap: { xs: 1, lg: 0 },
        minHeight: { lg: 620 },
        mt: { xs: 1, lg: 0 },
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          left: "8%",
          right: "8%",
          top: "8%",
          height: "72%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(159,51,126,0.18), rgba(244,160,48,0.08) 42%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          left: "10%",
          right: "8%",
          bottom: "6%",
          height: 64,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.62)",
          border: "1px solid rgba(255,255,255,0.85)",
          boxShadow: "0 30px 50px rgba(28,20,36,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
        }}
      />

      <Box sx={{ position: { lg: "absolute" }, left: { lg: "0%" }, top: { lg: "4%" }, width: { lg: "46%" }, zIndex: 3 }}>
        <Float delay={0.1} amplitude={8}>
          <BooksSvg title="Stacked school books" variant="stack" />
        </Float>
      </Box>
      <Box sx={{ position: { lg: "absolute" }, right: { lg: "2%" }, top: { lg: "0%" }, width: { lg: "34%" }, zIndex: 2 }}>
        <Float delay={0.7} amplitude={11}>
          <BackpackSvg title="School backpack" />
        </Float>
      </Box>
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          left: "34%",
          top: "34%",
          width: "36%",
          zIndex: 4,
        }}
      >
        <Float delay={0.4} amplitude={7}>
          <StationerySvg title="Notebook and stationery" variant="spread" />
        </Float>
      </Box>
      <Box sx={{ position: { lg: "absolute" }, left: { lg: "0%" }, bottom: { lg: "8%" }, width: { lg: "42%" }, zIndex: 5 }}>
        <Float delay={0.9} amplitude={6}>
          <UniformSvg title="School uniforms" variant="pair" />
        </Float>
      </Box>
      <Box sx={{ position: { lg: "absolute" }, right: { lg: "0%" }, bottom: { lg: "2%" }, width: { lg: "48%" }, zIndex: 6 }}>
        <Float delay={1.1} amplitude={8}>
          <ShoesSvg title="School shoes" variant="pair" />
        </Float>
      </Box>
    </Box>
  );
}
