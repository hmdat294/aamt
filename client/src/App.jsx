import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductForm from './pages/admin/ProductForm';
import Blogs from './pages/Blogs';
import Arch from './pages/Arch';

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<MainLayout />}>

                    <Route index element={<Home />} />

                    <Route
                        path="products/:category_product_id"
                        element={<Products />}
                    />

                    {/* <Route
                        path="product/:id"
                        element={<ProductDetail />}
                    /> */}

                    <Route
                        path="arch"
                        element={<Arch />}
                    />

                    <Route
                        path="blogs"
                        element={<Blogs />}
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