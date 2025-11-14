import React from 'react';
import { Check, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ThankYouPopup = () => {

    const NAVY_GREEN = "#01949A"; 

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 w-[804.5px] h-[542px] text-center border ">
                <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md"
                    style={{ backgroundColor: NAVY_GREEN }} 
                >
                    <CheckCircle size={40} className="text-white" />
                </div>
                
                {/* Order Number */}
                <h6>Order # 234032499</h6>
                
                {/* Thank You Message */}
                <h2>
                    Thank You For Ordering!
                </h2>
                
                {/* Description */}
                <h3 className='card-small-heading mt-4 text-[27px]'> 
                    You can now view your order and track its progress 
                    in your <a href="/dashboard" className="text-navygreen hover:underline font-semibold">dashboard</a>.
                </h3>
                
                <button 
                    className=" w-full md:w-[50%] mt-6 py-3 px-6 border-2  text-lg font-bold transition-all duration-300
                               border-navygreen text-navygreen hover:bg-navygreen hover:text-white
                               focus:outline-none   focus:ring-opacity-50"
                >
                    LOGIN NOW
                </button>
            </div>
        </div>
    );
};

export default ThankYouPopup;