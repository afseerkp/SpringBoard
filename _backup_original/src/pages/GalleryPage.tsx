import { siteConfig } from "../config/site.ts";
import { GalleryExperience } from "../components/gallery/GalleryExperience.tsx";
import { Seo } from "../components/seo/Seo.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { PageHero } from "../components/ui/PageHero.tsx";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title={`Gallery | ${siteConfig.shortName}`}
        description={`Browse school books, stationery, uniforms, shoes and school-day scenes from ${siteConfig.shortName}.`}
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title="A look at the essentials."
        subtitle="Books, stationery, uniforms, shoes and the quiet details of a school day. These scenes can be replaced with photography whenever it is ready."
      />
      <PageContainer wide>
        <GalleryExperience />
      </PageContainer>
    </>
  );
}
