"use client";
import Footers from '@/components/Footer'
import TopAccountBar from '@/components/TopAccountBar'
import TopCouponCodeBar from '@/components/TopCouponCodeBar'
import Navbar from '@/components/navbar'
import { useState } from 'react'

import UserMenu from '@/components/UserMenu'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


const UploadDocuments = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
  return (
    <div>
        <TopCouponCodeBar />
        <TopAccountBar />
        <Navbar />
        <section>
            <div className="fluid-container px-8">
                <div className="theme-container ">
                    
                    <div className='flex flex-col md:flex-row gap-8 pt-12 pb-12'>
                        
                        <UserMenu active='dashboard' />
                        <div className='w-full md:w-3/4'>    
                            <div className='mb-12'>
                                <h2 className='h2'>Upload Documents</h2>
                                <p>In order to complete you purchase of "Leave Certificate" we need you to upload the following documents.</p>
                            </div>

                            <div className='customfile-upload'>
                                <Accordion type="single"
                                        collapsible
                                        value={openItem}
                                        onValueChange={setOpenItem}
                                        className="w-full">
                                   
                                    <AccordionItem  value="item-1">
                                        <AccordionTrigger className={'font-extrabold font-lora text-lg bg-navbarbg px-8 '+ (openItem === "item-1") ? "open" : "close"} >Is it accessible?</AccordionTrigger>
                                        <AccordionContent className='px-8'>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
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

export default UploadDocuments