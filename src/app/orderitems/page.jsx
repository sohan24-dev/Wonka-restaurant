


import TotalPrice from "@/components/TotalPrice";
import { orderallitems } from "../lib/data";
import Orderlist from "@/components/Orderlist";
import { handleDelete } from "../lib/action";

const OrderlistAll = async () => {
    const allitems = await orderallitems();

    console.log("Server:", allitems);
    // console.log(allitems?.email);

    return (
        <div className="my-2">
            {allitems?.map((order, index) => <Orderlist key={index} allitems={allitems} handleDelete={handleDelete} order={order}></Orderlist>)}
            <TotalPrice allitems={allitems}></TotalPrice>
        </div>
    );
};

export default OrderlistAll;