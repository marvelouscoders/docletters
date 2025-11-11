import { CheckCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NeedToSupply = () => (
    <section>
        <div className="fluid-container pt-16 pb-24 bg-white">
            <div className="theme-container px-4 md:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-2 md:-mt-4"> 
                        <h2>What will I need to supply?</h2>
                        <p>
                            To allow us to assess your condition and issue a medical certificate, we will require the following information
                        </p>
                        
                        <ul className="circle-bullet-ul">
                            <li>
                                <CheckCircle/>
                                A photo of your passport or driving license.
                            </li>
                            <li>
                                <CheckCircle />
                                Your completed online medical form.
                            </li>
                            <li>
                                <CheckCircle/>
                                Signature and authorisation by one of our GMC-registered UK doctors
                            </li>
                            <li >
                                <CheckCircle/>
                                A 30-second to 1-minute video explaining how your disability affects you.
                            </li>
                            <li >
                                <CheckCircle/>
                                Your digital Summary Care Record or a doctor’s letter confirming your medical disability.
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 lg:order-1 relative aspect-video lg:aspect-4/3 overflow-hidden">
                        <Image
                            src="/assets/images/needTosupply.png"
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

export default NeedToSupply ;
