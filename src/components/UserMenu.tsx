import Link from 'next/link'
import React from 'react'
import { FiMapPin, FiShoppingCart } from 'react-icons/fi'
import { IoLogOutOutline } from 'react-icons/io5'
import { LiaCogSolid } from 'react-icons/lia'
import { MdOutlineDashboard } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { TbLockPassword } from 'react-icons/tb'

const UserMenu = ({active}:{active:string}) => {
  return (
    <div className='flex flex-col w-full md:w-1/4'>
                            <div className='user-menu  '>
                            <Link href="/dashboard" className={active==='dashboard'?'active':''}  >
                            <MdOutlineDashboard /> Dashboard
                            </Link>
                            <Link href="/"  >
                            <FiShoppingCart /> Orders
                            </Link>
                            <Link href="/"  >
                            <FiMapPin /> My Addresses
                            </Link>
                            <Link href="/"  >
                            <LiaCogSolid /> Setting
                            </Link>
                            <Link href="/change-password"  >
                            <TbLockPassword /> Change Password                           
                            </Link>
                            <Link href="/"  >
                            <IoLogOutOutline /> Logout                          
                            </Link>
                            </div>
                            <div className='user-delete-section'>
                                <div className='account-delete-box'>
                                <RiDeleteBin6Line />
                                </div>
                                <h3>Delete My Account</h3>
                                <p>Do you want to delete your account?</p>
                                <Link href="/"  >
                                    Delete Now                          
                                </Link>
                            </div>
                        </div>
  )
}

export default UserMenu