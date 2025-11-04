import Footers from '@/components/Footer'
import TopAccountBar from '@/components/TopAccountBar'
import TopCouponCodeBar from '@/components/TopCouponCodeBar'
import Navbar from '@/components/navbar'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Login = () => {
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
                                            <Link href="/" className="btn-outline-big">
                                                Login Now
                                            </Link>
                                        </div>
                                       

                                    </div>
                                   
                                </form>
                            </div>
                        </div>

                        <div className='right'>
                            <h2 className='h2'>New to Clinic Doc</h2>
                            <p className='bold'>There are many great benefits to registering an account with us.</p>
                            

                            <ul className='circle-bullet-ul'>
                                <li><CheckCircle /> Regular email updates from the Clinic Doc team</li>
                                <li><CheckCircle />Edit your details</li>
                                <li><CheckCircle />Manage your health profile</li>
                                <li><CheckCircle />Faster checkout</li>
                                <li><CheckCircle />Re order previous treatments</li>
                            </ul>

                            <div className="mt-6 flex  w-full  items-center justify-center">
                                <Link href="/" className="btn-outline-big w-full text-center">
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

export default Login