import Footers from '@/components/Footer'
import TopAccountBar from '@/components/TopAccountBar'
import TopCouponCodeBar from '@/components/TopCouponCodeBar'
import Navbar from '@/components/navbar'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Checkbox } from '@radix-ui/react-checkbox'
import { Label } from '@/components/ui/label'

const Register = () => {
  return (
    <div>
        <TopCouponCodeBar />
        <TopAccountBar />
        <Navbar />

        <section>
            <div className="fluid-container px-8">
                <div className="theme-container py-16">

                    <div className='login-box'>

                        <div className='left'>
                            <div className='bg-navygreen px-8 py-12'>
                                <h2 className='h2'>Log In Now</h2>
                                <p className='bold'>Are you a member already?</p>
                                <p>Use the form below to log in to your account.</p>

                                <div className='w-full mt-12'>
                                    <form className="">

                                        <div className="grid w-full  gap-6">

                                            <div className="form-group">
                                                <label htmlFor="email" >Email Address</label>
                                                <input type="email" id="email" placeholder="" className='form-control' />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password" >Password</label>
                                                <input type="password" id="password" placeholder="" className='form-control  ' />
                                            </div>

                                            <div className="form-group">
                                                <Link href="/" className="text-white text-sm text-right cursor-pointer">
                                                    Forgot Password?
                                                </Link>
                                            </div>

                                            <div className="mt-6 flex w-full  items-center justify-center">
                                                <Link href="/" className="btn-outline-big ">
                                                    Login Now
                                                </Link>
                                            </div>


                                        </div>

                                    </form>
                                </div>
                            </div>
                          

                        </div>

                        <div className='right'>
                            <h2 className='h2'>Register Now</h2>
                            <p className='bold'>To register, please provide your details using the form below.</p>

                            <div className='w-full mt-12'>
                                <form className="space-y-6">

                                    <div className='steps-heading-css'>
                                        <div className='steps'>01</div>
                                        <div className='text'>Your Details</div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 w-full  gap-6">

                                        <div className="form-group">
                                            <label htmlFor="first-name" >First Name</label>
                                            <input type="text" id="first-name" placeholder="" className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last-name" >Last Name</label>
                                            <input type="text" id="last-name" placeholder="" className='form-control' />
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

                                        <div className="form-group">
                                            <label htmlFor="contact-no" >Contact no</label>
                                            <input type="text" id="contact-no" placeholder="" className='form-control' />
                                        </div>

                                    </div>

                                    <div className="grid space-y-2 form-group">
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

                                    <div className='steps-heading-css'>
                                        <div className='steps'>02</div>
                                        <div className='text'>Account Details</div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-1 w-full  gap-6">

                                        <div className="form-group">
                                            <label htmlFor="email-address" >Email Address</label>
                                            <input type="email" id="email-address" placeholder="" className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" >Password</label>
                                            <input type="password" id="password" placeholder="" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" >Re Enter Password</label>
                                            <input type="password" id="password" placeholder="" className='form-control' />
                                        </div>

                                    </div>

                                    <div className='steps-heading-css'>
                                        <div className='steps'>03</div>
                                        <div className='text'>Your Address</div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-1 w-full  gap-6">

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
                                    <div className="grid grid-cols-1 md:grid-cols-1 w-full  gap-6">

                                        <div className="form-group">
                                            <div className="flex items-center gap-3">
                                                <Checkbox id="terms"  className='form-check'/>
                                                <Label htmlFor="terms">Accept terms and conditions</Label>
                                            </div>
                                        </div>

                                    </div>



                                </form>
                            </div>


                            <div className="mt-10 flex  w-full  items-center justify-center ">
                                <Link href="/" className="btn-outline-big w-full text-center uppercase">
                                   Register Now
                                </Link>
                            </div>
                            <div className='flex items-center justify-center text-sm mt-8'>
                                Need Help?  <Link href="/" className="ml-1 text-navygreen">
                                   Contact us
                                </Link>
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

export default Register
