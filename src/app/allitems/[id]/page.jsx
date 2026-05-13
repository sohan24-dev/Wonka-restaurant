import { detailsItems } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";


const DetailsPage = async ({ params }) => {
    const { id } = await params
    // console.log(id);
    const meal = await detailsItems(id)
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#F7F5EB]">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Image Section */}
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-3xl shadow-xl">
                    <Image
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        fill
                        priority
                        className="object-cover hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-5">

                    {/* Category */}
                    <div className="flex flex-wrap gap-3">

                        <span className="bg-orange-100 text-orange-600 text-xs sm:text-sm px-4 py-2 rounded-full font-medium">
                            {meal.strArea}
                        </span>

                        <span className="bg-green-100 text-green-600 text-xs sm:text-sm px-4 py-2 rounded-full font-medium">
                            {meal.strCountry}
                        </span>

                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        {meal.strMeal}
                    </h1>

                    {/* Price */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-green-600">
                        Price : {meal.price}
                    </h2>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-yellow-500 text-base sm:text-lg">
                        <span>⭐</span>
                        <span>{meal.rating} Rating</span>
                    </div>

                    {/* Availability */}
                    <div>
                        <span
                            className={`inline-block px-5 py-2 rounded-full text-sm font-semibold ${meal.isAvailable === "available"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                                }`}
                        >
                            {meal.isAvailable}
                        </span>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Description
                        </h3>

                        <p className="text-gray-600 leading-7 text-sm sm:text-base">
                            {meal.description}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href={'/allitems'} className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium transition">Back</Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsPage;