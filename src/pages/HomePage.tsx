import { siteConfig } from "../config/site.ts";
import { CategoryShowcase } from "../components/home/CategoryShowcase.tsx";
import { HeroSection } from "../components/home/HeroSection.tsx";
import { GroupStrip, IntroSection } from "../components/home/IntroSection.tsx";
import { ClientsSection, SolutionsSection } from "../components/home/StorySections.tsx";
import { StrengthsSection, VisionSection } from "../components/home/ValueSections.tsx";
import { Seo } from "../components/seo/Seo.tsx";
import { CatalogueDownload } from "../components/ui/CatalogueDownload.tsx";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    alternateName: siteConfig.groupName,
    description: siteConfig.description,
    logo: siteConfig.logo,
    address: { "@type": "PostalAddress", addressLocality: "Ajman", addressCountry: "AE" },
  };

  return (
    <>
      <Seo
        title={`${siteConfig.groupName} | Educational School Supplies, UAE`}
        description={siteConfig.description}
        path="/"
      />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <HeroSection />
      <GroupStrip />
      <IntroSection />
      <SolutionsSection />
      <CategoryShowcase />
      <CatalogueDownload />
      <StrengthsSection />
      <ClientsSection />
      <VisionSection />
    </>
  );
}
