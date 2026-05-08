// src/pages/admin/AdminDashboard.jsx

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">
                Admin Dashboard
            </h1>

            <div className="grid grid-cols-4 gap-5">

                <div className="bg-white p-5 rounded-xl shadow">
                    <p>Total Products</p>
                    <h2 className="text-2xl font-bold mt-2">
                        120
                    </h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <p>Total Orders</p>
                    <h2 className="text-2xl font-bold mt-2">
                        45
                    </h2>
                </div>

            </div>
        </div>
    );
}