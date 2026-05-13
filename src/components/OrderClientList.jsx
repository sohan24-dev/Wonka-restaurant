"use client";

import Orderlist from "@/components/Orderlist";
import TotalPrice from "@/components/TotalPrice";
import { useContext } from "react";
import { AllDataCollect } from "@/context/AllData";

const OrderClientList = ({ allitems, handleDelete }) => {
    const { session } = useContext(AllDataCollect);

    const filtered = allitems?.filter(
        (order) => order?.item?.email === session?.user?.email
    );
    console.log(filtered, 'filter');

    if (!filtered?.length) {
        return (
            <div className="text-center py-10 text-gray-500">
                <h2 className="text-xl font-semibold">No orders yet 🍽️</h2>
                <p>Go explore the menu and place your first order 🚀</p>
            </div>
        );
    }

    return (
        <>
            {filtered.map((order) => (
                <Orderlist
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                />
            ))}

            <TotalPrice allitems={filtered} />
        </>
    );
};

export default OrderClientList;