"use client";

import { useContext } from "react";
import { AllDataCollect } from "@/context/AllData";
import Link from "next/link";

const TotalPrice = ({ allitems }) => {
    const { session } = useContext(AllDataCollect);

    const totalPrice = allitems?.reduce((sum, order) => {
        if (session?.user?.email === order?.item?.email) {
            return sum + Number(order?.item?.price || 0);
        }
        return sum;
    }, 0);

    return (
        <div>
            {
                totalPrice > 0 ? <div className="mx-4 my-6 p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-white shadow-lg border border-orange-100 flex items-center justify-between hover:shadow-xl transition-all duration-300">

                    {/* Left side */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mt-1">
                            Total Amount
                        </h2>
                    </div>

                    {/* Right side */}
                    <div className="text-right">
                        <h2 className="text-2xl font-extrabold text-orange-500 tracking-wide">
                            {totalPrice}Tk
                        </h2>
                    </div>
                </div> : <div className="flex flex-col items-center justify-center py-16 px-6 text-center bg-white rounded-2xl shadow-sm border mx-4 my-6">

                    {/* Icon */}
                    <div className="text-5xl mb-4">🍽️</div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800">
                        No Orders Yet
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-500 mt-2 max-w-md">
                        You haven’t placed any orders yet.
                        Discover delicious meals and start your first order now.
                    </p>

                    {/* Button (optional CTA) */}
                    <Link href={'/allitems'}>
                        <button className="cursor-pointer mt-6 px-5 py-2 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
                            Browse Menu
                        </button></Link>
                </div>
            }
        </div>
    );
};

export default TotalPrice;