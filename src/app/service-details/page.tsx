import Footers from '@/components/Footer'
import TopAccountBar from '@/components/TopAccountBar'
import TopCouponCodeBar from '@/components/TopCouponCodeBar'
import React from 'react'
import { TbCalendarClock } from "react-icons/tb";
import { FaUserMd } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const ServiceDetails = () => {
  return (
    <div>
        <TopCouponCodeBar />
        <TopAccountBar />
        <section>
            <div className="fluid-container px-8">
                <div className="theme-container py-16">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/components">Components</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                </div>
            </div>
        </section>  
        <section>
            <div className="fluid-container px-8">
                <div className="theme-container">
                 <div className='flex w-full gap-16'>
                    <div className='left w-full'>left</div>
                    <div className='right w-full'>
                        <h1 className='h1'>Disability medical letter</h1>
                        <p className='pricetag'>£49.00</p>
                        <p>Same-day disability medical letter, required to confirm a disability and its impact on your day-to-day life. </p>
                        <div className='flex w-full'>
                            <div className='w-full'>
                                <div className='bg-navygreen text-white rounded-full w-16 h-16 flex items-center justify-center'>
                                <TbCalendarClock className='text-3xl' />
                                </div>
                                <p>No Appointment<br /> 
                                Needed</p>
                            </div>
                            <div className='w-full'>
                                <div className='bg-navygreen text-white rounded-full w-16 h-16 flex items-center justify-center'>
                                <FaUserMd className='text-3xl' />
                                </div>
                                <p>NHS & GMC<br />
                                Registered Doctors</p>
                            </div>
                            <div className='w-full'>
                                <div className='bg-navygreen text-white rounded-full w-16 h-16 flex items-center justify-center'>
                                <FaClockRotateLeft className='text-3xl' />
                                </div>
                                <p>
                                Same-Day-Letter<br />
                                9 am - 9 pm
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        </section>  
        <Footers />
    </div>
  )
}

export default ServiceDetails