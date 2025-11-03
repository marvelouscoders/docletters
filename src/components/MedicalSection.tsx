import { CheckCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import Image from 'next/image';
const MedicalSection = () => {
    return (
        <section>
        <div className='fluid-container py-16'>
            <div className='theme-container  medical-scetion'>
                <div className='medical-text-side'>
                    <h2 className='h2'>The fastest and most convenient way to get a medical letter</h2>
                    <p>AFC Urgent Care Waltham offers COVID-19 Rapid Virus and Antibody Testing. If you have any questions about testing, insurance coverage, please consult our FAQs.</p>
                    <p>Submit everything online, get reviewed by qualified professionals, and receive your certificate without delays.</p>
                        <ul className='circle-bullet-ul'>
                        <li><CheckCircle /> Quick online process with expert verification</li>
                        <li><CheckCircle />Accepted for work permits, study applications & travel documents</li>
                        <li><CheckCircle />Convenient, secure, and accessible anywhere in the world</li>
                    </ul>
                    <Link
                        href="/"
                        className="btn-link-white"
                        >
                        GET MEDICAL CERTIFICATE NOW
                        <ChevronRight  />
                    </Link>
                </div>
                <div className='medical-image-side'>
                    <div 
                        className="bg-[url('/assets/images/medical.png')] 
                                bg-cover 
                                bg-center 
                                h-full 
                                w-full
                                relative
                                "
                        />
                </div>
            </div>
             </div>
        </section>
    );
}

export default MedicalSection;
