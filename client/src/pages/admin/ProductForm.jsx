import { useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



export default function ProductForm() {

    const [description, setDescription] = useState('');

    // const handleImageChange = (e) => {

    //     setFormData({
    //         ...formData,
    //         images: e.target.files
    //     });

    // };

    // const data = new FormData();

    // data.append(
    //     'category_product_id',
    //     formData.category_product_id
    // );

    // data.append('name', formData.name);

    // data.append('offer', formData.offer);

    // data.append(
    //     'description',
    //     formData.description
    // );



    // for (let i = 0; i < formData.images.length; i++) {

    //     data.append(
    //         'images',
    //         formData.images[i]
    //     );

    // }

    return (
//         <img
//     src={`http://localhost:5000/uploads/${img}`}
//     alt=""
// />

        <div className="max-w-3xl mx-auto p-5">

            <h1 className="text-3xl font-bold mb-5">
                Create Product
            </h1>



            <CKEditor

                editor={ClassicEditor}

                data={description}

                onChange={(event, editor) => {

                    const data = editor.getData();

                    setDescription(data);

                }}

            />



            <button
                onClick={() => console.log(description)}
                className="mt-5 bg-black text-white px-5 py-3 rounded-lg"
            >
                Save
            </button>

        </div>

    );

}