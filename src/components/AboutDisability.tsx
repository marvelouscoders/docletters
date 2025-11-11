import { ChevronRight, Import } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const AboutThisMedicalLetter = () => (


    <section >
        <div className="fluid-container py-16 bg-navbarbg">
            <div className="theme-container px-4 md:px-6">
                
                <div className="text-center mb-12">
                    <h3 className='heading-small'>DISABILITY MEDICAL LETTER</h3>
                    <h2>About This Medical Letter</h2>
                </div>

            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video lg:aspect-4/3 overflow-hidden">
                        <Image
                            src="/assets/images/aboutDisability.png" 
                            alt="Couple reading medical letter"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className='mt-0'>
                        <h2>Disability medical letter</h2>
                        <p>
                            If you or your child has a disability, whether visible or NONNA, you may need a letter confirming your medical condition and its impact when seeking support or accommodations. This can include pursuing applications, airport assistance, and access to events or theme parks. Hidden disabilities such as chronic pain, mental health conditions, or neurological disorders, are just as valid and may also require documentation.
                        </p>
                        <p>
                            Our doctors can provide a same-day disability letter that outlines your condition and its impact on daily life. Complete online assessment, GP verifies — get your certificate.
                        </p>
                        <Link href="/" className="btn-link">
                            Request from £49
                            <ChevronRight className="chevron-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutThisMedicalLetter;
