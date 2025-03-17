"use client"
import emailjs from '@emailjs/browser';
import { useState } from "react";

const useSendEmail = (resetForm: (formState: { values: { firstName: string; lastName: string; phoneNumber: string; message: string; email: string; agreeToTerms: boolean; } }) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (templateParams: { [key: string]: any }) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error("Missing EmailJS environment variables");
      }


      await emailjs.send(serviceId, templateId, templateParams, userId);

      setIsSuccess(true);
      resetForm({
        values: {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          message: "",
          email: "",
          agreeToTerms: false,
        },
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetStatus = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    sendEmail,
    isLoading,
    isSuccess,
    error,
    resetStatus,
  };
};

export default useSendEmail;
