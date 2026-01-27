import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

interface LeadData {
  name: string;
  email: string;
  phone?: string; // Optional for generic use, but specific forms can enforce it
  interest?: "buying" | "rental" | "clinic";
  subject?: string;
  message?: string;
}

export const useLeadForm = (collectionName: "leads" | "messages" = "leads") => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (data: LeadData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Add a timestamp to the data
      const payload = {
        ...data,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, collectionName), payload);

      setIsSuccess(true);
    } catch (err: any) {
      console.error("Submission Error:", err);
      // Friendly error message
      if (err.code === "permission-denied") {
        setError("Submission blocked. Please check your inputs.");
      } else {
        setError("Something went wrong. Please try again.");
      }
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
