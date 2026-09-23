import Box from "@mui/material/Box";
import { siteConfig } from "../config/site.ts";
import { GalleryExperience } from "../components/gallery/GalleryExperience.tsx";
import { Seo } from "../components/seo/Seo.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { PageHero } from "../components/ui/PageHero.tsx";
import { Accent } from "../components/ui/SectionHeading.tsx";
import { colors } from "../theme/tokens.ts";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title={`Gallery | ${siteConfig.groupName}`}
        description={`Browse school books, stationery, uniforms, shoes and school-day scenes from ${siteConfig.shortName}.`}
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            A closer look at <Accent light>the essentials.</Accent>
          </>
        }
        subtitle="Books, stationery, uniforms, shoes and the quiet details of a school day."
      />
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, background: colors.ivory }}>
        <PageContainer wide>
          <GalleryExperience />
        </PageContainer>
      </Box>
    </>
  );
}
