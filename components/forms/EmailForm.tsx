"use client";

import React, { useState } from "react";
import { useActionState } from "react";

const EmailForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);
    setMessage("");

    const formData = new FormData(e.target as HTMLFormElement);
    const dataToSend = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message || "Email sent successfully!");
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        console.log("asd")
      } else {
        setMessage(`Error: ${result.message || "Failed to send email."}`);
        setIsSuccess(false);
        console.error("API Error:", result);
      }
    } catch (error) {
      setMessage("A network error occurred. Please check your connection.");
      setIsSuccess(false);
      console.error("Fetch Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="w-[80%] h-full flex flex-col lg:justify-start lg:items-start gap-8"
      onSubmit={handleSubmit}
    >
      <input
        id="name"
        name="name"
        type="text"
        className={`w-full px-3 py-2 rounded-md focus:outline-none border
      text-theme1-secondary placeholder-theme1-secondary border-theme1-secondary focus:border-theme-accent1
      light:text-theme1-secondary light:placeholder-theme-dark-accent1 light:border-theme1-secondary light:focus:border-theme-dark-accent1`}
        placeholder="Name"
        required
      />

      <input
        id="email"
        name="email"
        type="email"
        className={`w-full px-3 py-2 rounded-md focus:outline-none border
      text-theme1-secondary placeholder-theme1-secondary border-theme1-secondary focus:border-theme-accent1
      light:text-theme1-secondary light:placeholder-theme-dark-accent1 light:border-theme1-secondary light:focus:border-theme-dark-accent1`}
        placeholder="Email"
        required
      />

      <input
        id="subject"
        name="subject"
        type="text"
        className={`w-full px-3 py-2 rounded-md focus:outline-none border
      text-theme1-secondary placeholder-theme1-secondary border-theme1-secondary focus:border-theme-accent1
      light:text-theme1-secondary light:placeholder-theme-dark-accent1 light:border-theme1-secondary light:focus:border-theme-dark-accent1`}
        placeholder="Subject"
        required
      />

      <textarea
        id="message"
        name="message"
        rows={4}
        className={`w-full px-3 py-2 rounded-md focus:outline-none border
      text-theme1-secondary placeholder-theme1-secondary border-theme1-secondary focus:border-theme-accent1
      light:text-theme1-secondary light:placeholder-theme-dark-accent1 light:border-theme1-secondary light:focus:border-theme-dark-accent1`}
        placeholder="Write your message here..."
        required
      />

      <button
        type="submit"
        disabled={submitting}
        className={`w-full px-3 py-2 rounded-md focus:outline-none border cursor-pointer
      text-theme1-secondary placeholder-theme1-secondary border-theme1-secondary hover:border-theme-accent1
      light:text-theme1-secondary light:placeholder-theme-dark-accent1 light:border-theme1-secondary light:hover:border-theme-dark-accent1`}
      >
        {submitting ? "Sending…" : "Send Email"}
      </button>
    </form>
  );
};

export default EmailForm;
