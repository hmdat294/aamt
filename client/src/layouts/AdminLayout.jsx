import { Outlet, NavLink } from 'react-router-dom';
import { logoutAdmin } from '../services/authService';


const handleLogout = () => {
    logoutAdmin();
    window.location.href = '/';
};

export default function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex min-h-screen ml-64">
                <aside className="w-64 bg-black text-white p-5 flex flex-col fixed left-0 top-0 h-full">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold">Admin Panel</h1>
                        <p className="text-sm text-gray-300 mt-1">Manage your content</p>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <NavLink
                            to="/admin/dashboard"
                            className={({ isActive }) =>
                                [
                                    'px-4 py-2 rounded transition-colors',
                                    isActive ? 'bg-gray-800' : 'hover:bg-gray-800',
                                ].join(' ')
                            }
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/admin/products"
                            className={({ isActive }) =>
                                [
                                    'px-4 py-2 rounded transition-colors',
                                    isActive ? 'bg-gray-800' : 'hover:bg-gray-800',
                                ].join(' ')
                            }
                        >
                            Product
                        </NavLink>

                        <NavLink
                            to="/admin/blogs"
                            className={({ isActive }) =>
                                [
                                    'px-4 py-2 rounded transition-colors',
                                    isActive ? 'bg-gray-800' : 'hover:bg-gray-800',
                                ].join(' ')
                            }
                        >
                            Blogs
                        </NavLink>

                        <NavLink
                            to="/admin/categories"
                            className={({ isActive }) =>
                                [
                                    'px-4 py-2 rounded transition-colors',
                                    isActive ? 'bg-gray-800' : 'hover:bg-gray-800',
                                ].join(' ')
                            }
                        >
                            Category
                        </NavLink>
                    </nav>

                    <div className="mt-auto pt-6">
                        <button
                            type="button"
                            className="w-full px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition-colors text-white"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </aside>

                <main className="flex-1 p-4 sm:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}