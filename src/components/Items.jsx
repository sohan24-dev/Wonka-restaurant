"use client";

import { authClient } from "@/app/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Items({ item, orderlist }) {
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const email = session?.user?.email;
    const id = session?.user?.id;
    const name = session?.user?.name;
    // console.log(name, 'name');

    const { strMeal, strMealThumb, price } = item;

    const orderitem = {
        name: strMeal,
        img: strMealThumb,
        price,
        email,
        id,
        customer: name,
        createdAt: new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }),
    };


    const handleOrder = async () => {
        if (!session) {
            toast.error("Please login first");
            router.push("/login");
            return;
        }
        const { data: tokenData } = await authClient.token()
        // console.log(tokenData.token);

        toast.success("Order placed successfully");
        await orderlist(orderitem, tokenData);
    };

    return (
        <div className="w-full rounded-2xl shadow-lg border bg-[#E9E3DF] overflow-hidden">

            <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    fill
                    sizes="(max-width: 640px) 100vw, 224px"
                    className="object-cover"
                />
            </div>

            <div className="p-4 flex flex-col">
                <h2 className="text-xl font-bold truncate">{item.strMeal}</h2>

                <p className="text-green-600 font-semibold">
                    Price : {item.price}
                </p>

                <p className="text-sm text-orange-500">
                    {item.isAvailable}
                </p>

                <div className="flex gap-3 mt-4">
                    <Link
                        className="flex-1 bg-[#3667A6] text-white py-2 rounded-lg text-center"
                        href={`/allitems/${item._id}`}
                    >
                        Details
                    </Link>

                    <button
                        onClick={handleOrder}
                        className="cursor-pointer flex-1 bg-orange-500 text-white py-2 rounded-lg"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
}