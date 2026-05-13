import { useEffect, useState } from 'react';

import {
  getCategoriesPost,
  createCategoryPost,
  updateCategoryPost,
  deleteCategoryPost,
} from '../../services/categoryService';

import {
  getCategoriesProduct,
  createCategoryProduct,
  updateCategoryProduct,
  deleteCategoryProduct,
} from '../../services/categoryService';

export default function AdminCategory() {
  
  const [categories_posts, setCategoriesPosts] = useState([]);
  const [categories_products, setCategoriesProducts] = useState([]);

  const [createNamePost, setCreateNamePost] = useState('');
  const [createNameProduct, setCreateNameProduct] = useState('');

  const [editNamePost, setEditNamePost] = useState('');
  const [editNameProduct, setEditNameProduct] = useState('');

  const [editingItemPost, setEditingItemPost] = useState(null);
  const [editingItemProduct, setEditingItemProduct] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {

      const resPost = await getCategoriesPost();
      setCategoriesPosts(resPost.data);

      const resProduct = await getCategoriesProduct();
      setCategoriesProducts(resProduct.data);

    } catch (err) {
      console.log(err);
    }
  };

  async function handleCreateCategoryPost() {
    try {
      await createCategoryPost({
        name: createNamePost,
      });

      setCreateNamePost('');

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleCreateCategoryProduct() {
    try {
      await createCategoryProduct({
        name: createNameProduct,
      });

      setCreateNameProduct('');

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateCategoryPost() {
    try {
      await updateCategoryPost(editingItemPost.id, {
        name: editNamePost,
      });

      setEditingItemPost(null);
      setEditNamePost('');

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateCategoryProduct() {
    try {
      await updateCategoryProduct(editingItemProduct.id, {
        name: editNameProduct,
      });

      setEditingItemProduct(null);
      setEditNameProduct('');

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeletePost(id) {
    const confirmDeletePost = window.confirm(
      'Bạn có chắc muốn xóa?'
    );

    if (!confirmDeletePost) return;

    try {
      await deleteCategoryPost(id);

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteProduct(id) {
    const confirmDeleteProduct = window.confirm(
      'Bạn có chắc muốn xóa?'
    );

    if (!confirmDeleteProduct) return;

    try {
      await deleteCategoryProduct(id);

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  function openEditDialogPost(item) {
    setEditingItemPost(item);
    setEditNamePost(item.name);
  }

  function openEditDialogProduct(item) {
    setEditingItemProduct(item);
    setEditNameProduct(item.name);
  }

  function closeDialogPost() {
    setEditingItemPost(null);
    setEditNamePost('');
  }

  function closeDialogProduct() {
    setEditingItemProduct(null);
    setEditNameProduct('');
  }

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-5">
          Category Blog
        </h1>

        <div className="flex gap-5 mb-5">
          <input
            type="text"
            className="bg-white w-full border p-3 rounded"
            placeholder="Category name"
            value={createNamePost}
            onChange={(e) =>
              setCreateNamePost(e.target.value)
            }
          />

          <button
            onClick={handleCreateCategoryPost}
            className="bg-black text-white px-5 py-3 rounded"
          >
            Create
          </button>
        </div>

        {
          categories_posts.map((item) => (
            <div
              key={item.id}
              className="border p-4 mb-4 rounded flex items-center justify-between"
            >
              <h3>{item.name}</h3>

              <div className="flex gap-3">
                <button
                  onClick={() => openEditDialogPost(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeletePost(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        }

        {
          editingItemPost && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-[400px]">
                <h2 className="text-xl font-bold mb-5">
                  Edit Category
                </h2>

                <input
                  type="text"
                  className="w-full border p-3 rounded mb-5"
                  value={editNamePost}
                  onChange={(e) =>
                    setEditNamePost(e.target.value)
                  }
                />

                <div className="flex justify-end gap-3">
                  <button
                    onClick={closeDialogPost}
                    className="border px-4 py-2 rounded"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleUpdateCategoryPost}
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-5">
          Category Product
        </h1>

        <div className="flex gap-5 mb-5">
          <input
            type="text"
            className="bg-white w-full border p-3 rounded"
            placeholder="Category name"
            value={createNameProduct}
            onChange={(e) =>
              setCreateNameProduct(e.target.value)
            }
          />

          <button
            onClick={handleCreateCategoryProduct}
            className="bg-black text-white px-5 py-3 rounded"
          >
            Create
          </button>
        </div>

        {
          categories_products.map((item) => (
            <div
              key={item.id}
              className="border p-4 mb-4 rounded flex items-center justify-between"
            >
              <h3>{item.name}</h3>

              <div className="flex gap-3">
                <button
                  onClick={() => openEditDialogProduct(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteProduct(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        }

        {
          editingItemProduct && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-[400px]">
                <h2 className="text-xl font-bold mb-5">
                  Edit Category
                </h2>

                <input
                  type="text"
                  className="w-full border p-3 rounded mb-5"
                  value={editNameProduct}
                  onChange={(e) =>
                    setEditNameProduct(e.target.value)
                  }
                />

                <div className="flex justify-end gap-3">
                  <button
                    onClick={closeDialogProduct}
                    className="border px-4 py-2 rounded"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleUpdateCategoryProduct}
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}