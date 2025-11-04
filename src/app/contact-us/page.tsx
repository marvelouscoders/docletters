import Footers from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import PageBanner from '@/components/PageBanner'
import TopAccountBar from '@/components/TopAccountBar'
import TopCouponCodeBar from '@/components/TopCouponCodeBar'
import Navbar from '@/components/navbar'
import Link from 'next/link'

import React from 'react'

const ContactUs = () => {

    const topBannerText = "<h1 class='h1'>Contact us</h1><p>Get in touch with Pharmacy today. We are here to answer your questions</p>";

    return (
        <div>
            <TopCouponCodeBar />
            <TopAccountBar />
            <Navbar />

            <PageBanner
                text={topBannerText}
                bg={'/assets/images/medical.png'}
            />

            <section>
                <div className="fluid-container bg-navbarbg px-8 py-16">
                    <div className="theme-container">
                        <div className='w-full md:w-5xl  mx-auto'>

                            <div className="text-center mb-12">
                                <h3 className="heading-small">Contact Us</h3>
                                <h2 className="h2">Send us a message</h2>
                            </div>


                            <div className='w-full'>
                                <form className="">
                                    <div className="grid w-full grid-cols-1  md:grid-cols-2 gap-6">


                                        <div className="form-group">
                                            <label htmlFor="full_name" >Full name</label>
                                            <input type="text" id="full_name" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" >Email Address</label>
                                            <input type="email" id="email" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone" >Phone</label>
                                            <input type="text" id="phone" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="subject" >Subject</label>
                                            <input type="text" id="subject" placeholder="" className='form-control' />
                                        </div>


                                    </div>
                                    <div className="grid grid-cols-1  md:grid-cols-1 gap-6 mt-6">
                                        <div className="form-group">
                                            <label htmlFor="subject" className='font-lora font-[500] text-base'>Message</label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Enter your message here..."
                                            ></textarea>
                                        </div>
                                        <div className="mt-6 flex w-full  items-center justify-center">
                                            <Link href="/" className="btn-outline-big">
                                                SEND MESSAGE
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
            <Footers />
        </div>
    )
}

export default ContactUs
