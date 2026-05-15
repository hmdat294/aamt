import { Outlet, NavLink } from 'react-router-dom';
import { logoutAdmin } from '../services/authService';


const handleLogout = () => {
    logoutAdmin();
    window.location.href = '/';
};

export default function AdminLayout() {
    return (
        <div className="min-h-screen flex bg-gray-100">

            <aside className="w-64 bg-black text-white p-5">
                <h1 className="text-2xl font-bold mb-8">
                    Admin Panel
                </h1>

                <nav className="flex flex-col gap-3">

                    <NavLink to="/admin"
                        className="px-4 py-2 rounded hover:bg-gray-800">
                        Dashboard
                    </NavLink>

                    <NavLink to="/admin/products"
                        className="px-4 py-2 rounded hover:bg-gray-800">
                        Product
                    </NavLink>

                    <NavLink to="/admin/blogs"
                        className="px-4 py-2 rounded hover:bg-gray-800">
                        Blogs
                    </NavLink>

                    <NavLink to="/admin/categories"
                        className="px-4 py-2 rounded hover:bg-gray-800">
                        Category
                    </NavLink>

                </nav>

                <div>
                    <button className='w-full'
                        onClick={handleLogout}>Logout</button>
                </div>
            </aside>

            <main className="flex-1 p-6">
                <Outlet />
            </main>

        </div>
    );
}