import { useEffect, useState } from 'react';

import {

    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct

} from '../services/productService';



export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const res = await getProducts();

            setProducts(res.data);

        } catch (err) { console.log(err); }

    };

    const handleGetProduct = async (id) => {

        try {

            const res = await getProductById(id);

            console.log(res.data);

        } catch (err) { console.log(err); }

    };

    const handleCreateProduct = async () => {

        const data = {
            name: 'New Product',
            offer: 'Demo offer',
            description: 'Demo description',
            category_product_id: 1
        };

        try {

            const res = await createProduct(data);

            console.log(res.data);

            fetchProducts();

        } catch (err) { console.log(err); }

    };

    const handleUpdateProduct = async (id) => {

        const data = {
            name: 'Updated Product',
            offer: 'Updated offer',
            description: 'Updated description',
            category_product_id: 1
        };

        try {

            const res = await updateProduct(id, data);

            console.log(res.data);

            fetchProducts();

        } catch (err) { console.log(err); }

    };

    const handleDeleteProduct = async (id) => {

        try {

            const res = await deleteProduct(id);

            console.log(res.data);

            fetchProducts();

        } catch (err) { console.log(err); }

    };

    return (
        <div>
            <h1>Products</h1>

            <button onClick={handleCreateProduct}>
                Add Product
            </button>

            <hr />
            {
                products.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            marginBottom: '10px'
                        }}
                    >
                        <h3>{item.name}</h3>

                        <p>Offer: {item.offer}</p>

                        <p>Category: {item.category_name}</p>

                        <div class="flex gap-5">
                            <button onClick={() => handleGetProduct(item.id)}>
                                View
                            </button>

                            <button onClick={() => handleUpdateProduct(item.id)}>
                                Update
                            </button>

                            <button onClick={() => handleDeleteProduct(item.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}