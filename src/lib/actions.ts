'use server';

import { contactFormSchema } from "@/lib/schemas";
import { z } from "zod";

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
        return { success: false, error: "Invalid form data" };
    }

    // Simulate usage of data
    const { name, email, message } = result.data;
    console.log(`Received message from ${name} (${email}): ${message}`);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Integrate with SendGrid/Resend or Supabase here

    return { success: true, message: "Message sent successfully!" };
}
