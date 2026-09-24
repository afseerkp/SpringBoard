import Box from "@mui/material/Box";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { catalogues, groupCompanies, navLinks, offices, siteConfig } from "../../config/site.ts";
import { productCategories } from "../../config/products.ts";
import { colors, fontDisplay, gradients, layout } from "../../theme/tokens.ts";
import { ActionButton } from "../ui/ActionButton.tsx";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      component="footer"
      className="sb-grain"
      sx={{ position: "relative", overflow: "hidden", background: gradients.plum, color: colors.white }}
    >
      {/* CTA band */}
      <Box sx={{ position: "relative", zIndex: 1, width: `min(100% - 40px, ${layout.wide}px)`, mx: "auto", pt: { xs: 8, md: 12 }, pb: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.4fr 0.6fr" },
            gap: { xs: 4, lg: 6 },
            alignItems: "end",
          }}
        >
          <Box>
            <Box sx={{ color: colors.champagne, fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", mb: 2.5 }}>
              {siteConfig.motto}
            </Box>
            <Box
              component="p"
              sx={{
                m: 0,
                fontFamily: fontDisplay,
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                maxWidth: 820,
              }}
            >
              Let's plan your school's next{" "}
              <Box component="em" sx={{ fontStyle: "italic", color: colors.champagne }}>
                academic year
              </Box>{" "}
              together.
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: { lg: "flex-end" } }}>
            <ActionButton to="/contact" variant="gold" size="lg">
              Start a Conversation
            </ActionButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, borderTop: `1px solid ${colors.plumLine}` }}>
        <Box
          sx={{
            width: `min(100% - 40px, ${layout.wide}px)`,
            mx: "auto",
            py: { xs: 6, md: 8 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1.5fr 0.8fr 0.9fr 1.4fr" },
            gap: { xs: 5, lg: 6 },
          }}
        >
          <Box>
            <Box component={Link} to="/" aria-label={`${siteConfig.shortName} home`} sx={{ display: "inline-block" }}>
              <Box
                component="img"
                src={siteConfig.logoLight}
                alt=""
                width={siteConfig.logoWidth}
                height={siteConfig.logoHeight}
                sx={{ height: 52, width: "auto" }}
              />
            </Box>
            <Box component="p" sx={{ m: 0, mt: 3, maxWidth: 340, color: colors.onDark, lineHeight: 1.75, fontSize: "0.95rem" }}>
              Connecting publishers, schools and students through quality educational solutions.
            </Box>
            <Box sx={{ mt: 3, display: "grid", gap: 0.8 }}>
              {groupCompanies.slice(1).map((company) => (
                <Box key={company.name} sx={{ display: "flex", alignItems: "center", gap: 1.2, color: colors.onDarkSubtle, fontSize: "0.85rem" }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: colors.champagne, flex: "none" }} />
                  {company.name}
                </Box>
              ))}
            </Box>
          </Box>
          <FooterColumn title="Explore">
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
            <Box
              component="a"
              href={catalogues.shoes.file}
              download={catalogues.shoes.fileName}
              sx={{ display: "inline-flex", alignItems: "center", gap: 0.8, color: colors.champagne, textDecoration: "none", fontSize: "0.95rem", width: "fit-content", "&:hover": { color: colors.white } }}
            >
              <Download size={14} aria-hidden="true" />
              Shoe Catalogue (PDF)
            </Box>
          </FooterColumn>
          <FooterColumn title="Our Offices">
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2.5 }}>
              {offices.map((office) => (
                <Box key={office.city}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, color: colors.white, fontWeight: 600, fontSize: "0.92rem" }}>
                    <MapPin size={14} color={colors.champagne} aria-hidden="true" />
                    {office.city}
                  </Box>
                  <Box sx={{ mt: 0.6, color: colors.onDarkSubtle, fontSize: "0.82rem", lineHeight: 1.6 }}>
                    {office.region === "UAE" ? "Head office, UAE" : office.lines[office.lines.length - 1]}
                  </Box>
                </Box>
              ))}
            </Box>
          </FooterColumn>
        </Box>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, borderTop: `1px solid ${colors.plumLine}` }}>
        <Box
          sx={{
            width: `min(100% - 40px, ${layout.wide}px)`,
            mx: "auto",
            py: 3,
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
            color: colors.onDarkSubtle,
            fontSize: "0.84rem",
          }}
        >
          <Box>
            © {year} {siteConfig.companyName}, {siteConfig.location}. All rights reserved.
          </Box>
          <Box>{siteConfig.groupName}</Box>
        </Box>
      </Box>
    </Box>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box>
      <Box
        component="h2"
        sx={{ m: 0, mb: 2.5, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: colors.champagne }}
      >
        {title}
      </Box>
      <Box sx={{ display: "grid", gap: 1.3 }}>{children}</Box>
    </Box>
  );
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Box
      component={Link}
      to={to}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.6,
        color: colors.onDark,
        textDecoration: "none",
        fontSize: "0.95rem",
        width: "fit-content",
        transition: "color 0.25s ease",
        "& svg": { opacity: 0, transform: "translate(-4px, 4px)", transition: "all 0.3s ease" },
        "&:hover": { color: colors.white },
        "&:hover svg": { opacity: 1, transform: "none" },
      }}
    >
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
    </Box>
  );
}
