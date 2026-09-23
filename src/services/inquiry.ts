export type InquiryPayload = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type InquiryResult = { ok: true } | { ok: false; message: string };

/**
 * Sends a contact inquiry.
 * Replace the body of this function with an email or API integration.
 * The form already handles success and failure states.
 */
export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!payload.fullName.trim() || !payload.email.trim() || !payload.message.trim()) {
    return { ok: false, message: "Please complete the required fields and try again." };
  }

  return { ok: true };
}
