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

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import React from 'react'
import UserMenu from '@/components/UserMenu'

const Dashboard = () => {
  return (
    <div>
        <TopCouponCodeBar />
        <TopAccountBar />
        <Navbar />
        <section>
            <div className="fluid-container px-8">
                <div className="theme-container py-16">
                    
                    <div className='flex flex-col md:flex-row gap-8'>
                        
                        <UserMenu active='dashboard'/>
                        <div className='w-full md:w-3/4 pl-0 md:pl-10'>
                            <h2 className='h2'>Dashboard</h2>
                            <p>From your account dashboard. You can easily check and view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                            <Table className='defaul-talbe mt-8 '>
                               
                                <TableHeader>
                                    <TableRow>
                                    <TableHead className="w-[100px]">Order ID</TableHead>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Qty</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                    <TableCell className="font-medium">19667170</TableCell>
                                    <TableCell>Disability Medical Letters</TableCell>
                                    <TableCell>2x</TableCell>
                                    <TableCell>£250.00</TableCell>
                                    <TableCell className="text-right">
                                    <Link href="/" className='small-btn'  >
                                     Upload Doc
                                    </Link>
                                    </TableCell>
                                    </TableRow>
                                    <TableRow>
                                    <TableCell className="font-medium">19667170</TableCell>
                                    <TableCell>Disability Medical Letters</TableCell>
                                    <TableCell>2x</TableCell>
                                    <TableCell>£250.00</TableCell>
                                    <TableCell className="text-right">
                                    <Link href="/" className='small-btn'  >
                                     Upload Doc
                                    </Link>
                                    </TableCell>
                                    </TableRow>
                                    <TableRow>
                                    <TableCell className="font-medium">19667170</TableCell>
                                    <TableCell>Disability Medical Letters</TableCell>
                                    <TableCell>2x</TableCell>
                                    <TableCell>£250.00</TableCell>
                                    <TableCell className="text-right">
                                    <Link href="/" className='small-btn'  >
                                     Upload Doc
                                    </Link>
                                    </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <Footers />
    </div>
  )
}

export default Dashboard