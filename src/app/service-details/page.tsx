import AboutDisability from '@/components/AboutDisability';
import DisabilityMedicalLetter from '@/components/DisabilityLetter';
import Footers from '@/components/Footer';
import HowItWorks from '@/components/HowItWork';
import Navbar from '@/components/navbar';
import NeedToSupply from '@/components/NeedToSupply';
import Newsletter from '@/components/Newsletter';
import WhatWillIReceive from '@/components/ReciveWhat';
import ServiceFaqs from '@/components/ServiceFaqs';
import TopAccountBar from '@/components/TopAccountBar';
import TopCouponCodeBar from '@/components/TopCouponCodeBar';
import TrustedRegulatedSecure from '@/components/TrustedRoules';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TopCouponCodeBar />
               <TopAccountBar />
                <Navbar />
                <DisabilityMedicalLetter/>
                <AboutDisability/>
                <WhatWillIReceive/>
                <HowItWorks/>
                <NeedToSupply/>
                <TrustedRegulatedSecure/>
                <ServiceFaqs/>
                <Newsletter/>
                <Footers/>
        </div>
    );
}

export default Page;

