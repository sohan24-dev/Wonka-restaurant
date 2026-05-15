"use client";

import Orderlist from "@/components/Orderlist";
import TotalPrice from "@/components/TotalPrice";
import { useContext } from "react";
import { AllDataCollect } from "@/context/AllData";

const OrderClient = ({ allitems, handleDelete }) => {
    const { session } = useContext(AllDataCollect);

    const userEmail = session?.user?.email;

    const userOrders = (allitems || []).filter(
        (item) => item?.email === userEmail
    );

    return (
        <div className="my-2">
            {userOrders.length > 0 ? (
                userOrders.map((order) => (
                    <Orderlist
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500">
                    No orders found
                </p>
            )}

            <TotalPrice allitems={userOrders} />
        </div>
    );
};

export default OrderClient;