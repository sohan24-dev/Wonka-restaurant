"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";

export default function Navbar() {
    const { data: session, refetch } = authClient.useSession();
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isLoggedIn = !!session;

    const menuItems = isLoggedIn
        ? [
            { name: "Home", href: "/" },
            { name: "All Item", href: "/allitems" },
            { name: "Order Item", href: "/orderitems" },
        ]
        : [
            { name: "Home", href: "/" },
            { name: "All Item", href: "/allitems" },
            { name: "Order Item", href: "/orderitems" },
            { name: "Login", href: "/login" },
            { name: "Register", href: "/register" },
        ];

    const linkClass = (href) =>
        `relative px-3 py-2 transition ${pathname === href
            ? "text-[#F9F8ED] font-semibold"
            : "text-[#E5E3D4] hover:text-[#E0DECA]"
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-[#101828] shadow-md border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-white tracking-tight"
                >
                    My Restaurant
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className={linkClass(item.href)}>
                                {item.name}

                                {/* Active underline */}
                                {pathname === item.href && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F9F8ED] rounded-full" />
                                )}
                            </Link>
                        </li>
                    ))}

                    {/* Logout */}
                    {isLoggedIn && (
                        <button
                            onClick={async () => {
                                await authClient.signOut();
                                refetch();
                            }}
                            className="ml-4 px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    )}
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-3xl text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col gap-2 px-4 pb-4">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2 rounded-lg text-white hover:bg-[#E5E3D4] hover:text-[#F9F8ED]"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    {isLoggedIn && (
                        <button
                            onClick={async () => {
                                await authClient.signOut();
                                refetch();
                                setOpen(false);
                            }}
                            className="mt-2 px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    )}
                </ul>
            </div>
        </nav>
    );
}