import Footers from '@/components/Footer'
import TopAccountBar from '@/components/TopAccountBar'
import TopCouponCodeBar from '@/components/TopCouponCodeBar'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import { MdOutlineDashboard } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { LiaCogSolid } from "react-icons/lia";
import { TbLockPassword } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import UserMenu from '@/components/UserMenu'

const ChangePassword = () => {
  return (
    <div>
        <TopCouponCodeBar />
        <TopAccountBar />
        <Navbar />
        <section>
            <div className="fluid-container px-8">
                <div className="theme-container py-16">
                    
                    <div className='flex flex-col md:flex-row gap-8'>
                        
                       <UserMenu active='dashboard' />
                        <div className='w-full md:w-3/4'> 
                            <div className='mb-12'>
                                <h2 className='h2'>Change Password</h2>
                                <p>Update your profile, contact details, and preferences to personalize your experience.</p>
                            </div>  
                            <div className='bg-navbarbg pt-12 pb-12  px-8'>
                                <div className='steps-heading-css  mb-8'>
                                    <div className='text'>Change Password</div>
                                </div>

                                <div className="flex flex-col w-full md:w-1/2 mt-8 mb-16   gap-6">

                                        <div className="form-group">
                                            <label htmlFor="new-password" >New Password</label>
                                            <input type="password" id="new-password" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="confirm-new-password" >Confirm New Password</label>
                                            <input type="password" id="confirm-new-password" placeholder="" className='form-control' />
                                        </div>

                                        <div className='form-group'>
                                            <Link href="/" className="btn-outline-big w-full text-center uppercase">
                                                Submit
                                            </Link>
                                        </div>

                                </div>
                                <div className='steps-heading-css  mb-8'>
                                    <div className='text'>Change Email Address</div>
                                </div>

                                <div className="flex flex-col  w-full md:w-1/2 mt-8   gap-6">

                                        <div className="form-group">
                                            <label htmlFor="email-address" >Email Address</label>
                                            <input type="text" id="email-address" placeholder="" className='form-control' />
                                        </div>

                                        <div className='form-group'>
                                            <Link href="/" className="btn-outline-big w-full text-center uppercase">
                                                Submit
                                            </Link>
                                        </div>

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

export default ChangePassword