"use client";
import { ShoppingCart, CreditCard, Mail, Upload, FileCheck } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import ShippingItem from "@/components/cart-items/ShippingItem";
import CheckOut from "@/components/check-out/CheckOut";
import TopCouponCodeBar from "@/components/TopCouponCodeBar";
import TopAccountBar from "@/components/TopAccountBar";
import Newsletter from "@/components/Newsletter";
import Footers from "@/components/Footer";

const steps = [
  { id: 1, label: "Your Basket Summary", icon: <ShoppingCart /> },
  { id: 2, label: "Checkout & Pay your Order", icon: <CreditCard /> },
  { id: 3, label: "Receive your code by email", icon: <Mail /> },
  { id: 4, label: "Login and Upload medical proof", icon: <Upload /> },
  { id: 5, label: "Get certificate in 2 hours", icon: <FileCheck /> },
];

const NAVY_GREEN = "navygreen";

export default function ProgressStepsWithContent() {
  const [activeStep, setActiveStep] = useState(1);


  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return <ShippingItem />;
      case 2:
        return <CheckOut />;
      case 3:
        return <ShippingItem />;
      case 4:
        return <CheckOut/>;
      case 5:
        return <ShippingItem/>;
      default:
        return null;
    }
  };

  return (

        <>
        <TopCouponCodeBar />
        <TopAccountBar />
        <section>
      {/* Progress Bar */}
      <div className="fluid-container bg-navbarbg py-8">
        <div className="theme-container flex flex-col md:flex-row items-center justify-center relative gap-6 md:gap-0">
          {steps.map((step, index) => {
            const isCompleted = step.id < activeStep;
            const isActive = step.id === activeStep;

            return (
              <React.Fragment key={step.id}>
                {/* Step Circle + Label */}
                <div
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center text-center z-10 cursor-pointer"
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors
                      ${isActive
                        ? `bg-${NAVY_GREEN} text-white border-${NAVY_GREEN}`
                        : isCompleted
                          ? `bg-${NAVY_GREEN} text-white border-${NAVY_GREEN}`
                          : `bg-white text-gray-500 border-gray-300 hover:border-${NAVY_GREEN}`}`}
                  >
                    {step.icon}
                  </div>
                  <p
                    className={`mt-2 text-sm font-medium transition-colors max-w-[140px]
                      ${isActive || isCompleted ? `text-${NAVY_GREEN} font-semibold` : "text-gray-500"}
                    `}
                  >
                    {step.label}
                  </p>
                </div>

                {/* Arrow Image between Steps */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center shrink-0 w-[90px] h-[60px]">
                    <Image
                      src="/assets/images/progress-arrow.png"
                      alt="Next Step Arrow"
                      width={80}
                      height={20}
                      className="object-contain mx-auto" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Content (renders below progress bar) */}
      <div className="fluid-container py-0">{renderStepContent()}</div>
    </section>
    <Newsletter/>
    <Footers/>
    </>
  );
}
