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
    const [editForm, setEditForm] = useState({
        id: '',
        ...emptyForm
    });

    useEffect(() => { fetchData() }, []);

    useEffect(() => {

        if (categoriesPosts.length > 0) {

            setFormData(prev => ({
                ...prev,
                category_post_id:
                    categoriesPosts[0].id
            }));
        }

    }, [categoriesPosts]);

    const fetchData = async () => {

        try {

            const [
                resPosts,
                resCategories
            ] = await Promise.all([
                getPosts(),
                getCategoriesPost()
            ]);

            setPosts(resPosts.data);
            setCategoriesPosts(resCategories.data);

        } catch (err) {
            console.log(err);
        }
    };

    function CustomUploadAdapter(loader) {

        return {
            upload: async () => {
                const file = await loader.file;
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve({ default: reader.result, });
                    reader.readAsDataURL(file);
                });
            },
        };
    }

    function CustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return CustomUploadAdapter(loader);
        };
    }

    const handleCreatePost =
        async () => {
            try {
                await createPost({
                    title: formData.title,
                    content: formData.content,
                    category_post_id: Number(formData.category_post_id)
                });
                setFormData({ ...emptyForm, category_post_id: categoriesPosts?.[0]?.id || '' });
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

    const handleUpdate =
        async () => {
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

    const handleDelete =
        async (id) => {

            const confirmDelete = window.confirm('Delete this post?');
            if (!confirmDelete) return;

            try {
                await deletePost(id);
                fetchData();
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

        <div className='max-w-6xl mx-auto p-5'>

            <h1 className='text-3xl font-bold mb-5'>
                Create Blog
            </h1>

            <div className='grid grid-cols-2 gap-5 mb-5'>

                <input type='text' placeholder='Title' value={formData.title}
                    onChange={(e) =>
                        setFormData(prev => ({
                            ...prev,
                            title: e.target.value
                        }))}
                    className='bg-white border p-3 rounded-lg' />

                <select value={formData.category_post_id}
                    onChange={(e) =>
                        setFormData(prev => ({
                            ...prev,
                            category_post_id: e.target.value
                        }))}
                    className='bg-white border p-3 rounded-lg'>

                    {categoriesPosts.map(
                        item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    )}
                </select>

            </div>

            <CKEditor editor={ClassicEditor} data={formData.content}
                config={{ licenseKey: 'GPL', extraPlugins: [CustomUploadAdapterPlugin] }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setFormData(prev => ({
                        ...prev,
                        content: data
                    }));
                }} />

            <button onClick={handleCreatePost} className='mt-5 bg-black text-white px-5 py-3 rounded-lg'>Save Blog</button>

            <div className='space-y-5 mt-10'>

                {posts.map(item => (
                    <div key={item.id} className='border p-5 rounded-xl' >
                        <div className='flex justify-between items-start mb-5'>
                            <div>
                                <h2 className='text-xl font-bold'> {item.title} </h2>
                                <p>Category:{' '}{item.category_name} </p>
                            </div>

                            <div className='flex gap-3'>
                                <button onClick={() => handleEdit(item)} className='bg-yellow-500 text-white px-4 py-2 rounded-lg'>Edit</button>
                                <button onClick={() => handleDelete(item.id)} className='bg-red-500 text-white px-4 py-2 rounded-lg'>Delete </button>
                            </div>
                        </div>

                        <div
                            className='prose max-w-none'
                            dangerouslySetInnerHTML={{
                                __html: renderContent(item.content)
                            }} />
                    </div>
                ))}
            </div>

            {openEditModal && (

                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5'>

                    <div className='bg-white w-full max-w-4xl p-6 rounded-2xl max-h-[90vh] overflow-y-auto'>

                        <h2 className='text-2xl font-bold mb-5'>
                            Edit Blog
                        </h2>

                        <div className='grid grid-cols-2 gap-5 mb-5'>

                            <input type='text' value={editForm.title} onChange={(e) =>
                                setEditForm(prev => ({
                                    ...prev,
                                    title: e.target.value
                                }))}
                                className='border p-3 rounded-lg' />

                            <select value={editForm.category_post_id} onChange={(e) =>
                                setEditForm(prev => ({
                                    ...prev,
                                    category_post_id: e.target.value
                                }))}
                                className='border p-3 rounded-lg'>

                                {categoriesPosts.map(
                                    item => (
                                        <option key={item.id} value={item.id} >{item.name} </option>
                                    )
                                )}
                            </select>

                        </div>

                        <CKEditor
                            editor={ClassicEditor} data={editForm.content}
                            config={{ licenseKey: 'GPL', extraPlugins: [CustomUploadAdapterPlugin] }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setEditForm(prev => ({
                                    ...prev,
                                    content: data
                                }));
                            }}
                        />

                        <div className='flex gap-3 mt-5'>
                            <button onClick={handleUpdate} className='bg-blue-500 text-white px-5 py-3 rounded-lg'>Update</button>
                            <button onClick={() => setOpenEditModal(false)} className='bg-gray-300 px-5 py-3 rounded-lg'>Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}