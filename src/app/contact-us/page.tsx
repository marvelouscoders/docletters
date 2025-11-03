import Footers from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import PageBanner from '@/components/PageBanner'
import TopAccountBar from '@/components/TopAccountBar'
import TopCouponCodeBar from '@/components/TopCouponCodeBar'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <TopCouponCodeBar />
      <TopAccountBar />
      <PageBanner />
      <section>
        <div className="fluid-container bg-navbarbg px-8 py-16">
            <div className="theme-container">
                <div className='grid grid-cols-1 w-5xl mx-auto'>
                 
                  <div className="text-center mb-12">
                    <h3 className="heading-small">Contact Us</h3>
                    <h2 className="h2">Send us a message</h2>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2'>
                    
                    <div>
                      <form className="">
                        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                          
                          <div className="grid w-full  items-center gap-2">
                            <Label htmlFor="full-name" className='font-lora font-[500] text-base'>Full Name</Label>
                            <Input type="text" id="full-name" placeholder="" className='h-[58px] bg-white border-0 rounded-none focus:border-none focus:ring-0 focus:outline-none' />
                          </div>

                          <div className="grid w-full  items-center gap-2">
                            <Label htmlFor="email" className='font-lora font-[500] text-base'>Email Address</Label>
                            <Input type="email" id="email" placeholder="" className='h-[58px] bg-white border-0 rounded-none focus:ring-2 focus:ring-navygreen focus:border-navygreen focus:outline-none' />
                          </div>

                          <div className="grid w-full  items-center gap-2">
                            <Label htmlFor="phone" className='font-lora font-[500] text-base'>Phone</Label>
                            <Input type="text" id="phone" placeholder="" className='h-[58px] bg-white border-0 rounded-none focus:ring-2 focus:ring-navygreen focus:bg-white focus:border-navygreen focus:outline-none' />
                          </div>

                          <div className="grid w-full  items-center gap-2">
                            <Label htmlFor="subject" className='font-lora font-[500] text-base'>Subject</Label>
                            <Input type="text" id="subject" placeholder="" className='h-[58px] bg-white border-0 rounded-none focus:ring-2 focus:ring-navygreen focus:border-navygreen focus:outline-none' />
                          </div>

                        </div>
                        <div className="grid grid-cols-1  md:grid-cols-1 gap-6 mt-6">
                          <div className="grid w-full  items-center gap-2">
                            <Label htmlFor="subject" className='font-lora font-[500] text-base'>Subject</Label>
                            <textarea 
                              className="w-full bg-white h-32 p-3 border-0 rounded-none resize-y 
                                    focus:ring-2 focus:ring-navygreen focus:border-navygreen focus:outline-none" 
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
        </div>
      </section>
      <Newsletter />
      <Footers />
    </div>
  )
}

export default ContactUs