import Box from "@mui/material/Box";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, siteConfig } from "../../config/site.ts";
import { productCategories } from "../../config/products.ts";
import { colors, ease, fontDisplay, gradients, radii } from "../../theme/tokens.ts";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const itemSx = (active: boolean) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    textAlign: "left" as const,
    border: 0,
    background: "transparent",
    textDecoration: "none",
    color: active ? colors.champagne : colors.white,
    fontFamily: fontDisplay,
    fontWeight: 400,
    fontSize: "2rem",
    letterSpacing: "-0.02em",
    px: 0,
    py: 1.4,
    borderBottom: `1px solid ${colors.plumLine}`,
    cursor: "pointer",
  });

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: "fixed", inset: 0, zIndex: 70 }}
        >
          <Box
            component="nav"
            aria-label="Mobile"
            className="sb-grain"
            sx={{
              position: "absolute",
              inset: 0,
              overflow: "auto",
              background: gradients.plum,
              color: colors.white,
              px: 3,
              pt: 2.5,
              pb: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, position: "relative", zIndex: 1 }}>
              <Box component="img" src={siteConfig.logoLight} alt={siteConfig.shortName} sx={{ height: 38, width: "auto" }} />
              <Box
                component="button"
                type="button"
                ref={closeRef}
                onClick={onClose}
                aria-label="Close menu"
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.24)",
                  background: "rgba(255,255,255,0.06)",
                  color: colors.white,
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <X size={18} aria-hidden="true" />
              </Box>
            </Box>
            <Box sx={{ position: "relative", zIndex: 1 }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + index * 0.05, ease }}
                >
                  {link.to === "/products" ? (
                    <Box>
                      <Box
                        component="button"
                        type="button"
                        aria-expanded={productsOpen}
                        onClick={() => setProductsOpen((value) => !value)}
                        sx={itemSx(pathname.startsWith("/products"))}
                      >
                        Products
                        <Box component="span" sx={{ display: "inline-flex", transition: "transform 0.3s ease", transform: productsOpen ? "rotate(180deg)" : "none" }}>
                          <ChevronDown size={22} aria-hidden="true" />
                        </Box>
                      </Box>
                      {productsOpen ? (
                        <Box sx={{ display: "grid", py: 1 }}>
                          {[{ slug: "", menuLabel: "All products" }, ...productCategories].map((category) => (
                            <Box
                              key={category.slug || "all"}
                              component={Link}
                              to={category.slug ? `/products/${category.slug}` : "/products"}
                              onClick={onClose}
                              sx={{ textDecoration: "none", color: colors.onDark, fontWeight: 500, py: 1, pl: 0.5, "&:hover": { color: colors.white } }}
                            >
                              {category.menuLabel}
                            </Box>
                          ))}
                        </Box>
                      ) : null}
                    </Box>
                  ) : (
                    <Box
                      component={Link}
                      to={link.to}
                      onClick={onClose}
                      aria-current={pathname === link.to ? "page" : undefined}
                      sx={itemSx(pathname === link.to)}
                    >
                      {link.label}
                      <ArrowRight size={20} aria-hidden="true" style={{ opacity: 0.4 }} />
                    </Box>
                  )}
                </motion.div>
              ))}
            </Box>
            <Box sx={{ mt: "auto", pt: 5, position: "relative", zIndex: 1 }}>
              <Box
                component={Link}
                to="/contact"
                onClick={onClose}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  textDecoration: "none",
                  background: gradients.gold,
                  color: colors.plumDeep,
                  fontWeight: 600,
                  borderRadius: radii.pill,
                  py: 1.8,
                }}
              >
                Partner With Us <ArrowRight size={18} aria-hidden="true" />
              </Box>
              <Box sx={{ mt: 2.5, textAlign: "center", color: colors.onDarkSubtle, fontSize: "0.82rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                {siteConfig.motto}
              </Box>
            </Box>
          </Box>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
