import Box from "@mui/material/Box";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { offices, siteConfig } from "../../config/site.ts";
import { submitInquiry } from "../../services/inquiry.ts";
import { colors, fontDisplay, gradients, radii, shadows } from "../../theme/tokens.ts";
import { ActionButton } from "../ui/ActionButton.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { Eyebrow } from "../ui/SectionHeading.tsx";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const emptyForm: FormState = { fullName: "", email: "", phone: "", subject: "", message: "" };

type Errors = Partial<Record<keyof FormState, string>>;

const fields: Array<{ name: keyof FormState; label: string; type?: string; required?: boolean; multiline?: boolean; half?: boolean; placeholder?: string }> = [
  { name: "fullName", label: "Full name", required: true, half: true, placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", required: true, half: true, placeholder: "you@school.edu" },
  { name: "phone", label: "Phone", type: "tel", half: true, placeholder: "+971" },
  { name: "subject", label: "School / Subject", half: true, placeholder: "School name or topic" },
  { name: "message", label: "How can we help?", required: true, multiline: true, placeholder: "Tell us about your requirements…" },
];

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.message.trim()) errors.message = "Please tell us how we can help.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus("sending");
    try {
      const result = await submitInquiry(values);
      if (!result.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setValues(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  const card = {
    p: { xs: 3, md: 5 },
    borderRadius: radii.xl,
    background: colors.paper,
    border: `1px solid ${colors.border}`,
    boxShadow: shadows.card,
  };

  if (status === "success") {
    return (
      <Box role="status" sx={{ ...card, textAlign: "center", py: { xs: 6, md: 10 } }}>
        <Box sx={{ display: "inline-grid", placeItems: "center", width: 72, height: 72, borderRadius: "50%", background: gradients.brand, color: colors.white }}>
          <CheckCircle2 size={32} aria-hidden="true" />
        </Box>
        <Box component="h2" sx={{ m: 0, mt: 3, fontFamily: fontDisplay, fontWeight: 400, fontSize: "2.2rem", letterSpacing: "-0.02em" }}>
          Thank you — we've received your inquiry.
        </Box>
        <Box component="p" sx={{ color: colors.muted, lineHeight: 1.7, maxWidth: 420, mx: "auto" }}>
          A member of our team will respond using the details you shared.
        </Box>
        <Box sx={{ mt: 2 }}>
          <ActionButton variant="secondary" onClick={() => setStatus("idle")}>
            Send another inquiry
          </ActionButton>
        </Box>
      </Box>
    );
  }

  return (
    <Reveal delay={0.1}>
      <Box component="form" onSubmit={onSubmit} noValidate sx={card}>
        <Eyebrow>Send an inquiry</Eyebrow>
        <Box component="h2" sx={{ m: 0, mb: 4, fontFamily: fontDisplay, fontWeight: 400, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
          Tell us about your school's requirements.
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, columnGap: 2.5, rowGap: 3 }}>
          {fields.map((field) => {
            const id = `inquiry-${field.name}`;
            const error = errors[field.name];
            const shared = {
              id,
              name: field.name,
              value: values[field.name],
              required: field.required,
              placeholder: field.placeholder,
              "aria-invalid": Boolean(error),
              "aria-describedby": error ? `${id}-error` : undefined,
              onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const value = event.target.value;
                setValues((current) => ({ ...current, [field.name]: value }));
              },
            };
            return (
              <Box key={field.name} sx={{ gridColumn: { sm: field.half ? "auto" : "1 / -1" } }}>
                <Box
                  component="label"
                  htmlFor={id}
                  sx={{ display: "block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: colors.muted, mb: 1 }}
                >
                  {field.label}
                  {field.required ? <Box component="span" sx={{ color: colors.purple }}> *</Box> : null}
                </Box>
                <Box
                  component={field.multiline ? "textarea" : "input"}
                  {...shared}
                  type={field.multiline ? undefined : field.type ?? "text"}
                  rows={field.multiline ? 5 : undefined}
                  sx={{
                    width: "100%",
                    border: 0,
                    borderBottom: `1px solid ${error ? "#C4373A" : colors.borderStrong}`,
                    background: "transparent",
                    px: 0,
                    py: 1.2,
                    font: "inherit",
                    fontSize: "1.02rem",
                    color: colors.ink,
                    resize: "vertical",
                    outline: "none",
                    borderRadius: 0,
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    "&::placeholder": { color: colors.subtle, opacity: 0.8 },
                    "&:focus": { borderColor: colors.purple, boxShadow: `0 1px 0 0 ${colors.purple}` },
                  }}
                />
                {error ? (
                  <Box id={`${id}-error`} sx={{ color: "#9E2C30", mt: 0.8, fontSize: "0.85rem" }}>
                    {error}
                  </Box>
                ) : null}
              </Box>
            );
          })}
        </Box>
        {status === "error" ? (
          <Box role="alert" sx={{ color: "#9E2C30", mt: 3 }}>
            We could not send your inquiry. Please try again.
          </Box>
        ) : null}
        <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ color: colors.subtle, fontSize: "0.85rem" }}>We usually respond within one business day.</Box>
          <ActionButton type="submit" disabled={status === "sending"} size="lg">
            {status === "sending" ? "Sending…" : "Send Inquiry"}
          </ActionButton>
        </Box>
      </Box>
    </Reveal>
  );
}

const info = [
  { label: "Phone", value: siteConfig.phone, icon: Phone },
  { label: "Email", value: siteConfig.email, icon: Mail },
  { label: "Head office", value: siteConfig.address, icon: MapPin },
  { label: "Working hours", value: siteConfig.workingHours, icon: Clock },
];

export function ContactInfo() {
  return (
    <Reveal>
      <Box
        className="sb-grain"
        sx={{
          position: "relative",
          overflow: "hidden",
          p: { xs: 3, md: 5 },
          borderRadius: radii.xl,
          background: gradients.plum,
          color: colors.white,
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Eyebrow light>Get in touch</Eyebrow>
          <Box component="h2" sx={{ m: 0, fontFamily: fontDisplay, fontWeight: 400, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            {siteConfig.companyName}
          </Box>
          <Box component="p" sx={{ m: 0, mt: 2, color: colors.onDark, lineHeight: 1.7 }}>
            Our UAE team supports schools across the Middle East and Africa.
          </Box>
          <Box sx={{ mt: 4, display: "grid" }}>
            {info.map((item) => {
              const Icon = item.icon;
              return (
                <Box key={item.label} sx={{ display: "flex", gap: 2, alignItems: "center", py: 2.2, borderTop: `1px solid ${colors.plumLine}` }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid rgba(228,188,122,0.3)",
                      color: colors.champagne,
                      flex: "none",
                    }}
                  >
                    <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                  </Box>
                  <Box>
                    <Box sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: colors.onDarkSubtle }}>{item.label}</Box>
                    <Box sx={{ mt: 0.4, fontWeight: 500, lineHeight: 1.5 }}>{item.value}</Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Reveal>
  );
}

export function OfficeList() {
  return (
    <Box sx={{ mt: { xs: 6, md: 8 } }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: colors.purple }}>India operations</Box>
        <Box sx={{ flex: 1, height: "1px", background: colors.border }} />
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
        {offices
          .filter((office) => office.region === "India")
          .map((office, index) => (
            <Reveal key={office.city} delay={index * 0.08} style={{ height: "100%" }}>
              <Box sx={{ height: "100%", p: 3, borderRadius: radii.lg, background: colors.paper, border: `1px solid ${colors.border}` }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontFamily: fontDisplay, fontSize: "1.4rem" }}>
                  <MapPin size={16} color={colors.champagne} aria-hidden="true" />
                  {office.city}
                </Box>
                <Box sx={{ mt: 1.2, color: colors.muted, lineHeight: 1.7, fontSize: "0.93rem" }}>
                  {office.lines.map((line) => (
                    <Box key={line}>{line}</Box>
                  ))}
                </Box>
              </Box>
            </Reveal>
          ))}
      </Box>
    </Box>
  );
}
