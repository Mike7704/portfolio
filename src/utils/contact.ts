import { sendEmail } from "@/api/nodemailer";

export async function sendMessage(formData: any, formRef: any) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const response = await sendEmail({ name, email, message });

    if (response.ok) {
      console.log("Email sent successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
    } else {
      console.error("Error sending email");
    }
  } catch (error) {
    console.error(error);
  }
}
