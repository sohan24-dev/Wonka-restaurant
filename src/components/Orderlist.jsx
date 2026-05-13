"use client";


import { AllDataCollect } from '@/context/AllData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const Orderlist = ({ order, handleDelete }) => {
    const { session } = useContext(AllDataCollect);
    const router = useRouter()

    // console.log(session?.user, "session");
    // console.log(order?.item?.email, "order");




    const deleteItem = async (id) => {
        await handleDelete(id);
        router.refresh()

    };

    return (
        <div>
            {session?.user?.email === order?.item?.email && (

                <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border my-3 mx-4">

                    {/* Image */}
                    <div className="relative w-full sm:w-56 h-48 sm:h-auto">
                        <Image
                            src={order?.item?.img}
                            alt={order?.item?.name || "food"}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-5 flex-1">

                        {/* Top Section */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
                                {order?.item?.name}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Order ID: #{order?._id?.slice(-6) || "N/A"}
                            </p>

                            <p className="text-sm text-gray-500">
                                Customer: <span className="font-medium text-gray-700">
                                    {session?.user.name || "Unknown"}
                                </span>
                            </p>
                            <p className="text-orange-500 text-lg font-bold">
                                Price : {order?.item?.price}
                            </p>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex items-center justify-between mt-4">

                            {/* Status badge */}
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                                Completed
                            </span>

                            {/* Cancel Button */}
                            <button
                                onClick={() => deleteItem(order?._id)}
                                className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-500 text-white cursor-pointer hover:bg-red-600 transition"
                            >
                                Cancel Order
                            </button>

                        </div>
                    </div>
                </div>

            )}
            {/* TOTAL SECTION */}

            {/* <div className="relative w-full h-52">
                <Image
                    src={order?.item?.img}
                    alt={order?.item?.name || "food"}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-4">
                <h2 className="text-xl font-bold line-clamp-1">
                    {order?.item?.name}
                </h2>
                <h2 className="text-xl font-bold line-clamp-1">
                    {order?.item?.email}
                </h2>

                <p className="text-orange-500 text-lg font-semibold mt-2">
                    ৳ {order?.item?.price}
                </p>
            </div> */}
        </div>
    );
};

export default Orderlist;