import Box from "@mui/material/Box";
import { X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { galleryFilters, galleryItems } from "../../config/gallery.ts";
import type { GalleryCategory } from "../../types/content.ts";
import { colors, radii, shadows } from "../../theme/tokens.ts";
import { VisualMedia } from "../visuals/SceneArt.tsx";

export function GalleryExperience() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const titleId = useId();
  const visible = galleryItems.filter((item) => filter === "All" || item.category === filter);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => (index === null ? index : (index + 1) % visible.length));
      if (event.key === "ArrowLeft") setActive((index) => (index === null ? index : (index - 1 + visible.length) % visible.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, visible.length]);

  const current = active === null ? null : visible[active];

  return (
    <>
      <Box role="group" aria-label="Gallery categories" sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
        {galleryFilters.map((item) => {
          const selected = item === filter;
          return (
            <Box
              key={item}
              component="button"
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setFilter(item);
                setActive(null);
              }}
              sx={{
                cursor: "pointer",
                borderRadius: radii.pill,
                px: 2.4,
                py: 1.1,
                fontWeight: 600,
                fontSize: "0.9rem",
                background: selected ? colors.ink : colors.paper,
                color: selected ? colors.white : colors.ink,
                border: `1px solid ${selected ? colors.ink : colors.borderStrong}`,
                transition: "all 0.3s ease",
                "&:hover": { borderColor: colors.ink },
              }}
            >
              {item}
            </Box>
          );
        })}
      </Box>
      <Box sx={{ columnCount: { xs: 1, sm: 2, lg: 3 }, columnGap: "16px" }}>
        {visible.map((item, index) => (
          <Box
            key={item.id}
            component="button"
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Open ${item.title}`}
            sx={{
              width: "100%",
              breakInside: "avoid",
              mb: 2,
              p: 0,
              cursor: "pointer",
              textAlign: "left",
              background: colors.paper,
              borderRadius: radii.lg,
              overflow: "hidden",
              border: `1px solid ${colors.border}`,
              display: "block",
              transition: "box-shadow 0.5s ease, transform 0.5s cubic-bezier(.22,1,.36,1)",
              "&:hover": { boxShadow: shadows.lift, transform: "translateY(-4px)" },
              "&:hover .visual": { transform: "scale(1.05)" },
            }}
          >
            <Box className="visual" sx={{ height: item.tall ? 360 : 240, transition: "transform 0.9s cubic-bezier(.22,1,.36,1)" }}>
              <VisualMedia visual={item.visual} />
            </Box>
            <Box sx={{ px: 2.5, py: 2, position: "relative", background: colors.paper }}>
              <Box sx={{ color: colors.purple, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.category}</Box>
              <Box sx={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: "1.2rem", mt: 0.4 }}>{item.title}</Box>
            </Box>
          </Box>
        ))}
      </Box>

      {current ? (
        <Box
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          sx={{ position: "fixed", inset: 0, zIndex: 80, background: "rgba(19,6,26,0.82)", backdropFilter: "blur(8px)", display: "grid", placeItems: "center", p: 2 }}
          onClick={() => setActive(null)}
        >
          <Box
            onClick={(event) => event.stopPropagation()}
            sx={{ width: "min(100%, 920px)", background: colors.white, borderRadius: radii.xl, overflow: "hidden", boxShadow: shadows.lift }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2.5, py: 1.5 }}>
              <Box>
                <Box id={titleId} component="h2" sx={{ m: 0, fontSize: "1.25rem" }}>{current.title}</Box>
                <Box sx={{ color: colors.muted, fontSize: "0.9rem" }}>{current.category as GalleryCategory}</Box>
              </Box>
              <Box component="button" type="button" aria-label="Close gallery preview" onClick={() => setActive(null)} sx={{ width: 44, height: 44, borderRadius: "50%", border: `1px solid ${colors.border}`, background: colors.white, cursor: "pointer" }}>
                <X size={18} aria-hidden="true" />
              </Box>
            </Box>
            <Box sx={{ height: { xs: 280, md: 460 } }}>
              <VisualMedia visual={current.visual} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
              <Box component="button" type="button" onClick={() => setActive((index) => (index === null ? index : (index - 1 + visible.length) % visible.length))} sx={navButton}>
                Previous
              </Box>
              <Box component="button" type="button" onClick={() => setActive((index) => (index === null ? index : (index + 1) % visible.length))} sx={navButton}>
                Next
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

const navButton = {
  border: `1px solid ${colors.borderStrong}`,
  background: colors.paper,
  color: colors.ink,
  fontWeight: 600,
  borderRadius: radii.pill,
  px: 2,
  py: 1,
  cursor: "pointer",
};
