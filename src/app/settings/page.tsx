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

const GeneralSettings = () => {
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
                                <h2 className='h2'>General Setting</h2>
                                <p>Update your profile, contact details, and preferences to personalize your experience.</p>
                            </div>
                            <div className='w-full bg-navbarbg  pt-8 pb-8 px-8'>
                                
                                <div className='steps-heading-css  mb-8'>
                                    <div className='text'>Your Details</div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 mb-6   gap-6">

                                        <div className="form-group">
                                            <label htmlFor="first-name" >First Name</label>
                                            <input type="text" id="first-name" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="last-name" >Last Name</label>
                                            <input type="text" id="last-name" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="contact-number" >Contact Number</label>
                                            <input type="text" id="contact-number" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="nhs-number" >NHS Number</label>
                                            <input type="text" id="nhs-number" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                                <label htmlFor="gender" >Gender</label>
                                                <Select>
                                                    <SelectTrigger className="form-control">
                                                        <SelectValue placeholder="Select Gender" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem className='focus:bg-navygreen focus:text-white' value="light">Male</SelectItem>
                                                        <SelectItem className='focus:bg-navygreen focus:text-white' value="dark">Female</SelectItem>
                                                        <SelectItem className='focus:bg-navygreen focus:text-white' value="system">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                        </div>

                                </div>
                                <div className="grid  form-group">
                                    <label htmlFor="dob-day" >Date of birth</label>

                                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
                                        <div className="form-group">
                                            <Select>
                                                <SelectTrigger className="form-control">
                                                    <SelectValue placeholder="Select Date" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Array.from({ length: 31 }).map((_, i) => (
                                                        <SelectItem key={i} className='focus:bg-navygreen focus:text-white' value={(i+1)+''}>{i+1}</SelectItem>
                                                    ))}

                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="form-group">
                                            <Select>
                                                <SelectTrigger className="form-control">
                                                    <SelectValue placeholder="Select Month" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Array.from({ length: 12 }).map((_, i) => (
                                                        <SelectItem key={i} className='focus:bg-navygreen focus:text-white' value={(i+1)+''}>{i+1}</SelectItem>
                                                    ))}

                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="form-group">
                                            <Select>
                                                <SelectTrigger className="form-control">
                                                    <SelectValue placeholder="Select Year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Array.from({ length: 100 }).map((_, i) => (
                                                        <SelectItem key={i} className='focus:bg-navygreen focus:text-white' value={(2025 - i)+''}>{2025 - i}</SelectItem>
                                                    ))}

                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                </div>
                                <div className='steps-heading-css mt-8 mb-8'>
                                    <div className='text'>Your Address</div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 mb-6   gap-6">

                                        <div className="form-group">
                                            <label htmlFor="home-address-1" >Address 1</label>
                                            <input type="text" id="home-address-1" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="home-address-2" >Address 2</label>
                                            <input type="text" id="home-address-2" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="home-address-3" >Address 3</label>
                                            <input type="text" id="home-address-3" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="home-city-town" >City/Town</label>
                                            <input type="text" id="home-city-town" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="home-postcode" >Postcode</label>
                                            <input type="text" id="home-postcode" placeholder="" className='form-control' />
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

export default GeneralSettings