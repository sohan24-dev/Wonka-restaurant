
import TotalPrice from "@/components/TotalPrice";
import { orderallitems } from "../lib/data";
import Orderlist from "@/components/Orderlist";

const OrderlistAll = async () => {
    const allitems = await orderallitems();

    console.log("Server:", allitems);
    // console.log(allitems?.email);

    return (
        <div className="my-2">
            {allitems?.map((order, index) => <Orderlist key={index} allitems={allitems} order={order}></Orderlist>)}
            <TotalPrice allitems={allitems} />
        </div>
    );
};

export default OrderlistAll;