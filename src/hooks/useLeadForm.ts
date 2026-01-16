import { useState } from "react";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  interest: "buying" | "rental" | "clinic";
}

export const useLeadForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (data: LeadData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Mock Submission Logic
      console.log("Submitting Lead Data:", data);

      // Simulate Network Delay (2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
    } catch (err) {
      console.error("Submission Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setError(null);
    setIsLoading(false);
  };

  return {
    submitLead,
    isLoading,
    isSuccess,
    error,
    resetForm,
  };
};
