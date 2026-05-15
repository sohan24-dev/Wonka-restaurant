import { orderallitems } from "../lib/data";
import OrderClient from "@/components/OrderClient";
import { handleDelete } from "../lib/action";

export const dynamic = "force-dynamic";

const OrderlistAll = async () => {
    const allitems = (await orderallitems()) || [];

    return (
        <div className="my-2">
            <OrderClient
                allitems={allitems}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default OrderlistAll;