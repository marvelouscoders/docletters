import FAQs from '@/components/Faqsection';
import Footers from '@/components/Footer';
import Navbar from '@/components/navbar';
import Newsletter from '@/components/Newsletter';
import PageBanner from '@/components/PageBanner';
import TopAccountBar from '@/components/TopAccountBar';
import TopCouponCodeBar from '@/components/TopCouponCodeBar';
import React from 'react';

const Page = () => {
    const topBannerText = "<h1 class='h1'>Frequently Asked Questions</h1><p>If you need help, please contact us at support@pharmacy.co.uk at any time.\n</p>";

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

  const askedQuestions = [
    {
      question: "Can I get support after I receive my certificate?",
      answer:
        "Yes, our team is available 24/7 via chat or email to assist you with any queries.",
    },
    {
      question: "Are your certificates valid internationally?",
      answer:
        "Absolutely. All our medical certificates are recognized globally.",
    },
        {
      question: "How long does it take to receive my certificate?",
      answer:
        "Most certificates are processed and delivered digitally within 24 hours after submission.",
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

            <PageBanner
                text={topBannerText}
                bg={'/assets/images/faq-image.jpg'}
            />
            <section>
               <div className="fluid-container bg-white px-8 py-8">

                <FAQs title="About medical letters " faqs={medicalFaqs} />

                <FAQs title="Health Tests" faqs={travelFaqs} />

                <FAQs title="Certificates and GP Referals" faqs={askedQuestions} />

                </div>
            </section>
            <Newsletter/>
            <Footers/>
        </div>
    );
}

export default Page;