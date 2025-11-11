import React from 'react';
import { Video, FileText, FileCheck } from 'lucide-react'; 

const HowItWorks = () => {

  const steps = [
    {
      icon: Video,
      number: '01',
      title: 'Upload a video and fill out a short form',
      description: 'Upload by 9pm for same-day service. This should be a 30 second – 1 minute video describing your disabilities.',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Doctor reviews and approves evidence.',
      description: 'Our doctors will carefully review and validate the evidence you provide to ensure accuracy and support your medical needs.',
    },
    {
      icon: FileCheck,
      number: '03',
      title: 'Get Your Letter Delivered the Same Day',
      description: 'You’ll receive an email with your letter, with a QR code so they can be verified and accepted worldwide.',
    },
  ];

  const iconBgColor = 'text-white bg-navygreen';
  const numberColor = 'text-navygreen';
  const headingColor = 'text-dark';

  return (
    <section className="py-20 bg-navbarbg">
      <div className="fluid-container">
        <div className="theme-container px-4 md:px-4">
          <div className="text-center mb-12">
            <h3 className="heading-small">
              HOW IT WORKS
            </h3>
            <h2>
              How to get a Disability medical letter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-8 py-18 bg-white   transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative mb-6">
                  <div className={`p-4 ${iconBgColor} rounded-full`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 translate-y-8 h-8 w-8 flex items-center justify-center font-bold text-xs ${numberColor} bg-white border-2 border-teal-600 rounded-full`}>
                    {step.number}
                  </div>
                </div>

                <h3 className={`card-big-heading mt-2${headingColor}`}>
                  {step.title}
                </h3>
                <p>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;