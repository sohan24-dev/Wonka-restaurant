"use client";

import { useContext } from "react";
import { AllDataCollect } from "@/context/AllData";
import Orderlist from "@/components/Orderlist";
import TotalPrice from "@/components/TotalPrice";

const OrderClientList = ({ allitems, handleDelete }) => {
    const { session } = useContext(AllDataCollect);

    const filtered = allitems?.filter(
        (order) => session?.user?.email === order?.item?.email
    );

    return (
        <>
            {filtered?.map((order) => (
                <Orderlist
                    handleDelete={handleDelete}
                    key={order._id}
                    order={order}
                />
            ))}

            <TotalPrice allitems={filtered} />
        </>
    );
};

export default OrderClientList;