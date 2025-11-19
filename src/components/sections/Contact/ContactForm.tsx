/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/sections/Contact/ContactForm.tsx
import React, { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("form.errors.nameRequired");
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t("form.errors.nameMinLength");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("form.errors.emailRequired");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("form.errors.emailInvalid");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("form.errors.subjectRequired");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("form.errors.messageRequired");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("form.errors.messageMinLength");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - Replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Replace with actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit2 = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.sendForm(
        "service_cqxmhes", // من Dashboard
        "template_nl6h7db", // من Dashboard
        e.currentTarget,
        "MwA9AwXDkizi7n9Qp" // من Dashboard
      );

      console.log("Message sent:", result.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit2} noValidate>
      {/* Name Field */}
      <div className={styles.contactForm__field}>
        <label htmlFor="name" className={styles.contactForm__label}>
          {t("form.name")}
          <span className={styles.contactForm__required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.contactForm__input} ${
            errors.name ? styles["contactForm__input--error"] : ""
          }`}
          placeholder={t("form.namePlaceholder")}
          disabled={isSubmitting}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <span id="name-error" className={styles.contactForm__error}>
            {errors.name}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className={styles.contactForm__field}>
        <label htmlFor="email" className={styles.contactForm__label}>
          {t("form.email")}
          <span className={styles.contactForm__required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.contactForm__input} ${
            errors.email ? styles["contactForm__input--error"] : ""
          }`}
          placeholder={t("form.emailPlaceholder")}
          disabled={isSubmitting}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <span id="email-error" className={styles.contactForm__error}>
            {errors.email}
          </span>
        )}
      </div>

      {/* Subject Field */}
      <div className={styles.contactForm__field}>
        <label htmlFor="subject" className={styles.contactForm__label}>
          {t("form.subject")}
          <span className={styles.contactForm__required}>*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`${styles.contactForm__input} ${
            errors.subject ? styles["contactForm__input--error"] : ""
          }`}
          placeholder={t("form.subjectPlaceholder")}
          disabled={isSubmitting}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <span id="subject-error" className={styles.contactForm__error}>
            {errors.subject}
          </span>
        )}
      </div>

      {/* Message Field */}
      <div className={styles.contactForm__field}>
        <label htmlFor="message" className={styles.contactForm__label}>
          {t("form.message")}
          <span className={styles.contactForm__required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${styles.contactForm__textarea} ${
            errors.message ? styles["contactForm__textarea--error"] : ""
          }`}
          placeholder={t("form.messagePlaceholder")}
          rows={6}
          disabled={isSubmitting}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className={styles.contactForm__error}>
            {errors.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={styles.contactForm__submit}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className={styles.contactForm__spinner} viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray="32"
                strokeDashoffset="32"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            {t("form.sending")}
          </>
        ) : (
          <>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            {t("form.send")}
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className={styles.contactForm__success}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {t("form.success")}
        </div>
      )}

      {submitStatus === "error" && (
        <div className={styles.contactForm__errorMessage}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {t("form.error")}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
