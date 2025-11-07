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

const DeleteAccount = () => {
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
                                <h2 className='h2'>Delete Account</h2>
                                <p>You can delete your account. Please make sure that after deleting your account the all the date and your records will permenently deleted from our system.</p>
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

export default DeleteAccount