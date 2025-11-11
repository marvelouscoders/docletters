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
      <div className="fluid-container sm:py-12 px-4 md:px-12 lg:px-20">
        <div className="theme-container faqs-section md:pt-0 pb-0 ">
          <h2 className="globel-faq-heading md:-mt-8">{title}</h2>
        </div> 

        <div className="normal-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`faq-button py-1 sm:py-3 px-4 sm:px-6 text-sm sm:text-base ${
                  openIndex === index
                    ? "bg-navygreen text-white"
                    : "bg-navbarbg text-dark"
                }`}
              >
                <h2 className="h2">{faq.question}</h2>
                <ChevronDown
                  className={`${
                    openIndex === index
                      ? "rotate-180 bg-white text-navygreen"
                      : "bg-navygreen text-white"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-70 sm:max-h-80 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="answer text-sm sm:text-base text-gray leading-relaxed sm:leading-normal px-4 pb-3 sm:pb-4">
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
