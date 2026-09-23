import Box from "@mui/material/Box";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../config/site.ts";
import { productCategories } from "../../config/products.ts";
import { colors, radii } from "../../theme/tokens.ts";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const [productsOpen, setProductsOpen] = useState(true);

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

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: "fixed", inset: 0, zIndex: 70 }}
        >
          <Box
            onClick={onClose}
            sx={{ position: "absolute", inset: 0, background: "rgba(28,20,36,0.35)" }}
          />
          <motion.nav
            aria-label="Mobile"
            initial={reduce ? false : { x: 28, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 28, opacity: 0 }}
            transition={{ duration: 0.28 }}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              bottom: 12,
              width: "min(100% - 24px, 380px)",
            }}
          >
            <Box
              sx={{
                height: "100%",
                overflow: "auto",
                background: "rgba(255,255,255,0.96)",
                backdropFilter: "blur(20px)",
                borderRadius: radii.lg,
                boxShadow: "0 30px 80px rgba(28,20,36,0.18)",
                p: 2.5,
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
                <Box
                  component="button"
                  type="button"
                  ref={closeRef}
                  onClick={onClose}
                  aria-label="Close menu"
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: `1px solid ${colors.border}`,
                    background: colors.white,
                    cursor: "pointer",
                  }}
                >
                  <X size={18} aria-hidden="true" />
                </Box>
              </Box>
              {navLinks.map((link) =>
                link.to === "/products" ? (
                  <Box key={link.to}>
                    <Box
                      component="button"
                      type="button"
                      aria-expanded={productsOpen}
                      onClick={() => setProductsOpen((value) => !value)}
                      sx={{
                        width: "100%",
                        textAlign: "left",
                        border: 0,
                        background: pathname.startsWith("/products") ? colors.purpleSoft : "transparent",
                        color: colors.ink,
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        borderRadius: radii.sm,
                        px: 1.5,
                        py: 1.3,
                        cursor: "pointer",
                      }}
                    >
                      Products
                    </Box>
                    {productsOpen ? (
                      <>
                        <Box
                          component={Link}
                          to="/products"
                          onClick={onClose}
                          sx={{ display: "block", textDecoration: "none", color: colors.ink, fontWeight: 700, pl: 3, pr: 1.5, py: 1 }}
                        >
                          All products
                        </Box>
                        {productCategories.map((category) => (
                          <Box
                            key={category.slug}
                            component={Link}
                            to={`/products/${category.slug}`}
                            onClick={onClose}
                            sx={{
                              display: "block",
                              textDecoration: "none",
                              color: colors.muted,
                              fontWeight: 600,
                              pl: 3,
                              pr: 1.5,
                              py: 1,
                            }}
                          >
                            {category.menuLabel}
                          </Box>
                        ))}
                      </>
                    ) : null}
                  </Box>
                ) : (
                  <Box
                    key={link.to}
                    component={Link}
                    to={link.to}
                    onClick={onClose}
                    aria-current={pathname === link.to ? "page" : undefined}
                    sx={{
                      textDecoration: "none",
                      color: colors.ink,
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      borderRadius: radii.sm,
                      px: 1.5,
                      py: 1.3,
                      background: pathname === link.to ? colors.purpleSoft : "transparent",
                    }}
                  >
                    {link.label}
                  </Box>
                ),
              )}
              <Box
                component={Link}
                to="/contact"
                onClick={onClose}
                sx={{
                  mt: 2,
                  textAlign: "center",
                  textDecoration: "none",
                  background: `linear-gradient(135deg, ${colors.purple}, ${colors.purpleMid})`,
                  color: colors.white,
                  fontWeight: 700,
                  borderRadius: radii.pill,
                  py: 1.5,
                }}
              >
                Get in Touch
              </Box>
            </Box>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
