"use client";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mary-Lynn",
      role: "Patient",
      text: "InClinic really is the best hospital in the UK. The care is truly excellent. I recently stayed for 5 days which was so difficult as no visitors were allowed due to Covid. The nurses made everything so much better. They are such a caring, loving team.",
    },
    {
      name: "Smith Morgan",
      role: "Patient",
      text: "I recently spent a few days at InClinic and I was amazed by how caring everyone was. The team made me feel safe and well looked after from the start. The hospital is clean, organised, and the staff are always smiling. The best hospital experience I could ask for.",
    },
    {
      name: "Paul Warner",
      role: "Patient",
      text: "InClinic is honestly the best hospital in the UK! I was very anxious when I arrived, but the nurses were so friendly and reassuring. They worked so hard to make my recovery easier and kept checking in on me. I felt completely cared for throughout my stay.",
    },
  ];

  return (
    <section className="fluid-container bg-navbarbg py-16">
      <div className="theme-container px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:divide-x divide-gray-200">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="px-0 md:px-6 lg:px-8 flex flex-col justify-between"
          >
            <div>
              <FaQuoteLeft className="text-navygreen text-2xl mb-4" />
              <p>
                {t.text}
              </p>
            </div>
            <div className="border-l-2 border-navygreen pl-3">
              <p className="font-semibold text-dark">{t.name}</p>
              <p className="text-gray text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
