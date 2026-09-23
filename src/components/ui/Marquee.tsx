import Box from "@mui/material/Box";
import type { ReactNode } from "react";

/** Infinite, pause-on-hover horizontal ticker. Content is duplicated for a seamless loop. */
export function Marquee({ children, duration = 40 }: { children: ReactNode; duration?: number }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        "&:hover .track": { animationPlayState: "paused" },
      }}
    >
      <Box
        className="track"
        sx={{
          display: "flex",
          width: "max-content",
          animation: `sb-marquee ${duration}s linear infinite`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: "none" }}>{children}</Box>
        <Box aria-hidden="true" sx={{ display: "flex", alignItems: "center", flex: "none" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
