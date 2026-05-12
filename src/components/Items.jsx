"use client"
import Image from "next/image";
import Link from "next/link";

export default function Items({ item, orderlist }) {


    const handleOrder = async () => {
        await orderlist(item);

    };
    return (
        <div className="w-full max-w-sm rounded-2xl shadow-lg border bg-[#E9E3DF] overflow-hidden">

            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col">
                <div className="flex-1">
                    <h2 className="text-xl font-bold truncate">
                        {item.strMeal}
                    </h2>

                    <p className="text-green-600 font-semibold">
                        Price : {item.price}
                    </p>

                    <p className="text-sm text-orange-500">
                        {item.isAvailable}
                    </p>
                </div>

                <div className="flex gap-3 mt-4">
                    <Link className="flex-1 bg-[#3667A6] text-white py-2 rounded-lg text-center" href={`/allitems/${item._id}`}>
                        Details
                    </Link>

                    <Link onClick={handleOrder} className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-center" href={'/'}>
                        Order Now
                    </Link>
                </div>
            </div>
        </div >
    );
}