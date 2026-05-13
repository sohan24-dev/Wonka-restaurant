import { getitems } from "@/app/lib/data";
import Items from "./Items";
import { orderlist } from "@/app/lib/action";
import Link from "next/link";


const ItemHomeSection = async () => {
    const allitems = await getitems()
    // console.log(allitems);
    return (
        <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mx-3">
                {
                    allitems?.slice(0, 6).map(item => (
                        <Items
                            orderlist={orderlist}
                            key={item._id}
                            item={item}
                        />
                    ))
                }

            </div>
            <Link href={'/allitems'}><button className="mx-auto block mt-6 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer">
                View More
            </button></Link>
        </div>
    );
};

export default ItemHomeSection;