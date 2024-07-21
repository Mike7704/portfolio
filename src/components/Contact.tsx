"use client";
import { useRef } from "react";
import FormSubmitButton from "@/components/FormSubmitButton";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(formData: any) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <>
      <h1>Contact</h1>
      <div className="contact-container">
        <address className="contact-info">
          <p>
            <i className="bx bx-map" /> Liverpool, UK
          </p>
          <p>
            <i className="bx bx-phone" /> 07736323890
          </p>
          <p>
            <i className="bx bx-envelope" />
            <a href="mailto:Michael.cowley2001@gmail.com"> Michael.cowley2001@gmail.com</a>
          </p>
        </address>
        <form className="contact-form" ref={formRef} action={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
          <FormSubmitButton />
        </form>
      </div>
    </>
  );
}
