import React from 'react';
import SideBar from '../../components/SideBar';

export default function Products() {
    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-800">
            {/* Sidebar */}
            <SideBar />
            {/* Main Content */}
            <main className="flex-1 p-8">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Products</h2>
                    <div className="relative">
                        <input type="text" placeholder="Search product" className="pl-4 pr-4 py-2 rounded-md border border-gray-300 w-42" />
                    </div>
                </header>

                {/* Cards Section */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold">99,999</h3>
                        <p className="text-sm text-gray-600">Orders This Month</p>
                        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-11/12 h-full bg-blue-500"></div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold">999</h3>
                        <p className="text-sm text-gray-600">New Customers This Month</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold">16,614</h3>
                        <p className="text-sm text-gray-600">Average Daily Sales</p>
                    </div>
                </div>

                {/* Orders Table */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Product Orders</h3>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-sm text-gray-500">Avg. xx orders per day</p>
                        <input type="text" placeholder="Search" className="py-2 px-4 border rounded-md w-64" />
                    </div>
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="py-2 border-b">ORDER ID</th>
                                <th className="py-2 border-b">CREATED</th>
                                <th className="py-2 border-b">CUSTOMER</th>
                                <th className="py-2 border-b">TOTAL</th>
                                <th className="py-2 border-b">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(10)].map((_, i) => (
                                <tr key={i} className="border-b">
                                    <td className="py-2">#ORD-100{i}</td>
                                    <td className="py-2">2025-05-09</td>
                                    <td className="py-2">Customer {i + 1}</td>
                                    <td className="py-2">$1000</td>
                                    <td className="py-2">Completed</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
