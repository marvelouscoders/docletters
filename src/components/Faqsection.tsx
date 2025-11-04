"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  title: string; 
  faqs: FAQItem[];
}

export default function FAQs({ title, faqs }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="fluid-container py-10 sm:py-14 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="theme-container faqs-section">
          <h2 className="h2">{title}</h2>
        </div>

        <div className="normal-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md transition-all duration-300"
            >
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
