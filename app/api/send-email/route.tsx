import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "info@ehsansafari.it",
    to: "ehsansafari@hotmail.com",
    subject: "Hello Essi!",
    react: <WelcomeTemplate name="Ehsan" />,
  });
  return NextResponse.json({});
}
