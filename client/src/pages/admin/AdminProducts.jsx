import { useEffect, useState } from 'react';

import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteProductImage
} from '../../services/productService';

import { getCategoriesProduct } from '../../services/categoryService';
import CustomUploadAdapterPlugin from '../../components/UploadAdapter';
import limitHtmlText from '../../components/LimitText';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AdminProducts() {

    const emptyForm = {
        category_product_id: '',
        name: '',
        offer: '',
        description: ''
    };

    const [products, setProducts] = useState([]);
    const [categoriesProducts, setCategoriesProducts] = useState([]);
    const [formData, setFormData] = useState(emptyForm);
    const [images, setImages] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [activeAddProduct, setActiveAddProduct] = useState(false);
    const [editForm, setEditForm] = useState({
        id: '',
        ...emptyForm,
        product_images: []
    });
    const [editImages, setEditImages] = useState([]);

    async function fetchData() {
        try {
            const [resProducts, resCategories] = await Promise.all([
                getProducts(),
                getCategoriesProduct(),
            ]);
            setProducts(resProducts.data);
            setCategoriesProducts(resCategories.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (categoriesProducts.length > 0) {
            setFormData(prev => ({
                ...prev,
                category_product_id: categoriesProducts[0].id,
            }));
        }
    }, [categoriesProducts]);

    const handleChange = (e, isEdit = false) => {
        const { name, value } = e.target;
        if (isEdit) setEditForm(prev => ({ ...prev, [name]: value }));
        else setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e, isEdit = false) => {
        if (isEdit) setEditImages(e.target.files);
        else setImages(e.target.files);
    };

    const buildFormData = (data, imageFiles) => {

        const form = new FormData();

        form.append('category_product_id', data.category_product_id);
        form.append('name', data.name);
        form.append('offer', data.offer);
        form.append('description', data.description);

        for (let i = 0; i < imageFiles.length; i++) {
            form.append(
                'images',
                imageFiles[i]
            );
        }

        return form;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

            const data = buildFormData(formData, images);

            console.log(formData);

            await createProduct(data);
            setFormData({
                ...emptyForm,
                category_product_id: categoriesProducts?.[0]?.id || ''
            });
            setImages([]);
            fetchData();

        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (product) => {

        setEditForm({
            id: product.id,
            category_product_id:
                product.category_product_id,
            name: product.name,
            offer: product.offer,
            description: product.description,
            product_images:
                product.product_images || []
        });

        setOpenEditModal(true);
    };

    const handleUpdate = async (e) => {

        e.preventDefault();
        try {

            const data = buildFormData(editForm, editImages);

            console.log(editForm);

            await updateProduct(editForm.id, data);
            setEditImages([]);
            setOpenEditModal(false);
            fetchData();

        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm('Delete this product?');

        if (!confirmDelete) return;

        try {
            await deleteProduct(id);
            fetchData();
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteImage = async (imageId) => {

        try {

            await deleteProductImage(imageId);

            setEditForm(prev => ({
                ...prev,
                product_images: prev.product_images.filter(img => img.id !== imageId)
            }));

        } catch (err) {
            console.log(err);
        }
    };

    const renderContent = (html) => {
        return html.replace(/<oembed url="(.*?)"><\/oembed>/g,
            (_, url) => {
                if (url.includes('youtu')) {
                    const videoId = url.split('/').pop().split('?')[0];
                    return `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
                }
                return url;
            }
        );
    };

    

    const inputClass =
        'bg-white w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/10';

    const ckConfig = {
        licenseKey: 'GPL',
        extraPlugins: [CustomUploadAdapterPlugin],
    };

    return (
        <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Product Management</h1>
                    <p className="text-gray-600 mt-1">
                        Create, edit, and delete products with images.
                    </p>
                </div>
                <button type="button" onClick={() => setActiveAddProduct(!activeAddProduct)}
                    className="cursor-pointer bg-black text-white px-5 py-3 rounded-md hover:bg-gray-900 transition-colors"
                >
                    {activeAddProduct ? 'Close' : 'Add Product'}
                </button>
            </div>

            {activeAddProduct && (
                <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-5">Add Product</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <select name="category_product_id" value={formData.category_product_id} onChange={handleChange} className={inputClass}>
                            <option value="">Chọn danh mục</option>
                            {categoriesProducts.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>

                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product name" className={inputClass} />

                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Offer</p>
                            <div className="border border-gray-200 rounded-md overflow-hidden">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={formData.offer}
                                    config={ckConfig}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setFormData(prev => ({
                                            ...prev,
                                            offer: data,
                                        }));
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Description</p>
                            <div className="border border-gray-200 rounded-md overflow-hidden">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={formData.description}
                                    config={ckConfig}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setFormData(prev => ({
                                            ...prev,
                                            description: data,
                                        }));
                                    }}
                                />
                            </div>
                        </div>

                        <input type="file" multiple onChange={handleImageChange} className={`${inputClass} file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-gray-100 file:text-sm`} />

                        <button type="submit" className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-900 transition-colors" >
                            Add Product
                        </button>
                    </form>
                </section>
            )}

            <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-5">
                    All Products ({products.length})
                </h2>

                {products.length === 0 ? (
                    <div className="text-gray-500 py-8 text-center border border-dashed border-gray-200 rounded-md">
                        No products yet.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-5">
                        {products.map((item) => (
                            <div key={item.id}
                                className="border border-gray-200 p-5 rounded-lg flex flex-col lg:flex-row gap-5">
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Danh mục: {item.category_name}
                                    </p>
                                    <p className="prose max-w-none text-sm mt-3 line-clamp-3">
                                        {limitHtmlText(item.offer, 100)}
                                    </p>
                                    <p className="prose max-w-none text-sm mt-2 line-clamp-3">
                                        {limitHtmlText(item.description, 200)}
                                    </p>
                                </div>

                                <div>
                                    <div className="mb-3 relative">
                                        <img
                                            src={item.product_images?.[0]?.url} alt=""
                                            className="w-40 h-40 object-cover rounded-md border border-gray-200" />
                                        <div className="absolute -top-1 -right-1 bg-red-500 text-white px-1 py-1/2 rounded-full text-sm font-semibold">
                                            +{item.product_images?.length - 1}
                                        </div>
                                    </div>

                                    <div className="flex gap-3 shrink-0 lg:flex-col lg:justify-center">
                                        <button type="button" onClick={() => handleEdit(item)} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors" >
                                            Edit
                                        </button>
                                        <button type="button" onClick={() => handleDelete(item.id)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors" >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {openEditModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div
                        role="dialog"
                        aria-modal="true"
                        className="bg-white p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg"
                    >
                        <h2 className="text-xl font-bold mb-5">Edit Product</h2>

                        <form onSubmit={handleUpdate} className="space-y-4">
                            <select
                                name="category_product_id"
                                value={editForm.category_product_id}
                                onChange={(e) => handleChange(e, true)}
                                className={inputClass}
                            >
                                {categoriesProducts.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="text"
                                name="name"
                                value={editForm.name}
                                onChange={(e) => handleChange(e, true)}
                                placeholder="Name"
                                className={inputClass}
                            />

                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Offer</p>
                                <div className="border border-gray-200 rounded-md overflow-hidden">
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={editForm.offer}
                                        config={ckConfig}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setEditForm(prev => ({
                                                ...prev,
                                                offer: data,
                                            }));
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Description</p>
                                <div className="border border-gray-200 rounded-md overflow-hidden">
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={editForm.description}
                                        config={ckConfig}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setEditForm(prev => ({
                                                ...prev,
                                                description: data,
                                            }));
                                        }}
                                    />
                                </div>
                            </div>

                            {editForm.product_images?.length > 0 && (
                                <div className="grid grid-cols-3 gap-3">
                                    {editForm.product_images.map((img) => (
                                        <div key={img.id} className="relative">
                                            <img
                                                src={img.url}
                                                alt=""
                                                className="w-full h-28 object-cover rounded-md border border-gray-200"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteImage(img.id)}
                                                className="absolute top-1 right-1 bg-red-600 text-white w-6 h-6 rounded-full text-sm hover:bg-red-700"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <input
                                type="file"
                                multiple
                                onChange={(e) => handleImageChange(e, true)}
                                className={`${inputClass} file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-gray-100 file:text-sm`}
                            />

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setOpenEditModal(false)}
                                    className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition-colors"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}