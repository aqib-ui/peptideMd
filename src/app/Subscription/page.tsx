import React from 'react';

// /D:/mazeDigital/work/peptideMd/src/app/Subscription/page.tsx


const SubscriptionPage = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Subscription Plans</h1>
            <p className="mb-6">Choose the plan that best fits your needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Example subscription plans */}
                <div className="border rounded-lg p-6 shadow">
                    <h2 className="text-xl font-semibold mb-2">Basic</h2>
                    <p className="mb-4">$9.99/month</p>
                    <ul className="mb-4">
                        <li>✔️ Feature 1</li>
                        <li>✔️ Feature 2</li>
                    </ul>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
                </div>
                <div className="border rounded-lg p-6 shadow">
                    <h2 className="text-xl font-semibold mb-2">Pro</h2>
                    <p className="mb-4">$19.99/month</p>
                    <ul className="mb-4">
                        <li>✔️ Feature 1</li>
                        <li>✔️ Feature 2</li>
                        <li>✔️ Feature 3</li>
                    </ul>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
                </div>
                <div className="border rounded-lg p-6 shadow">
                    <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
                    <p className="mb-4">Contact us</p>
                    <ul className="mb-4">
                        <li>✔️ All Pro features</li>
                        <li>✔️ Dedicated support</li>
                        <li>✔️ Custom solutions</li>
                    </ul>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Contact Sales</button>
                </div>
            </div>
        </main>
    );
};

export default SubscriptionPage;