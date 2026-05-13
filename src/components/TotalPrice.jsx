"use client";

import { useContext } from "react";
import { AllDataCollect } from "@/context/AllData";

const TotalPrice = ({ allitems }) => {
    const { session } = useContext(AllDataCollect);

    const totalPrice = allitems?.reduce((sum, order) => {
        if (session?.user?.email === order?.item?.email) {
            return sum + Number(order?.item?.price || 0);
        }
        return sum;
    }, 0);

    return (
        <div className="mx-4 my-6 p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-white shadow-lg border border-orange-100 flex items-center justify-between hover:shadow-xl transition-all duration-300">

            {/* Left side */}
            <div>
                <h2 className="text-xl font-bold text-gray-800 mt-1">
                    Total Amount
                </h2>
            </div>

            {/* Right side */}
            <div className="text-right">
                <h2 className="text-2xl font-extrabold text-orange-500 tracking-wide">
                    {totalPrice} TK
                </h2>
            </div>
        </div>
    );
};

export default TotalPrice;