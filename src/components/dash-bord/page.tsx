"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Navbar from "@/components/navbar";
import TopHeader from "@/components/TopHeader";
import {
  FiTrash2,
  FiArrowRight,
  FiHome,
  FiBox,
  FiSettings,
  FiLock,
  FiLogOut,
  FiUser,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

// ✅ shadcn imports
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FiHome /> },
    { id: "orders", label: "Orders", icon: <FiBox /> },
    { id: "settings", label: "Settings", icon: <FiSettings /> },
    { id: "changePassword", label: "Change Password", icon: <FiLock /> },
    { id: "logout", label: "Logout", icon: <FiLogOut /> },
  ];

  const orders = [
    { id: "897100", med: "Regaine Extra Strength 25%", qty: 5, price: "£51.98", status: "Completed" },
    { id: "897101", med: "Sildenafil 50mg", qty: 10, price: "£44.35", status: "Processing" },
    { id: "897102", med: "Tadalafil 10mg", qty: 4, price: "£65.00", status: "Completed" },
    { id: "897103", med: "Finasteride 1mg", qty: 6, price: "£72.50", status: "Completed" },
    { id: "897104", med: "Minoxidil Foam 5%", qty: 3, price: "£29.99", status: "Processing" },
  ];

  return (
    <>
      <TopHeader />
      <Header />
      <Navbar />

      <div className="min-h-screen flex flex-col md:flex-row bg-white text-darkblue">
        {/* ✅ Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-pink text-white flex flex-col justify-between">
          <div className="pt-10">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">My Account</h2>
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-5 py-3 rounded-md font-medium transition-all duration-300 ${
                      activeTab === item.id
                        ? "bg-white text-pink"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Delete Account Box */}
          <div className="bg-[#F6F2F7] mt-10 px-5 py-6 flex flex-col items-center">
            <FiTrash2 size={30} className="text-pink mb-3" />
            <h3 className="text-lg font-semibold text-pink">
              Delete My Account
            </h3>
            <p className="text-sm text-pink/80 text-center mt-2 mb-4">
              Do you want to delete your account?
            </p>
            <button className="btn-gradient flex items-center gap-2">
              Delete Account <FiArrowRight size={16} />
            </button>
          </div>
        </aside>

        {/* ✅ Main Content */}
        <main className="flex-1 bg-white md:px-10 py-10 px-5">
          <div className="max-w-7xl mx-auto">
            {/* ✅ Dashboard Tab */}
            {activeTab === "dashboard" && (
              <div>
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-3">
                  <FiHome className="text-pink" /> My Dashboard
                </h1>
                <p className="mb-6">
                  Welcome to your account dashboard. Here you can view your recent
                  activity, manage your orders, and update your personal settings.
                </p>

                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FiBox className="text-pink" /> Recent Orders
                </h2>

                {/* ✅ shadcn Table (Responsive) */}
                <div className="w-full overflow-x-auto px-6">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm min-w-[600px]">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#F0F5F8] text-skyblue text-sm">
                          <TableHead>Order ID</TableHead>
                          <TableHead>Medication</TableHead>
                          <TableHead>Qty</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id} className="hover:bg-gray-50">
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.med}</TableCell>
                            <TableCell>{order.qty}</TableCell>
                            <TableCell>{order.price}</TableCell>
                            <TableCell
                              className={`font-medium ${
                                order.status === "Completed"
                                  ? "text-green-600"
                                  : "text-yellow-600"
                              }`}
                            >
                              {order.status}
                            </TableCell>
                            <TableCell>
                              <Button
                                size="sm"
                                className="btn-gradient text-white rounded-full"
                              >
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            )}

            {/* ✅ Orders Tab */}
            {activeTab === "orders" && (
              <div>
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-5">
                  <FiBox className="text-pink" /> Your Orders
                </h1>

                <div className="w-full overflow-x-auto px-6">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm min-w-[600px]">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#F0F5F8] text-skyblue text-sm">
                          <TableHead>Order ID</TableHead>
                          <TableHead>Medication</TableHead>
                          <TableHead>Qty</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow
                            key={order.id}
                            className="hover:bg-gray-50"
                          >
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.med}</TableCell>
                            <TableCell>{order.qty}</TableCell>
                            <TableCell>{order.price}</TableCell>
                            <TableCell
                              className={`font-medium ${
                                order.status === "Completed"
                                  ? "text-green-600"
                                  : "text-yellow-600"
                              }`}
                            >
                              {order.status}
                            </TableCell>
                            <TableCell>
                              <Button
                                size="sm"
                                className="btn-gradient text-white rounded-full"
                              >
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            )}

            {/* ✅ Settings Tab */}
            {activeTab === "settings" && (
              <div>
                <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 text-pink">
                  <FiSettings /> Profile Settings
                </h1>

                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FiUser className="text-skyblue" /> Your Profile
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8 px-6">
                  <input placeholder="First Name" className="placeholder-input" />
                  <input placeholder="Last Name" className="placeholder-input" />
                  <input placeholder="Gender" className="placeholder-input" />
                  <input placeholder="NHS Number" className="placeholder-input" />
                  <input type="date" placeholder="Date of Birth" className="placeholder-input" />
                </div>

                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FiMapPin className="text-skyblue" /> Your Address
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <input placeholder="Address Line 1" className="placeholder-input" />
                  <input placeholder="Address Line 2" className="placeholder-input" />
                  <input placeholder="City" className="placeholder-input" />
                  <input placeholder="Postcode" className="placeholder-input" />
                  <input placeholder="Country" className="placeholder-input" />
                </div>
                <div className="flex justify-center">

                <button className="btn-gradient">
                  Update Profile <FiArrowUpRight />

                  </button>
                  </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
