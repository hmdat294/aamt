import { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
    getPosts,
    createPost,
    updatePost,
    deletePost
} from '../../services/blogService';

import { getCategoriesPost } from '../../services/categoryService';
import CustomUploadAdapterPlugin from '../../components/UploadAdapter';
import limitHtmlText from '../../components/LimitText';

export default function AdminBlogs() {

    const emptyForm = {
        title: '',
        content: '',
        category_post_id: ''
    };

    const [posts, setPosts] = useState([]);
    const [categoriesPosts, setCategoriesPosts] = useState([]);
    const [formData, setFormData] = useState(emptyForm);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [activeAddBlog, setActiveAddBlog] = useState(false);
    const [editForm, setEditForm] = useState({
        id: '',
        ...emptyForm
    });
    const [editImages, setEditImages] = useState([]);
    const [images, setImages] = useState([]);

    async function fetchData() {
        try {
            const [resPosts, resCategories] = await Promise.all([
                getPosts(),
                getCategoriesPost(),
            ]);

            setPosts(resPosts.data);
            setCategoriesPosts(resCategories.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (categoriesPosts.length > 0) {
            setFormData(prev => ({
                ...prev,
                category_post_id: categoriesPosts[0].id,
            }));
        }
    }, [categoriesPosts]);

    const buildFormData = (data, imageFile) => {

        const form = new FormData();

        form.append('title', data.title);
        form.append('content', data.content);
        form.append('category_post_id', data.category_post_id);

        if (imageFile) form.append('thumbnail', imageFile[0]);

        return form;
    };

    const handleCreatePost = async (e) => {

        e.preventDefault();
        try {

            const data = buildFormData(formData, images);

            console.log(formData);
            console.log(images);

            await createPost(data);
            setFormData({
                ...emptyForm,
                category_post_id: categoriesPosts?.[0]?.id || ''
            });
            setImages([]);
            fetchData();

        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (post) => {

        setEditForm({
            id: post.id,
            title: post.title,
            content: post.content,
            category_post_id:
                post.category_post_id
        });

        setOpenEditModal(true);
    };

    const handleUpdate = async () => {
        try {
            await updatePost(
                editForm.id,
                {
                    title: editForm.title,
                    content: editForm.content,
                    category_post_id: Number(editForm.category_post_id)
                }
            );
            setOpenEditModal(false);
            fetchData();
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm('Delete this post?');
        if (!confirmDelete) return;

        try {
            await deletePost(id);
            fetchData();
        } catch (err) {
            console.log(err);
        }
    };

    const handleImageChange = (e, isEdit = false) => {
        if (isEdit) setEditImages(e.target.files);
        else setImages(e.target.files);
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

    return (
        <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Blog Management</h1>
                    <p className="text-gray-600 mt-1">
                        Create, edit, and delete blog posts.
                    </p>
                </div>
                <button
                    type="button" onClick={() => setActiveAddBlog(!activeAddBlog)}
                    className="cursor-pointer bg-black text-white px-5 py-3 rounded-md hover:bg-gray-900 transition-colors">
                    {activeAddBlog ? 'Close' : 'Add Blog'}
                </button>
            </div>

            {activeAddBlog && (
                <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-5">Create Blog</h2>

                    <form onSubmit={handleCreatePost} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value, }))} className={inputClass} />

                            <select
                                value={formData.category_post_id}
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        category_post_id: e.target.value,
                                    }))
                                }
                                className={inputClass}
                            >
                                {categoriesPosts.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <CKEditor
                                editor={ClassicEditor}
                                data={formData.content}
                                config={{
                                    licenseKey: 'GPL',
                                    extraPlugins: [CustomUploadAdapterPlugin],
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setFormData(prev => ({
                                        ...prev,
                                        content: data,
                                    }));
                                }}
                            />
                        </div>

                        <input type="file" onChange={handleImageChange}
                            className={`${inputClass} file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-gray-100 file:text-sm`} />

                        <button type="submit"
                            className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-900 transition-colors" >
                            Save Blog
                        </button>
                    </form>
                </section>
            )}

            <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-5">
                    All Blogs ({posts.length})
                </h2>

                {posts.length === 0 ? (
                    <div className="text-gray-500 py-8 text-center border border-dashed border-gray-200 rounded-md">
                        No blog posts yet.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {posts.map((item) => (
                            <article key={item.id} className="border border-gray-200 p-5 rounded-lg flex gap-5 align-center" >
                                {item.thumbnail && (<div className='w-200'>
                                    <img src={item.thumbnail} className='rounded-[10px]' alt="" />
                                </div>)}
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold">{item.title}</h3>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Danh mục: {item.category_name}
                                            </p>
                                        </div>

                                        <div className="flex gap-3 shrink-0">
                                            <button type="button" onClick={() => handleEdit(item)} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors">
                                                Edit
                                            </button>
                                            <button type="button" onClick={() => handleDelete(item.id)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                                                Delete
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className="prose max-w-none text-gray-700">
                                        {limitHtmlText(item.content, 300)}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            {openEditModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div
                        role="dialog"
                        aria-modal="true"
                        className="bg-white w-full max-w-4xl p-6 rounded-xl max-h-[90vh] overflow-y-auto shadow-lg"
                    >
                        <h2 className="text-xl font-bold mb-5">Edit Blog</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                value={editForm.title}
                                onChange={(e) =>
                                    setEditForm(prev => ({
                                        ...prev,
                                        title: e.target.value,
                                    }))
                                }
                                className={inputClass}
                            />

                            <select
                                value={editForm.category_post_id}
                                onChange={(e) =>
                                    setEditForm(prev => ({
                                        ...prev,
                                        category_post_id: e.target.value,
                                    }))
                                }
                                className={inputClass}
                            >
                                {categoriesPosts.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="border border-gray-200 rounded-md overflow-hidden mb-5">
                            <CKEditor
                                editor={ClassicEditor}
                                data={editForm.content}
                                config={{
                                    licenseKey: 'GPL',
                                    extraPlugins: [CustomUploadAdapterPlugin],
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setEditForm(prev => ({
                                        ...prev,
                                        content: data,
                                    }));
                                }}
                            />
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setOpenEditModal(false)}
                                className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleUpdate}
                                className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition-colors"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}