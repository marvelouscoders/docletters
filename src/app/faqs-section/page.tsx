import Navbar from '@/components/navbar';
import PageBanner from '@/components/PageBanner';
import TopAccountBar from '@/components/TopAccountBar';
import TopCouponCodeBar from '@/components/TopCouponCodeBar';
import React from 'react';

const Page = () => {
    return (
        <div> 
            <TopCouponCodeBar />
            <TopAccountBar />
            <Navbar />
            <PageBanner /> 
            <section>
               <div className="fluid-container bg-white px-8 py-16">
                  <div className="theme-container">
                     <div className='w-full md:w-5xl  mx-auto'>
                           <div className="text-center mb-12">
                              <h2 className="h2">Frequently Asked Questions</h2>
                           </div>
                      </div> 
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Page;
