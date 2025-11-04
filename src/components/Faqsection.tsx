"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What documents are required for the medical certificate?",
      answer:
        "You’ll only need a valid ID (passport or national ID) and basic health information. No complex paperwork is required.",
    },
    {
      question: "How long does it take to receive my certificate?",
      answer:
        "Most certificates are processed and delivered digitally within 24 hours after submission.",
    },
    {
      question: "Are your doctors registered and verified?",
      answer:
        "Yes! All our doctors are NHS & GMC registered professionals with years of experience in occupational health and travel medicine.",
    },
    {
      question: "Can I use this certificate for work or visa purposes?",
      answer:
        "Absolutely. Our medical certificates are valid for work, university, and international travel documentation.",
    },
    {
      question: "Is my personal data safe and secure?",
      answer:
        "We follow strict GDPR-compliant policies to ensure your personal information remains private and fully protected.",
    },
  ];

  return (
    <section>
      <div className="fluid-container py-10 sm:py-14 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="theme-container faqs-section">
          <h2 className="h2">Frequently Asked Questions</h2>
        </div>

        <div className="normal-container">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className={`faq-button ${
                  openIndex === index
                    ? "bg-navygreen text-white"
                    : "bg-navbarbg text-dark"
                }`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`${
                    openIndex === index
                      ? "rotate-180 text-white"
                      : "text-navygreen"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-60 sm:max-h-80 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
