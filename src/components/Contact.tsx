"use client";
import { useRef } from "react";
import FormSubmitButton from "@/components/FormSubmitButton";
import { sendMessage } from "@/utils/contact";
import styles from "@/styles/contact.module.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: any) {
    await sendMessage(formData, formRef);
  }

  return (
    <section className="section">
      <h2>Contact</h2>
      <div className={styles.contactContainer}>
        <div className={styles.infoContainer}>
          <address className={styles.contactInfo}>
            <p>
              <i className="bx bx-map" />
              Liverpool, UK
            </p>
            <p>
              <i className="bx bx-phone" />
              07736323890
            </p>
            <p>
              <i className="bx bx-envelope" />
              <a href="mailto:Michael.cowley2001@gmail.com">michael.cowley2001@gmail.com</a>
            </p>
          </address>
          <iframe
            className={styles.mapContainer}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37999.57330462674!2d-2.9916!3d53.4084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b2121b5b9a6b9%3A0x61a51a1ae3a15a9!2sLiverpool!5e0!3m2!1sen!2suk!4v1677721754455!5m2!1sen!2suk&zoom=6"
            width="500"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <form className={styles.contactForm} ref={formRef} action={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
          <FormSubmitButton />
        </form>
      </div>
    </section>
  );
}
