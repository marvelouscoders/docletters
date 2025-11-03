import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PageBanner = () => {
  return (
    <section>
        <div
            className="fluid-container px-8 bg-[url('/assets/images/medical.png')] 
                                bg-cover 
                                bg-center 
                                h-full 
                                w-full
                                relative
                                "
            >
            <div className="page-banner-box">
                <div>
                    <h1 className="h1">Contact us</h1>
                    <p>Get in touch with Pharmacy today. We are here to answer your questions</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageBanner