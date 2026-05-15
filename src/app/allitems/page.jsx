import Items from "@/components/Items";
import { getitems } from "../lib/data";
import { orderlist } from "../lib/action";

const AllItems = async () => {
    const allitems = await getitems();

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mx-3">
            {allitems.map(item => (
                <Items orderlist={orderlist} key={item._id} item={item} />
            ))}
        </div>
    );
};

export default AllItems;