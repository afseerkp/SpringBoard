import Box from "@mui/material/Box";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { siteConfig } from "../../config/site.ts";
import { submitInquiry } from "../../services/inquiry.ts";
import { colors, radii, shadows } from "../../theme/tokens.ts";
import { ActionButton } from "../ui/ActionButton.tsx";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const emptyForm: FormState = { fullName: "", email: "", phone: "", subject: "", message: "" };

type Errors = Partial<Record<keyof FormState, string>>;

const fields: Array<{ name: keyof FormState; label: string; type?: string; required?: boolean; multiline?: boolean }> = [
  { name: "fullName", label: "Full Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "subject", label: "Subject" },
  { name: "message", label: "Message", required: true, multiline: true },
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

  if (status === "success") {
    return (
      <Box role="status" sx={{ p: { xs: 3, md: 4 }, borderRadius: radii.xl, background: colors.white, boxShadow: shadows.card }}>
        <Box component="h2" sx={{ m: 0, fontSize: "1.8rem", letterSpacing: "-0.03em" }}>Thank you. Your inquiry has been received.</Box>
        <Box component="p" sx={{ color: colors.muted, lineHeight: 1.7 }}>We will use the details you shared to respond.</Box>
        <Box component="button" type="button" onClick={() => setStatus("idle")} sx={{ border: 0, background: colors.purpleSoft, color: colors.purple, fontWeight: 700, borderRadius: radii.pill, px: 2.2, py: 1.2, cursor: "pointer" }}>
          Send another inquiry
        </Box>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ p: { xs: 2.5, md: 4 }, borderRadius: radii.xl, background: colors.white, boxShadow: shadows.card, display: "grid", gap: 2 }}>
      {fields.map((field) => {
        const id = `inquiry-${field.name}`;
        const error = errors[field.name];
        const shared = {
          id,
          name: field.name,
          value: values[field.name],
          required: field.required,
          "aria-invalid": Boolean(error),
          "aria-describedby": error ? `${id}-error` : undefined,
          onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const value = event.target.value;
            setValues((current) => ({ ...current, [field.name]: value }));
          },
        };
        return (
          <Box key={field.name}>
            <Box component="label" htmlFor={id} sx={{ display: "block", fontWeight: 700, mb: 0.8 }}>
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
                borderRadius: radii.sm,
                border: `1px solid ${error ? "#C4373A" : colors.border}`,
                background: colors.mist,
                px: 1.6,
                py: 1.4,
                font: "inherit",
                resize: "vertical",
                outline: "none",
                "&:focus": { boxShadow: `0 0 0 4px rgba(159,51,126,0.15)`, borderColor: colors.purple, background: colors.white },
              }}
            />
            {error ? (
              <Box id={`${id}-error`} sx={{ color: "#9E2C30", mt: 0.6, fontSize: "0.9rem" }}>
                {error}
              </Box>
            ) : null}
          </Box>
        );
      })}
      {status === "error" ? (
        <Box role="alert" sx={{ color: "#9E2C30" }}>
          We could not send your inquiry. Please try again.
        </Box>
      ) : null}
      <Box>
        <ActionButton type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </ActionButton>
      </Box>
    </Box>
  );
}

const info = [
  { label: "Phone", value: siteConfig.phone, icon: Phone },
  { label: "Email", value: siteConfig.email, icon: Mail },
  { label: "Location", value: siteConfig.address, icon: MapPin },
  { label: "Working Hours", value: siteConfig.workingHours, icon: Clock },
];

export function ContactInfo() {
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      {info.map((item) => {
        const Icon = item.icon;
        return (
          <Box key={item.label} sx={{ p: 2.4, borderRadius: radii.lg, background: "rgba(255,255,255,0.8)", border: `1px solid ${colors.border}`, boxShadow: shadows.soft, display: "flex", gap: 1.6 }}>
            <Box sx={{ width: 44, height: 44, borderRadius: "14px", display: "grid", placeItems: "center", background: colors.purpleSoft, color: colors.purple, flex: "none" }}>
              <Icon size={20} aria-hidden="true" />
            </Box>
            <Box>
              <Box sx={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.purple }}>{item.label}</Box>
              <Box sx={{ mt: 0.4, fontWeight: 650, lineHeight: 1.5 }}>{item.value}</Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
