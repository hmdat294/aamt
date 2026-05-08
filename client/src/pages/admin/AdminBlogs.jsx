import { useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AdminBlogs() {

    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');

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

    async function handleSave() {

        try {

            const response = await fetch(
                'http://localhost:5000/api/posts',
                {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({

                        title,

                        content: description,

                        category_post_id,
                    }),
                }
            );

            const data = await response.json();

            console.log(data);

        } catch (error) {

            console.error(error);
        }
    }

    return (

        <div className="max-w-4xl mx-auto p-5">

            <h1 className="text-3xl font-bold mb-5">
                Create Blog
            </h1>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {

                    setTitle(e.target.value);
                }}
                className="
                    w-full
                    border
                    p-3
                    rounded-lg
                    mb-5
                "
            />

            <CKEditor

                editor={ClassicEditor}

                data={description}

                config={{

                    extraPlugins: [
                        CustomUploadAdapterPlugin,
                    ],
                }}

                onChange={(event, editor) => {

                    setDescription(
                        editor.getData()
                    );
                }}
            />

            <button
                onClick={handleSave}
                className="
                    mt-5
                    bg-black
                    text-white
                    px-5
                    py-3
                    rounded-lg
                "
            >
                Save Blog
            </button>

        </div>
    );
}