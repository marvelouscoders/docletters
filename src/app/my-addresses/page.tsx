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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import UserMenu from '@/components/UserMenu'

const MyAddresses = () => {
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
                                <h2 className='h2'>My Addresses</h2>
                                <p>Update your Billing & Delivery Address.</p>
                            </div>
                            <div className='w-full bg-navbarbg  pt-12 pb-12 px-8'>
                                
                                <div className='steps-heading-css  mb-8'>
                                    <div className='text'>Billing Address</div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 mb-6   gap-6">

                                        <div className="form-group">
                                            <label htmlFor="billing-address-1" >Address 1</label>
                                            <input type="text" id="billing-address-1" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="billing-address-2" >Address 2</label>
                                            <input type="text" id="billing-address-2" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="billing-address-3" >Address 3</label>
                                            <input type="text" id="billing-address-3" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="billing-city-town" >City/Town</label>
                                            <input type="text" id="billing-city-town" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="billing-postcode" >Postcode</label>
                                            <input type="text" id="billing-postcode" placeholder="" className='form-control' />
                                        </div>

                                </div>
                                <div className='steps-heading-css mt-8 mb-8'>
                                    <div className='text'>Delivery Address</div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 mb-6   gap-6">

                                        <div className="form-group">
                                            <label htmlFor="delivery-address-1" >Address 1</label>
                                            <input type="text" id="delivery-address-1" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="delivery-address-2" >Address 2</label>
                                            <input type="text" id="delivery-address-2" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="delivery-address-3" >Address 3</label>
                                            <input type="text" id="delivery-address-3" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="delivery-city-town" >City/Town</label>
                                            <input type="text" id="delivery-city-town" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="delivery-postcode" >Postcode</label>
                                            <input type="text" id="delivery-postcode" placeholder="" className='form-control' />
                                        </div>

                                </div>
                                <div className='form-group mt-8'>
                                    <Link href="/" className="btn-outline-big w-full text-center uppercase">
                                        Submit
                                    </Link>
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

export default MyAddresses