
import { orderallitems } from "../lib/data";
import Orderlist from "@/components/Orderlist";
import TotalPrice from "@/components/TotalPrice";
import { handleDelete } from "../lib/action";

const OrderlistAll = async () => {
    const allitems = await orderallitems();
    // console.log(allitems, 'api res');
    // console.log(allitems?.item?.email, "email");
    return (
        <div className="my-2">
            {allitems.map((order) => (
                <Orderlist
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                />
            ))}

            <TotalPrice allitems={allitems} />
        </div>
    );
};

export default OrderlistAll;