import Box from "@mui/material/Box";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, ChevronDown, Download, Footprints, Menu, Pencil, Shirt } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { catalogues, navLinks, siteConfig } from "../../config/site.ts";
import { productCategories } from "../../config/products.ts";
import { colors, ease, gradients, layout, radii, shadows } from "../../theme/tokens.ts";
import { MobileMenu } from "./MobileMenu.tsx";

const categoryIcons: Record<string, LucideIcon> = {
  books: BookOpen,
  stationery: Pencil,
  uniforms: Shirt,
  shoes: Footprints,
};

function isActive(to: string, pathname: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);
  const menuId = useId();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProductsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    setMenuOpen(false);
    setProductsOpen(false);
  }

  const openProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setProductsOpen(false), 160);
  };

  // Every page opens on a dark hero, so the header starts light-on-dark.
  const onDark = !scrolled;
  const linkColor = onDark ? "rgba(255,255,255,0.82)" : colors.ink;

  const linkSx = (active: boolean) => ({
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: 0.5,
    border: 0,
    background: "transparent",
    textDecoration: "none",
    color: active ? (onDark ? colors.white : colors.purple) : linkColor,
    fontWeight: 500,
    fontSize: "0.93rem",
    letterSpacing: "0.01em",
    px: 1.8,
    py: 1,
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: 2,
      width: active ? 18 : 0,
      height: "1.5px",
      borderRadius: 2,
      transform: "translateX(-50%)",
      background: onDark ? colors.champagne : colors.purple,
      transition: "width 0.35s cubic-bezier(.22,1,.36,1)",
    },
    "&:hover": { color: onDark ? colors.white : colors.purple },
    "&:hover::after": { width: 18 },
  });

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        height: scrolled ? 72 : layout.header + 8,
        display: "flex",
        alignItems: "center",
        background: scrolled ? "rgba(250,247,242,0.82)" : "transparent",
        backdropFilter: scrolled ? "saturate(160%) blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.border}` : "1px solid rgba(255,255,255,0)",
        boxShadow: scrolled ? "0 10px 30px rgba(23,11,27,0.05)" : "none",
        transition: "height 0.4s cubic-bezier(.22,1,.36,1), background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <Box
        sx={{
          width: `min(100% - 32px, ${layout.wide}px)`,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          component={Link}
          to="/"
          aria-label={`${siteConfig.shortName} home`}
          sx={{ position: "relative", display: "flex", alignItems: "center", height: { xs: 40, md: 48 } }}
        >
          <Box
            component="img"
            src={siteConfig.logoLight}
            alt={siteConfig.shortName}
            width={siteConfig.logoWidth}
            height={siteConfig.logoHeight}
            sx={{ height: "100%", width: "auto", transition: "opacity 0.35s ease", opacity: onDark ? 1 : 0 }}
          />
          <Box
            component="img"
            src={siteConfig.logo}
            alt=""
            aria-hidden="true"
            width={siteConfig.logoWidth}
            height={siteConfig.logoHeight}
            sx={{ position: "absolute", left: 0, top: 0, height: "100%", width: "auto", transition: "opacity 0.35s ease", opacity: onDark ? 0 : 1 }}
          />
        </Box>

        <Box component="nav" aria-label="Primary" sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 0.5 }}>
          {navLinks.map((link) =>
            link.to === "/products" ? (
              <Box key={link.to} onMouseEnter={openProducts} onMouseLeave={scheduleClose} sx={{ position: "relative" }}>
                <Box
                  component="button"
                  type="button"
                  aria-expanded={productsOpen}
                  aria-controls={menuId}
                  onClick={(event) => {
                    if (event.detail === 0) {
                      setProductsOpen((open) => !open);
                      return;
                    }
                    setProductsOpen(true);
                  }}
                  sx={linkSx(isActive(link.to, pathname))}
                >
                  Products
                  <Box
                    component="span"
                    sx={{ display: "inline-flex", transition: "transform 0.3s ease", transform: productsOpen ? "rotate(180deg)" : "none" }}
                  >
                    <ChevronDown size={15} aria-hidden="true" />
                  </Box>
                </Box>
                <AnimatePresence>
                  {productsOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.3, ease }}
                      style={{ position: "absolute", top: "calc(100% + 14px)", left: "50%", marginLeft: -310, width: 620 }}
                    >
                      <Box
                        id={menuId}
                        role="menu"
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "0.9fr 1.1fr",
                          gap: 1,
                          p: 1,
                          borderRadius: radii.lg,
                          background: "rgba(255,253,249,0.97)",
                          backdropFilter: "blur(20px)",
                          border: `1px solid ${colors.border}`,
                          boxShadow: shadows.lift,
                        }}
                      >
                        <Box
                          component={Link}
                          to="/products"
                          role="menuitem"
                          className="sb-grain"
                          sx={{
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            minHeight: 260,
                            p: 2.5,
                            borderRadius: radii.md,
                            background: gradients.plum,
                            color: colors.white,
                            textDecoration: "none",
                            "&:hover .go": { transform: "translateX(4px)" },
                          }}
                        >
                          <Box sx={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: colors.champagne, fontWeight: 700 }}>
                            Our range
                          </Box>
                          <Box sx={{ mt: 1, fontFamily: '"Fraunces", Georgia, serif', fontSize: "1.55rem", lineHeight: 1.15 }}>
                            Everything a school needs, under one roof.
                          </Box>
                          <Box sx={{ mt: 2, display: "inline-flex", alignItems: "center", gap: 0.8, fontSize: "0.88rem", fontWeight: 600 }}>
                            View all products
                            <Box component="span" className="go" sx={{ display: "inline-flex", transition: "transform 0.3s ease" }}>
                              <ArrowRight size={16} aria-hidden="true" />
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ display: "grid", gap: 0.5 }}>
                          {productCategories.map((category) => {
                            const Icon = categoryIcons[category.slug] ?? BookOpen;
                            return (
                            <Box
                              key={category.slug}
                              component={Link}
                              to={`/products/${category.slug}`}
                              role="menuitem"
                              sx={{
                                display: "grid",
                                gridTemplateColumns: "56px 1fr",
                                gap: 1.6,
                                alignItems: "center",
                                textDecoration: "none",
                                color: colors.ink,
                                borderRadius: radii.sm,
                                p: 1,
                                transition: "background 0.25s ease",
                                "&:hover": { background: colors.sand },
                                "&:hover .ico": { background: gradients.brand, color: colors.white },
                              }}
                            >
                              <Box
                                className="ico"
                                sx={{
                                  width: 56,
                                  height: 56,
                                  borderRadius: radii.sm,
                                  display: "grid",
                                  placeItems: "center",
                                  background: colors.purpleSoft,
                                  color: colors.purple,
                                  transition: "all 0.3s ease",
                                }}
                              >
                                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                              </Box>
                              <Box>
                                <Box sx={{ fontWeight: 600, fontSize: "0.95rem" }}>{category.menuLabel}</Box>
                                <Box sx={{ color: colors.muted, fontSize: "0.82rem", mt: 0.2 }}>{category.menuDescription}</Box>
                              </Box>
                            </Box>
                            );
                          })}
                          <Box
                            component="a"
                            href={catalogues.shoes.file}
                            download={catalogues.shoes.fileName}
                            role="menuitem"
                            sx={{
                              mt: 0.5,
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              px: 1.5,
                              py: 1.1,
                              borderRadius: radii.sm,
                              border: `1px dashed ${colors.borderStrong}`,
                              color: colors.purple,
                              fontSize: "0.86rem",
                              fontWeight: 600,
                              textDecoration: "none",
                              "&:hover": { background: colors.purpleSoft, borderColor: colors.purple },
                            }}
                          >
                            <Download size={16} aria-hidden="true" />
                            Download Shoe Catalogue (PDF)
                          </Box>
                        </Box>
                      </Box>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Box>
            ) : (
              <Box
                key={link.to}
                component={Link}
                to={link.to}
                aria-current={isActive(link.to, pathname) ? "page" : undefined}
                sx={linkSx(isActive(link.to, pathname))}
              >
                {link.label}
              </Box>
            ),
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component={Link}
            to="/contact"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              background: onDark ? gradients.gold : gradients.brand,
              color: onDark ? colors.plumDeep : colors.white,
              fontWeight: 600,
              fontSize: "0.9rem",
              px: 2.4,
              minHeight: 46,
              borderRadius: radii.pill,
              boxShadow: onDark ? shadows.goldGlow : shadows.glow,
              transition: "transform 0.3s ease, background 0.4s ease, color 0.4s ease",
              "&:hover": { transform: "translateY(-1px)" },
              "&:hover svg": { transform: "translateX(3px)" },
              "& svg": { transition: "transform 0.3s ease" },
            }}
          >
            Partner With Us
            <ArrowRight size={16} aria-hidden="true" />
          </Box>
          <Box
            component="button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            sx={{
              display: { xs: "inline-flex", lg: "none" },
              alignItems: "center",
              justifyContent: "center",
              width: 46,
              height: 46,
              borderRadius: "50%",
              border: onDark ? "1px solid rgba(255,255,255,0.24)" : `1px solid ${colors.borderStrong}`,
              background: onDark ? "rgba(255,255,255,0.06)" : colors.paper,
              color: onDark ? colors.white : colors.ink,
              cursor: "pointer",
            }}
          >
            <Menu size={20} aria-hidden="true" />
          </Box>
        </Box>
      </Box>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </Box>
  );
}
