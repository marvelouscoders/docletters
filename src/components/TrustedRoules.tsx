import React from 'react';
import Image from 'next/image';

const TrustedRegulatedSecure = () => {
    const logos = [
        { src: '/assets/images/ico-office.png', alt: 'ICO - Information Commissioners Office' },
        { src: '/assets/images/Regulated.png', alt: 'Regulated by Care Quality Commission' },
        { src: '/assets/images/general-medical.png', alt: 'General Medical Council Registered Doctors' },
        { src: '/assets/images/ukss.png', alt: 'ISO 27001 Information Security Management' },
    ];

    return (
        <section>
            <div className="fluid-container py-12 md:py-16 bg-navygreen text-white">
                <div className="theme-container px-4 md:px-8 text-center">
                    <h2>
                        Trusted, regulated and secure
                    </h2>
                    <span className='text-base leading-6 text-white block mb-12 mt-4 '>
                        We are regulated by the Care Quality Commission and all our <br/> doctors are
                        General Medical Council registered
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-5xl mx-auto">
                        {logos.map((logo, index) => (
                            <div 
                                key={index} 
                                className="w-full h-auto bg-white p-4 flex justify-center items-center  shadow-xl aspect-video"
                            >
                                <div className="relative w-full h-full max-w-[150px] max-h-[100px]">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustedRegulatedSecure;