import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation
} from 'react-router-dom';
import { useEffect } from 'react';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Arch from './pages/Arch';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import ScrollToTop from "./components/ScrollToTop";

import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminBlogs from './pages/admin/AdminBlogs';
import AdminCategory from './pages/admin/AdminCategory';
import Login from './pages/auth/Login';
import PrivateRoute from './components/PrivateRoute';

export default function App() {

    return (

        <BrowserRouter>

            <ScrollToTop></ScrollToTop>

            <Routes>

                {/* CLIENT ROUTES */}
                <Route path="/" element={<MainLayout />}>

                    <Route index element={<Home />} />

                    <Route
                        path="products/:category_product_id"
                        element={<Products />}
                    />

                    <Route
                        path="product/:product_id"
                        element={<ProductDetail />}
                    />

                    <Route
                        path="arch"
                        element={<Arch />}
                    />

                    <Route
                        path="blogs"
                        element={<Blogs />}
                    />

                    <Route
                        path="blog/:blog_id"
                        element={<BlogDetail />}
                    />

                    <Route
                        path="about_us"
                        element={<AboutUs />}
                    />
                </Route>

                {/* LOGIN ROUTES */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* ADMIN ROUTES */}
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <AdminLayout />
                        </PrivateRoute>
                    }>

                    <Route
                        index
                        element={<Navigate to="/admin/dashboard" replace />}
                    />

                    <Route
                        path="dashboard"
                        element={<AdminDashboard />}
                    />

                    <Route
                        path="products"
                        element={<AdminProducts />}
                    />

                    <Route
                        path="blogs"
                        element={<AdminBlogs />}
                    />

                    <Route
                        path="categories"
                        element={<AdminCategory />}
                    />

                </Route>

                {/* FALLBACK */}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>

        </BrowserRouter>

    );

}
