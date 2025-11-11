import React from 'react';
import FAQs from './Faqsection';

const ServiceFaqs = () => {
    const medicalFaqs = [
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
      question: "How long does it take to receive my certificate?",
      answer:
        "Most certificates are processed and delivered digitally within 24 hours after submission.",
    },
        {
      question: "How long does it take to receive my certificate?",
      answer:
        "Most certificates are processed and delivered digitally within 24 hours after submission.",
    },
  ];

    return (
        <section>
            <div className="fluid-container bg-white px-4 py-4">
                <FAQs title="Frequently Asked Questions " faqs={medicalFaqs} />
                </div>
        </section>
    );
}

export default ServiceFaqs;
