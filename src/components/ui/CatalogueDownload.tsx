import Box from "@mui/material/Box";
import { Download, Eye, FileText } from "lucide-react";
import { catalogues } from "../../config/site.ts";
import { colors, fontDisplay, gradients, radii, shadows } from "../../theme/tokens.ts";
import { PageContainer } from "./PageContainer.tsx";
import { Reveal } from "./Reveal.tsx";
import { Eyebrow } from "./SectionHeading.tsx";

type Catalogue = (typeof catalogues)[keyof typeof catalogues];

const buttonBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1.2,
  minHeight: 54,
  px: 3,
  borderRadius: radii.pill,
  fontWeight: 600,
  fontSize: "0.95rem",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease, border-color 0.3s ease",
  "&:hover": { transform: "translateY(-2px)" },
} as const;

/** Premium download band for a PDF catalogue. */
export function CatalogueDownload({ catalogue = catalogues.shoes, id = "catalogue" }: { catalogue?: Catalogue; id?: string }) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, background: colors.paper, scrollMarginTop: "90px" }}>
      <PageContainer wide>
        <Reveal>
          <Box
            className="sb-grain"
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: radii.xl,
              background: gradients.plum,
              color: colors.white,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              p: { xs: 3.5, md: 7 },
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                width: 480,
                height: 480,
                right: -140,
                top: -200,
                borderRadius: "50%",
                border: "1px solid rgba(228,188,122,0.16)",
                pointerEvents: "none",
              }}
            />
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Eyebrow light>Download</Eyebrow>
              <Box
                component="h2"
                sx={{ m: 0, fontFamily: fontDisplay, fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
              >
                {catalogue.title.replace(" Catalogue", "")}{" "}
                <Box component="em" sx={{ fontStyle: "italic", color: colors.champagne }}>
                  catalogue.
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, mt: 2.5, color: colors.onDark, lineHeight: 1.75, maxWidth: 480 }}>
                {catalogue.description}
              </Box>
              <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {catalogue.brands.map((brand) => (
                  <Box
                    key={brand}
                    sx={{
                      px: 1.8,
                      py: 0.7,
                      borderRadius: radii.pill,
                      border: "1px solid rgba(228,188,122,0.4)",
                      background: "rgba(228,188,122,0.07)",
                      color: colors.champagneSoft,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                    }}
                  >
                    {brand}
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Box
                  component="a"
                  href={catalogue.file}
                  download={catalogue.fileName}
                  sx={{ ...buttonBase, background: gradients.gold, color: colors.plumDeep, boxShadow: shadows.goldGlow }}
                >
                  <Download size={18} aria-hidden="true" />
                  Download PDF
                </Box>
                <Box
                  component="a"
                  href={catalogue.file}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    ...buttonBase,
                    color: colors.white,
                    border: "1px solid rgba(255,255,255,0.24)",
                    background: "rgba(255,255,255,0.04)",
                    "&:hover": { transform: "translateY(-2px)", borderColor: "rgba(255,255,255,0.6)" },
                  }}
                >
                  <Eye size={18} aria-hidden="true" />
                  View online
                </Box>
              </Box>
              <Box sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 1, color: colors.onDarkSubtle, fontSize: "0.82rem" }}>
                <FileText size={14} aria-hidden="true" />
                PDF · {catalogue.pages} pages · {catalogue.size} · Prices available on request
              </Box>
            </Box>

            {/* Cover mock-up */}
            <Box sx={{ position: "relative", zIndex: 1, height: { xs: 300, md: 400 }, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Box
                component="img"
                src={catalogue.preview}
                alt=""
                aria-hidden="true"
                loading="lazy"
                sx={{
                  position: "absolute",
                  height: { xs: "80%", md: "85%" },
                  width: "auto",
                  borderRadius: "6px",
                  transform: "translateX(28%) rotate(7deg)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                  opacity: 0.9,
                }}
              />
              <Box
                component="a"
                href={catalogue.file}
                target="_blank"
                rel="noopener"
                aria-label={`Open the ${catalogue.title}`}
                sx={{
                  position: "relative",
                  height: { xs: "88%", md: "95%" },
                  transform: "translateX(-12%) rotate(-4deg)",
                  transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
                  "&:hover": { transform: "translateX(-12%) rotate(-1deg) translateY(-8px)" },
                }}
              >
                <Box
                  component="img"
                  src={catalogue.cover}
                  alt={`${catalogue.title} cover`}
                  loading="lazy"
                  sx={{
                    height: "100%",
                    width: "auto",
                    display: "block",
                    borderRadius: "6px",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(228,188,122,0.25)",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Reveal>
      </PageContainer>
    </Box>
  );
}
