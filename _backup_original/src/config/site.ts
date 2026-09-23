export type SocialLink = {
  label: string;
  href: string;
};

/**
 * Company details live here so the public site can be updated in one place.
 * Contact values are placeholders until the business supplies them.
 */
export const siteConfig = {
  companyName: "SPRINGBOARD EDUCATIONAL SCHOOL SUPPLIES LLC",
  shortName: "SPRINGBOARD",
  tagline: "Everything students need for a better school day.",
  description:
    "Explore quality school books, stationery, uniforms and school shoes from SPRINGBOARD.",
  logo: "/brand/logo.png",
  logoWidth: 1024,
  logoHeight: 455,
  phone: "PHONE_NUMBER",
  email: "EMAIL_ADDRESS",
  address: "BUSINESS_ADDRESS",
  workingHours: "WORKING_HOURS",
  socialLinks: [] as SocialLink[],
  about: {
    who: "SPRINGBOARD EDUCATIONAL SCHOOL SUPPLIES LLC prepares the everyday essentials students carry into a school day. The range brings books, stationery, uniforms and footwear together with a clear standard of quality and consistency.",
    purpose:
      "A school day runs more smoothly when the essentials are ready. We focus on products that are practical, dependable and comfortable to use, from the first lesson to the last.",
    commitment:
      "We pay attention to the details students actually feel: paper that is pleasant to write on, stationery that holds up to daily use, uniforms that are comfortable to wear, and footwear made for a full day on their feet.",
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;
