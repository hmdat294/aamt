import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductForm from './pages/admin/ProductForm';
import Arch from './pages/Arch';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import { useEffect } from 'react';
import ScrollToTop from "./components/ScrollToTop";

export default function App() {

    return (

        <BrowserRouter>

            <ScrollToTop></ScrollToTop>

            <Routes>

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

                    {/* <Route
                        path="create-product"
                        element={<ProductForm />}
                    /> */}

                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}
