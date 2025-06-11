import React from "react";

// /D:/mazeDigital/work/peptideMd/src/app/Dashboard/page.tsx


const stats = [
    { label: "Users", value: 120 },
    { label: "Projects", value: 8 },
    { label: "Tasks", value: 34 },
    { label: "Revenue", value: "$2,400" },
];

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
                    >
                        <div className="text-2xl font-semibold text-blue-600">{stat.value}</div>
                        <div className="text-gray-500 mt-2">{stat.label}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}