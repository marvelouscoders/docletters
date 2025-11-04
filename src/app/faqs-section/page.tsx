import FAQs from '@/components/Faqsection';
import Navbar from '@/components/navbar';
import PageBanner from '@/components/PageBanner';
import TopAccountBar from '@/components/TopAccountBar';
import TopCouponCodeBar from '@/components/TopCouponCodeBar';
import React from 'react';

const Page = () => {
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
  ];

  const travelFaqs = [
    {
      question: "Do I need a COVID test for travel?",
      answer:
        "Requirements depend on your destination. Always check airline and country regulations.",
    },
    {
      question: "Can I get my travel certificate online?",
      answer:
        "Yes! You can apply online and get a verified travel fitness certificate within hours.",
    },
  ];
    const askedquesstions = [
    {
      question: "Do I need a COVID test for travel?",
      answer:
        "Requirements depend on your destination. Always check airline and country regulations.",
    },
    {
      question: "Can I get my travel certificate online?",
      answer:
        "Yes! You can apply online and get a verified travel fitness certificate within hours.",
    },
  ];

    return (
        
        <div> 
            <TopCouponCodeBar />
            <TopAccountBar />
            <Navbar />
            <PageBanner /> 
            <section>
               <div className="fluid-container bg-white px-8 py-16">
                   {/* 1️⃣ Medical FAQs */}
                    <FAQs title="Medical Certificate FAQs" faqs={medicalFaqs} />

                    {/* 2️⃣ Travel FAQs */}
                    <FAQs title="Travel-Related FAQs" faqs={travelFaqs} />

                    {/* 3️⃣ Commonly Asked Questions */}
                    <FAQs title="Commonly Asked Questions" faqs={askedquesstions} />

                </div>
            </section>
        </div>
    );
}

export default Page;
