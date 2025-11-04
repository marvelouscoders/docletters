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
        <div className=" fluid-container bg-white py-14 px-6 md:px-12 lg:px-20">
      <div className="theme-container faqs-section">
        <h2>
          Frequently Asked Questions
        </h2>
      </div>

      <div className="w-5xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-navbarbg shadow-sm  transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center text-left px-6 py-4 font-lora text-xl transition-all duration-300 ${
                openIndex === index
                  ? "bg-navygreen text-white"
                  : "white text-dark"
              }`}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-white" : "text-[#00A6A6]"
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 pt-4   text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

