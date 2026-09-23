import Box from "@mui/material/Box";
import { siteConfig } from "../config/site.ts";
import { ContactForm, ContactInfo } from "../components/contact/ContactPanel.tsx";
import { Seo } from "../components/seo/Seo.tsx";
import { PageContainer } from "../components/ui/PageContainer.tsx";
import { PageHero } from "../components/ui/PageHero.tsx";

export default function ContactPage() {
  return (
    <>
      <Seo
        title={`Contact Us | ${siteConfig.shortName}`}
        description={`Contact ${siteConfig.companyName} about school books, stationery, uniforms and shoes.`}
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's Connect."
        subtitle="Have a question about our products or services? We'd be happy to hear from you."
      />
      <PageContainer wide>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.85fr 1.15fr" }, gap: 3, pb: 6, alignItems: "start" }}>
          <ContactInfo />
          <ContactForm />
        </Box>
      </PageContainer>
    </>
  );
}
