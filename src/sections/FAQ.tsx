"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does the AI chat resume builder work?",
    answer:
      "Our AI-powered chat interface guides you through the resume creation process by asking relevant questions about your experience, skills, and achievements. It then automatically formats your responses into a professional resume.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security seriously. All your information is encrypted and stored securely. We never share your personal data with third parties without your explicit consent.",
  },
  {
    question: "Can I edit my resume after it's generated?",
    answer:
      "You can edit your resume at any time. Our platform provides real-time editing capabilities and instant previews of your changes.",
  },
  {
    question: "What makes your resume builder different?",
    answer:
      "Our AI-powered chat interface makes creating a resume as easy as having a conversation. Unlike traditional builders, we use advanced AI to help you highlight your best qualities and create ATS-friendly resumes automatically.",
  },
  {
    question: "How many resumes can I create?",
    answer:
      "You can create multiple versions of your resume to target different positions or industries. Each version can be saved and edited independently.",
  },
];

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-[#1E2B3A]">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-[#1E2B3A] transition-transform ${
            isOpen ? "rotate-180 transform" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 text-[#1E2B3A]">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description mt-5">
            Everything you need to know about
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
