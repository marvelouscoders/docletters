import { CheckCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const WhatWillIReceive = () => (
    <section>
        <div className="fluid-container pt-12 pb-12 bg-navbarbg">
            <div className="theme-container px-4 md:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 >What will I receive?</h2>
                        <p >
                            You will receive a **verifiable digital PDF letter** signed by a medical professional and sent directly to your mobile, containing the following:
                        </p>
                        
                        <ul className="circle-bullet-ul">
                            <li>
                                <CheckCircle/>
                                Your name and date of birth.
                            </li>
                            <li>
                                <CheckCircle />
                                Your medical disability and how it affects you
                            </li>
                            <li>
                                <CheckCircle/>
                                Signature and authorisation by one of our GMC-registered UK doctors
                            </li>
                            <li >
                                <CheckCircle/>
                                Contact details of ZoomDoc Health with a QR code enabling a verification check.
                            </li>
                        </ul>
                        <Link href="/" className="btn-link">
                            Request from £49
                            <ChevronRight className="chevron-right" />
                        </Link>
                    </div>
                    <div className="order-1 lg:order-2 relative aspect-video lg:aspect-4/3 overflow-hidden">
                        <Image
                            src="/assets/images/what-i-recive.png"
                            alt="Doctor writing medical note"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WhatWillIReceive;
