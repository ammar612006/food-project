import React from "react";

export default function OurProjectContent() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
            {/* Section: Project Overview */}
            <h2 className="text-3xl font-bold mb-4 text-orange-500">Our Project</h2>
            <p className="text-gray-700 mb-4">
                <strong>Luqma-E-Barkat</strong> is a community-driven initiative aimed at providing free meals to those in need. Our project focuses on collecting surplus food from local restaurants and distributing it to underprivileged communities.
            </p>
            <p className="text-gray-700 mb-4">
                We believe that no one should go hungry. Through our efforts, we aim to reduce food waste while supporting those who are less fortunate.
            </p>
            <p className="text-gray-700 mb-8">
                <em>Join us in making a difference in our community!</em>
            </p>

            {/* Section: How It Works */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">How It Works</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-800">
                    <li>Donors sign up and list available food.</li>
                    <li>Beneficiaries request food and receive notifications.</li>
                    <li>Volunteers pick up and deliver food.</li>
                    <li>Admins oversee operations and ensure safety.</li>
                </ol>
            </section>

            {/* Section: User Types */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Users</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-300 text-left text-sm">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-2 border font-semibold">User Type</th>
                                <th className="px-4 py-2 border font-semibold">Role</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            <tr>
                                <td className="px-4 py-2 border">Donors</td>
                                <td className="px-4 py-2 border">List and schedule food donations</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Beneficiaries</td>
                                <td className="px-4 py-2 border">Request and receive food</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Volunteers</td>
                                <td className="px-4 py-2 border">Deliver food from donors to donees</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Admins</td>
                                <td className="px-4 py-2 border">Manage users and ensure safety</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Support Staff</td>
                                <td className="px-4 py-2 border">Provide user and technical support</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
