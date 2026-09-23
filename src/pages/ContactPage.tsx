import Box from "@mui/material/Box";
import { siteConfig } from "../config/site.ts";
import { ContactForm, ContactInfo, OfficeList } from "../components/contact/ContactPanel.tsx";
import { Seo } from "../components/seo/Seo.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { PageHero } from "../components/ui/PageHero.tsx";
import { Accent } from "../components/ui/SectionHeading.tsx";
import { colors } from "../theme/tokens.ts";

export default function ContactPage() {
  return (
    <>
      <Seo
        title={`Contact Us | ${siteConfig.groupName}`}
        description={`Contact ${siteConfig.companyName} about textbooks, notebooks and educational supplies for your school.`}
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build something <Accent light>lasting together.</Accent>
          </>
        }
        subtitle="Whether you're planning for the next academic year or need an urgent requirement fulfilled, our team is ready to help."
      />
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, background: colors.ivory }}>
        <PageContainer wide>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.85fr 1.15fr" }, gap: { xs: 4, lg: 6 }, alignItems: "start" }}>
            <ContactInfo />
            <ContactForm />
          </Box>
          <OfficeList />
        </PageContainer>
      </Box>
    </>
  );
}
