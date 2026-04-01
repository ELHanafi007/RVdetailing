"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuote(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const rvType = formData.get("rvType") as string;
  const length = formData.get("length") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;
  const estimate = formData.get("estimate") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: "sunshineRVshine <onboarding@resend.dev>",
      to: ["elhanafiabbaali@gmail.com"], 
      subject: `New Quote Request from ${name}`,
      html: `
        <h1>New Quote Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>RV Type:</strong> ${rvType}</p>
        <p><strong>RV Length:</strong> ${length} ft</p>
        <p><strong>Interested Service:</strong> ${service}</p>
        ${estimate ? `<p><strong>Pre-calculated Estimate:</strong> $${estimate}</p>` : ""}
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Submission Catch Error:", error);
    return { success: false, error: error.message || "Unknown error" };
  }
}
