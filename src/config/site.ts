import { asset } from "../lib/asset.ts";

export type SocialLink = {
  label: string;
  href: string;
};

/**
 * Company details live here so the public site can be updated in one place.
 * Contact values marked as placeholders should be replaced before launch.
 */
export const siteConfig = {
  groupName: "SpringBoard Group of Companies",
  companyName: "SpringBoard Educational School Supplies LLC",
  shortName: "SpringBoard",
  location: "Ajman, United Arab Emirates",
  tagline: "Empowering Education Through Quality, Reach & Reliability",
  motto: "Quality. Reach. Reliability.",
  description:
    "SpringBoard Educational School Supplies LLC, Ajman — a trusted education supply partner for IGCSE and CBSE schools across the Middle East and Africa.",
  logo: asset("/brand/logo-transparent.png"),
  logoLight: asset("/brand/logo-light.png"),
  logoWidth: 944,
  logoHeight: 335,
  phone: "PHONE_NUMBER",
  email: "EMAIL_ADDRESS",
  address: "Ajman, United Arab Emirates",
  workingHours: "WORKING_HOURS",
  socialLinks: [] as SocialLink[],
} as const;

/** Company profile content (Option 2). */
export const profile = {
  about: [
    "SpringBoard Educational School Supplies LLC, Ajman, is an established name in the field of educational material distribution and school services, with a strong presence across the UAE and an extensive network in India.",
    "Since its establishment, SpringBoard has evolved into a trusted partner for educational institutions, delivering quality-driven solutions with a strong emphasis on service excellence, reliability and client satisfaction.",
    "With a team of more than 100 skilled professionals across the Group, SpringBoard brings together expertise across educational supplies, publishing, distribution and allied services.",
  ],
  reach:
    "Today, SpringBoard serves the educational community across the Middle East and Africa, supplying textbooks, notebooks and educational materials to leading IGCSE and CBSE schools.",
  legacy: [
    "SpringBoard's strength is built on a robust Indian network supported by more than five decades of experience in publishing and distribution.",
    "This extensive industry experience, combined with an established distribution network across India, enables the Group to understand the evolving needs of schools, educators and students and respond with efficiency and consistency.",
    "Over the years, SpringBoard has earned considerable goodwill through its commitment to timely delivery, dependable service and long-term client relationships.",
  ],
  philosophy: [
    { title: "Understand the requirement.", text: "Every institution is different. We start by listening to what each school actually needs." },
    { title: "Deliver with precision.", text: "The right materials, in the right quantities, at the right time — every academic year." },
    { title: "Build lasting relationships.", text: "Long-term partnerships with schools, publishers and partners are the heart of our work." },
  ],
  solutions: {
    intro: "At SpringBoard, our capabilities extend beyond distribution.",
    closing:
      "This integrated approach allows SpringBoard to offer its clients greater convenience, responsiveness and consistency across their educational supply requirements.",
    items: [
      {
        key: "distribution",
        title: "Educational Distribution",
        text: "Textbooks, notebooks and educational materials supplied to leading IGCSE and CBSE schools across the Middle East and Africa.",
      },
      {
        key: "team",
        title: "Dedicated UAE Team",
        text: "Our UAE operations are supported by skilled professionals across operations and marketing, responding efficiently to institutional requirements.",
      },
      {
        key: "partners",
        title: "Overseas Partnerships",
        text: "Established partnerships with overseas organisations position us to address immediate and urgent requirements with efficiency.",
      },
      {
        key: "manufacturing",
        title: "Notebook Manufacturing",
        text: "Our integrated notebook manufacturing facility brings multiple requirements together under one roof.",
      },
    ],
  },
  strengths: [
    {
      key: "experience",
      title: "Industry Experience",
      text: "More than five decades of publishing and distribution experience within our Indian network.",
    },
    {
      key: "reach",
      title: "Regional Reach",
      text: "Established operations serving educational institutions across the Middle East and Africa.",
    },
    {
      key: "integrated",
      title: "Integrated Capabilities",
      text: "Educational material distribution supported by notebook manufacturing and allied services.",
    },
    {
      key: "team",
      title: "Professional Team",
      text: "A workforce of more than 100 skilled professionals across the Group.",
    },
    {
      key: "service",
      title: "Service Excellence",
      text: "A consistent focus on timely delivery, responsiveness and client satisfaction.",
    },
    {
      key: "relationships",
      title: "Strong Relationships",
      text: "Long-standing relationships with schools, publishers, distributors and overseas partners.",
    },
  ],
  vision:
    "To build a respected and dependable educational supply network that connects publishers, schools and students through quality products, efficient distribution and responsive service.",
  commitment: [
    "At SpringBoard, we believe that educational supplies are more than products — they are an essential part of the learning ecosystem.",
    "Our commitment is to support schools and educational institutions with quality, reliability and service excellence, while continuously strengthening our capabilities to meet the changing requirements of the education sector.",
  ],
  closingLine: "Building stronger connections across the education ecosystem.",
} as const;

export const stats = [
  { value: 50, suffix: "+", label: "Years of publishing & distribution experience" },
  { value: 100, suffix: "+", label: "Skilled professionals across the Group" },
  { value: 4, label: "Offices across the UAE and India" },
  { value: 0, text: "ME & Africa", label: "Schools served across the Middle East and Africa" },
] as const;

export const groupCompanies = [
  {
    name: "SpringBoard Educational School Supplies LLC",
    location: "Ajman, UAE",
    role: "Educational material distribution & school services",
    flagship: true,
  },
  {
    name: "Jeevandeep Edumedia Pvt. Ltd.",
    location: "Mumbai, India",
    role: "Publishing & educational media",
  },
  {
    name: "Periwinkle Books",
    location: "Group company",
    role: "Educational publishing",
  },
  {
    name: "Sreekrish Global Ventures Pvt. Ltd.",
    location: "Bangalore, India",
    role: "Distribution & allied services",
  },
] as const;

export const clients = [
  { name: "Alameer School", location: "Ajman", board: "CBSE" },
  { name: "JSSPS", location: "Dubai", board: "CBSE" },
] as const;

export const curricula = ["IGCSE", "CBSE"] as const;

export const offices = [
  {
    region: "UAE",
    city: "Ajman",
    title: "SpringBoard Educational School Supplies LLC",
    lines: ["Ajman, United Arab Emirates"],
    headquarters: true,
  },
  {
    region: "India",
    city: "Mumbai",
    title: "Mumbai",
    lines: ["1st Floor, Sun Paradise,", "Lower Parel, Mumbai"],
  },
  {
    region: "India",
    city: "Bangalore",
    title: "Bangalore",
    lines: ["No. 549, 9th Main, 2nd Block,", "Near Vijaya Bank, Rajajinagar,", "Bangalore, Karnataka – 560 010"],
  },
  {
    region: "India",
    city: "New Delhi",
    title: "New Delhi",
    lines: ["St. Peters Group of Institutions,", "Faridabad, New Delhi"],
  },
] as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

/** Downloadable PDF catalogues. Put the PDF in public/catalogues and list it here. */
export const catalogues = {
  shoes: {
    title: "School Shoes Catalogue",
    description: "Our complete brand-wise school footwear range — iD, Paragon School World and Puma — in one catalogue.",
    file: asset("/catalogues/springboard-school-shoes-catalogue.pdf"),
    fileName: "SpringBoard-School-Shoes-Catalogue.pdf",
    cover: asset("/images/catalogue-shoes-cover.webp"),
    preview: asset("/images/catalogue-shoes-page.webp"),
    brands: ["iD", "Paragon", "Puma"],
    pages: 24,
    size: "13.8 MB",
  },
} as const;
