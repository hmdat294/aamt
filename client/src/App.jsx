import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductForm from './pages/ProductForm';

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<MainLayout />}>

                    <Route index element={<Home />} />

                    <Route
                        path="products"
                        element={<Products />}
                    />

                    <Route
                        path="create-product"
                        element={<ProductForm />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}