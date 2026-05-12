"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function BannerSlider() {
    const slides = [
        {
            title: "Welcome to Wonka Restaurant",
            desc: "Where every bite tells a story of flavor, freshness, and passion. Enjoy handcrafted dishes made with love.",
            img: "https://i.ibb.co.com/jvdvnShF/Screenshot-2026-05-12-210113.png",
        },
        {
            title: "Fresh & Delicious Meals",
            desc: "We use only the freshest ingredients to bring you unforgettable taste in every dish you order.",
            img: "https://i.ibb.co.com/zhhtP23K/Screenshot-2026-05-11-222842.png",
        },
        {
            title: "Order Online Easily",
            desc: "Fast delivery, smooth ordering system, and your favorite food delivered hot to your door.",
            img: "https://i.ibb.co.com/hFtpZNQ3/Screenshot-2026-05-12-205757.png",
        },
    ];

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="w-full h-[450px]"
        >
            {slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-[450px]">
                        {/* Image */}
                        <Image
                            src={item.img}
                            alt="banner"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center px-10 md:px-20">
                            <div className="max-w-xl text-white">
                                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                    {item.title}
                                </h1>

                                <p className="mt-4 text-gray-200 text-sm md:text-lg leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="mt-6 flex gap-4">
                                    <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-medium transition">
                                        Order Now
                                    </button>

                                    <button className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition">
                                        View Menu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}