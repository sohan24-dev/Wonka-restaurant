"use client";


import { AllDataCollect } from "@/context/AllData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const Orderlist = ({ order, handleDelete, tokenData }) => {
    const { session } = useContext(AllDataCollect);
    const router = useRouter();

    const deleteItem = async (id) => {

        console.log(tokenData);
        await handleDelete(id, tokenData);
        router.refresh();
    };
    console.log(order, "order");
    // console.log(order?.email, "email");
    // console.log(session?.user?.name, "session");

    return (
        <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border my-3 mx-4">

            {/* Image */}
            <div className="relative w-full sm:w-56 h-48 sm:h-auto">
                <Image
                    src={order?.img}
                    alt={order?.name || "food"}
                    fill
                    sizes="(max-width: 640px) 100vw, 224px"
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-5 flex-1">

                <div>

                    {/* Top Section */}
                    <div className="flex items-start justify-between gap-3">

                        <div>
                            <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
                                {order?.name}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Order ID: #{order?._id?.slice(-6)}
                            </p>
                        </div>

                        {/* Date Right Top */}
                        <div className="text-right">
                            <p className="text-xs text-gray-400">
                                Order Date
                            </p>

                            <p className="text-sm font-semibold text-gray-700">
                                {order?.createdAt}
                            </p>
                        </div>
                    </div>

                    {/* Price */}
                    <p className="text-orange-500 text-lg font-bold mt-4">
                        Price: ৳ {order?.price}
                    </p>

                    {/* Customer */}
                    <p className="mt-3 text-sm text-gray-500">
                        Customer :
                        <span className="ml-2 text-base font-semibold text-gray-800">
                            {order?.customer}
                        </span>
                    </p>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                        Completed
                    </span>

                    <button
                        onClick={() => deleteItem(order?._id)}
                        className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
                    >
                        Cancel Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Orderlist;