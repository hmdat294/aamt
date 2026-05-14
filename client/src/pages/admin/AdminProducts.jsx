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
    const [editForm, setEditForm] = useState({
        id: '',
        ...emptyForm,
        product_images: []
    });
    const [editImages, setEditImages] = useState([]);

    useEffect(() => { fetchData() }, []);

    useEffect(() => {
        if (categoriesProducts.length > 0) {
            setFormData(prev => ({
                ...prev,
                category_product_id:
                    categoriesProducts[0].id
            }));
        }
    }, [categoriesProducts]);

    const fetchData = async () => {
        try {
            const [
                resProducts,
                resCategories
            ] = await Promise.all([
                getProducts(),
                getCategoriesProduct()
            ]);
            setProducts(resProducts.data);
            setCategoriesProducts(
                resCategories.data
            );
        } catch (err) {
            console.log(err);
        }
    };

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
                category_product_id:
                    categoriesProducts?.[0]?.id || ''
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

    return (
        <div className='p-5'>

            <h1 className='text-2xl font-bold mb-5'>
                Add Product
            </h1>

            <form onSubmit={handleSubmit} className='space-y-4'>

                <select name='category_product_id' value={formData.category_product_id} onChange={handleChange} className='border p-3 rounded-lg w-full bg-white'  >

                    <option value=''>Chọn danh mục</option>

                    {categoriesProducts.map(
                        item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    )}

                </select>

                <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Product name' className='border p-3 rounded-lg w-full' />

                <CKEditor editor={ClassicEditor} data={formData.offer}
                    config={{ licenseKey: 'GPL', extraPlugins: [CustomUploadAdapterPlugin] }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setFormData(prev => ({
                            ...prev,
                            offer: data
                        }));
                    }} />

                <CKEditor editor={ClassicEditor} data={formData.description}
                    config={{ licenseKey: 'GPL', extraPlugins: [CustomUploadAdapterPlugin] }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setFormData(prev => ({
                            ...prev,
                            description: data
                        }));
                    }} />

                <input type='file' multiple onChange={handleImageChange} className='border p-3 rounded-lg w-full' />

                <button type='submit' className='bg-green-500 text-white px-5 py-3 rounded-lg'>Add Product</button>

            </form>

            <hr className='my-10' />

            <h1 className='text-2xl font-bold mb-5'>
                Products
            </h1>

            <div className='space-y-4'>

                {products.map(item => (

                    <div key={item.id} className='border p-5 rounded-xl flex justify-between items-center gap-5' >

                        <div className='flex-1'>

                            <h3 className='font-bold text-lg'>
                                {item.name}
                            </h3>

                            <p className="prose max-w-none">Offer:
                                <span dangerouslySetInnerHTML={{
                                    __html: renderContent(item.offer)
                                }}></span>
                            </p>

                            <p className="prose max-w-none">
                                <span dangerouslySetInnerHTML={{
                                    __html: renderContent(item.description)
                                }}></span>
                            </p>

                            <p>Category:{' '}{item.category_name}</p>

                        </div>

                        <div className='flex gap-2 flex-wrap w-64'>
                            {item.product_images?.map(
                                img => (
                                    <img key={img.id} src={img.url} alt='' className='w-20 h-20 object-cover rounded-lg border' />
                                )
                            )}
                        </div>

                        <div className='flex gap-3'>
                            <button onClick={() => handleEdit(item)} className='bg-yellow-500 text-white px-4 py-2 rounded-lg'>Edit</button>
                            <button onClick={() => handleDelete(item.id)} className='bg-red-500 text-white px-4 py-2 rounded-lg'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {openEditModal && (

                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5'>

                    <div className='bg-white p-6 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto'>

                        <h2 className='text-2xl font-bold mb-5'>
                            Edit Product
                        </h2>

                        <form onSubmit={handleUpdate} className='space-y-4' >

                            <select name='category_product_id' value={editForm.category_product_id} onChange={(e) => handleChange(e, true)} className='border p-3 rounded-lg w-full bg-white' >
                                {categoriesProducts.map(
                                    item => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    )
                                )}
                            </select>

                            <input type='text' name='name' value={editForm.name} onChange={(e) => handleChange(e, true)} placeholder='Name' className='border p-3 rounded-lg w-full' />

                            <CKEditor editor={ClassicEditor} data={editForm.offer}
                                config={{ licenseKey: 'GPL', extraPlugins: [CustomUploadAdapterPlugin] }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setEditForm(prev => ({
                                        ...prev,
                                        offer: data
                                    }));
                                }} />

                            <CKEditor editor={ClassicEditor} data={editForm.description}
                                config={{ licenseKey: 'GPL', extraPlugins: [CustomUploadAdapterPlugin] }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setEditForm(prev => ({
                                        ...prev,
                                        description: data
                                    }));
                                }} />


                            <div className='grid grid-cols-3 gap-3'>

                                {editForm.product_images?.map(
                                    (img) => (

                                        <div key={img.id} className='relative'  >

                                            <img src={img.url} alt='' className='w-full h-28 object-cover rounded-lg border' />
                                            <button type='button' onClick={() => handleDeleteImage(img.id)} className='absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full' >×</button>

                                        </div>
                                    )
                                )}

                            </div>

                            <input type='file' multiple onChange={(e) => handleImageChange(e, true)} className='border p-3 rounded-lg w-full' />

                            <div className='flex gap-3'>

                                <button type='submit' className='bg-blue-500 text-white px-5 py-3 rounded-lg' >Update</button>
                                <button type='button' onClick={() => setOpenEditModal(false)} className='bg-gray-300 px-5 py-3 rounded-lg' >Cancel</button>

                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}