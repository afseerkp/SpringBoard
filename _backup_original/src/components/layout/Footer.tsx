import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { navLinks, siteConfig } from "../../config/site.ts";
import { productCategories } from "../../config/products.ts";
import { colors, layout, radii } from "../../theme/tokens.ts";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ mt: { xs: 8, md: 10 }, background: colors.plum, color: colors.white }}>
      <Box
        sx={{
          width: `min(100% - 40px, ${layout.wide}px)`,
          mx: "auto",
          py: { xs: 6, md: 8 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr 1fr 1fr" },
          gap: 4,
        }}
      >
        <Box>
          <Box component={Link} to="/" aria-label={`${siteConfig.shortName} home`}>
            <Box
              component="img"
              src={siteConfig.logo}
              alt=""
              width={siteConfig.logoWidth}
              height={siteConfig.logoHeight}
              sx={{ height: 64, width: "auto", background: colors.white, borderRadius: radii.sm, px: 1.2, py: 0.6 }}
            />
          </Box>
          <Box component="p" sx={{ m: 0, mt: 2.5, maxWidth: 340, color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
            School books, stationery, uniforms and footwear, selected with care for everyday learning.
          </Box>
          {siteConfig.socialLinks.length > 0 ? (
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              {siteConfig.socialLinks.map((link) => (
                <Box
                  key={link.href}
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    textDecoration: "none",
                    color: colors.white,
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontWeight: 700,
                  }}
                >
                  {link.label.slice(0, 1)}
                </Box>
              ))}
            </Box>
          ) : null}
        </Box>
        <FooterColumn title="Quick Links">
          {navLinks.map((link) => (
            <FooterLink key={link.to} to={link.to}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>
        <FooterColumn title="Products">
          {productCategories.map((category) => (
            <FooterLink key={category.slug} to={`/products/${category.slug}`}>
              {category.name}
            </FooterLink>
          ))}
        </FooterColumn>
        <FooterColumn title="Contact">
          <FooterText>{siteConfig.phone}</FooterText>
          <FooterText>{siteConfig.email}</FooterText>
          <FooterText>{siteConfig.address}</FooterText>
          <FooterText>{siteConfig.workingHours}</FooterText>
        </FooterColumn>
      </Box>
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", py: 2.5, textAlign: "center", color: "rgba(255,255,255,0.62)", fontSize: "0.92rem" }}>
        © {year} {siteConfig.companyName}. All rights reserved.
      </Box>
    </Box>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box>
      <Box component="h2" sx={{ m: 0, mb: 2, fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {title}
      </Box>
      <Box sx={{ display: "grid", gap: 1.1 }}>{children}</Box>
    </Box>
  );
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Box component={Link} to={to} sx={{ color: "rgba(255,255,255,0.76)", textDecoration: "none", "&:hover": { color: colors.gold } }}>
      {children}
    </Box>
  );
}

function FooterText({ children }: { children: ReactNode }) {
  return <Box sx={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.6 }}>{children}</Box>;
}
