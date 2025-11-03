import { Separator } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import React from 'react'
import { CiClock1, CiMail, CiShoppingCart, CiUser } from 'react-icons/ci'

const TopAccountBar = () => {
  return (
    <section>
        <div className="fluid-container px-8 py-4">
            <div className='top-account-links'>
                
                <div className='top-account-links-left'>
                    
                    <Link href="mailto:info@newpharmacy.co.uk">
                        <CiMail />info@newpharmacy.co.uk
                    </Link>

                    <Link href="/">
                        <CiClock1 />Mon - Sat 9:00AM - 6:00PM
                    </Link>
                   
                 </div>
                
                 <div className='top-account-links-right'>
                   
                    <Link href="/">
                        <CiUser />Account
                    </Link>

                    <Link href="cart">
                        <CiShoppingCart /><span>0</span>items
                    </Link>
                   
                 </div>

            </div>
        </div>
        <div className="fluid-container h-0.5 bg-gray-50">
            
        </div>
    </section>
  )
}

export default TopAccountBar