import Box from "@mui/material/Box";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, siteConfig } from "../../config/site.ts";
import { productCategories } from "../../config/products.ts";
import { colors, layout, radii, shadows } from "../../theme/tokens.ts";
import { MobileMenu } from "./MobileMenu.tsx";

function isActive(to: string, pathname: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);
  const menuId = useId();
  const closeTimer = useRef<number | null>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    closeTimer.current = window.setTimeout(() => setProductsOpen(false), 140);
  };

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        height: layout.header,
        display: "flex",
        alignItems: "center",
        background: scrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.42)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? `1px solid ${colors.border}` : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
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
        <Box component={Link} to="/" aria-label={`${siteConfig.shortName} home`} sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={siteConfig.logo}
            alt={siteConfig.shortName}
            width={siteConfig.logoWidth}
            height={siteConfig.logoHeight}
            sx={{ height: { xs: 46, md: 58 }, width: "auto" }}
          />
        </Box>

        <Box component="nav" aria-label="Primary" sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 0.5 }}>
          {navLinks.map((link) =>
            link.to === "/products" ? (
              <Box
                key={link.to}
                ref={productsRef}
                onMouseEnter={openProducts}
                onMouseLeave={scheduleClose}
                sx={{ position: "relative" }}
              >
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
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    border: 0,
                    background: isActive(link.to, pathname) ? colors.purpleSoft : "transparent",
                    color: isActive(link.to, pathname) ? colors.purple : colors.ink,
                    fontWeight: 650,
                    fontSize: "0.96rem",
                    px: 1.6,
                    py: 1,
                    borderRadius: radii.pill,
                    cursor: "pointer",
                  }}
                >
                  Products
                  <ChevronDown size={16} aria-hidden="true" />
                </Box>
                {productsOpen ? (
                  <Box
                    id={menuId}
                    role="menu"
                    sx={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 340,
                      p: 1,
                      borderRadius: radii.md,
                      background: "rgba(255,255,255,0.94)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.8)",
                      boxShadow: shadows.lift,
                    }}
                  >
                    <Box
                      component={Link}
                      to="/products"
                      role="menuitem"
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        color: colors.ink,
                        borderRadius: radii.sm,
                        px: 1.6,
                        py: 1.3,
                        "&:hover": { background: colors.purpleSoft },
                      }}
                    >
                      <Box sx={{ fontWeight: 700 }}>All products</Box>
                      <Box sx={{ color: colors.muted, fontSize: "0.88rem", mt: 0.3 }}>Books, stationery, uniforms and shoes</Box>
                    </Box>
                    {productCategories.map((category) => (
                      <Box
                        key={category.slug}
                        component={Link}
                        to={`/products/${category.slug}`}
                        role="menuitem"
                        sx={{
                          display: "block",
                          textDecoration: "none",
                          color: colors.ink,
                          borderRadius: radii.sm,
                          px: 1.6,
                          py: 1.3,
                          "&:hover": { background: colors.purpleSoft },
                        }}
                      >
                        <Box sx={{ fontWeight: 700 }}>{category.menuLabel}</Box>
                        <Box sx={{ color: colors.muted, fontSize: "0.88rem", mt: 0.3 }}>{category.menuDescription}</Box>
                      </Box>
                    ))}
                  </Box>
                ) : null}
              </Box>
            ) : (
              <Box
                key={link.to}
                component={Link}
                to={link.to}
                aria-current={isActive(link.to, pathname) ? "page" : undefined}
                sx={{
                  textDecoration: "none",
                  color: isActive(link.to, pathname) ? colors.purple : colors.ink,
                  background: isActive(link.to, pathname) ? colors.purpleSoft : "transparent",
                  fontWeight: 650,
                  fontSize: "0.96rem",
                  px: 1.6,
                  py: 1,
                  borderRadius: radii.pill,
                }}
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
              textDecoration: "none",
              background: `linear-gradient(135deg, ${colors.purple}, ${colors.purpleMid})`,
              color: colors.white,
              fontWeight: 700,
              px: 2.2,
              minHeight: 44,
              borderRadius: radii.pill,
              boxShadow: shadows.glow,
            }}
          >
            Get in Touch
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
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: `1px solid ${colors.border}`,
              background: colors.white,
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
