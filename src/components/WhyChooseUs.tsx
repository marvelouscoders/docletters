import { CheckCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { FaUserDoctor } from 'react-icons/fa6';
const WhyChooseUs = () => {
  return (
    <section>
        <div className='fluid-container py-12 px-4 md:px-25 lg:px-20'>
            <div className='theme-container why-choose-us'>
                <div className='why-us-img-div'>
                    <div 
                        className="bg-[url('/assets/images/findout.png')] 
                                bg-cover 
                                bg-center 
                                h-full 
                                w-full
                                relative
                                "
                        >
                            <div className="small-box-center">
                                <FaUserDoctor />
                                <span>NHS & GMC</span>
                                <p>Registered Doctors <br /> & Same-Day Service</p>
                            </div>  
                    </div>

                </div>
                <div className='why-us-text-div sm:px-4 pt-6 md:px-24'>
                    <h3 className='heading-small '>Why Choose Us?</h3>
                    <h2>Perfect for Work, Study & Travel!</h2>
                    <p>Travel with confidence and unlock global opportunities. Whether you're heading abroad for your career, enrolling in an international university, or simply exploring new destinations, our certified documents help you meet official requirements quickly and stress-free.</p>
                    <p>Submit everything online, get reviewed by qualified professionals, and receive your certificate without delays.</p>
                    <ul className='circle-bullet-ul'>
                        <li><CheckCircle /> Quick online process with expert verification</li>
                        <li><CheckCircle />Accepted for work permits, study applications & travel documents</li>
                        <li><CheckCircle />Convenient, secure, and accessible anywhere in the world</li>
                    </ul>
                    <Link
                        href="/"
                        className="btn-link mb-6">
                        GET MEDICAL CERTIFICATE NOW
                        <ChevronRight/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs