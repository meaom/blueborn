import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const SideBar = () => {
    const router = useRouter();

    // Example user data, replace with real data fetching logic
    const user = {
        name: "Jaymin Leonheart",
        email: "jay@purpleist.com"
    };

    // Sidebar navigation items
    const navItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Products", path: "/products" },
        { name: "Orders", path: "/orders" },
        { name: "Customers", path: "/customers" },
        { name: "Logout", path: "/logout" },
    ];

    return (
        <aside className="w-64 bg-white shadow-md text-black">
            <div className="p-6 border-b border-gray-200">
                <Link href="/">
                    <Image
                        src="/mini-logo-black.png"
                        alt="Blue Born Logo"
                        width={100}
                        height={100}
                        className="w-[100px] max-w-[70%]"
                    />
                </Link>
                <h1 className="text-2xl font-semibold mb-2">BlueBorn</h1>
                <Link href="/profile">
                    <div className="text-sm text-gray-600 cursor-pointer">{user.name}</div>
                </Link>
                <div className="text-xs text-gray-400">{user.email}</div>
            </div>
            <nav className="mt-6">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path} className={`px-6 py-3 cursor-pointer ${router.pathname === item.path ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-100'}`}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
