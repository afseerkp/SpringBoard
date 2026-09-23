import { siteConfig } from "../config/site.ts";
import { CategoryShowcase } from "../components/home/CategoryShowcase.tsx";
import { HeroSection } from "../components/home/HeroSection.tsx";
import { IntroSection } from "../components/home/IntroSection.tsx";
import { StorySections } from "../components/home/StorySections.tsx";
import { ValueSections } from "../components/home/ValueSections.tsx";
import { Seo } from "../components/seo/Seo.tsx";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    logo: siteConfig.logo,
  };

  return (
    <>
      <Seo
        title={`School Books, Stationery, Uniforms & Shoes | ${siteConfig.shortName}`}
        description={`Explore quality school books, stationery, uniforms and school shoes from ${siteConfig.shortName}.`}
        path="/"
      />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <HeroSection />
      <IntroSection />
      <CategoryShowcase />
      <StorySections />
      <ValueSections />
    </>
  );
}
