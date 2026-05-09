import { useState, useEffect } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { getPosts, createPost } from '../../services/blogService';

import { getCategoriesPost } from '../../services/categoryService';

export default function AdminBlogs() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posts, setPosts] = useState([]);
    const [categories_posts, setCategoriesPosts] = useState([]);
    const [categoryId, setCategoryId] = useState(categories_posts?.[0]?.id || '');

    useEffect(() => { fetch(); }, []);

    const fetch = async () => {
        try {

            const res_post = await getPosts();
            setPosts(res_post.data);

            const res_category_post = await getCategoriesPost();
            setCategoriesPosts(res_category_post.data);

        } catch (err) { console.log(err); }
    };

    function CustomUploadAdapter(loader) {

        return {

            upload: async () => {

                const file = await loader.file;

                return new Promise((resolve) => {

                    const reader = new FileReader();

                    reader.onload = () => {

                        resolve({
                            default: reader.result,
                        });
                    };

                    reader.readAsDataURL(file);
                });
            },
        };
    }

    function CustomUploadAdapterPlugin(editor) {

        editor.plugins.get(
            'FileRepository'
        ).createUploadAdapter = (loader) => {

            return CustomUploadAdapter(loader);
        };
    }

    async function handleCratePost() {

        const data = {
            title,
            content: description,
            category_post_id: Number(categoryId),
        };

        console.log(data);

        try {
            const res = await createPost(data);
            fetch();
        } catch (err) { console.log(err); }

    }

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

        <div className="max-w-4xl mx-auto p-5">

            <h1 className="text-3xl font-bold mb-5"> Create Blog </h1>

            <div className='grid grid-cols-2 gap-5'>

                <input type="text" placeholder="Title" value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white w-full border p-3 rounded-lg mb-5" />

                <select name="" id=""
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className='bg-white w-full border p-3 rounded-lg mb-5'>
                    {
                        categories_posts.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
            </div>

            <CKEditor editor={ClassicEditor} data={description}
                config={{ licenseKey: 'GPL', extraPlugins: [CustomUploadAdapterPlugin,], }}
                onChange={(event, editor) => setDescription(editor.getData())} />

            <button
                onClick={handleCratePost}
                className="mt-5 bg-black text-white px-5 py-3 rounded-lg">
                Save Blog
            </button>

            {
                posts.map((item) => (
                    <div className='grid grid-cols-5' key={item.id}>

                        <p>{item.id}</p>
                        <p>{item.title}</p>
                        <p>{item.category_name}</p>
                        <div className="prose max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: renderContent(item.content),
                            }}>
                        </div>

                    </div>
                ))
            }

        </div>
    );
}