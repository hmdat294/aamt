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

  async function fetchCategories() {
    try {

      const resPost = await getCategoriesPost();
      setCategoriesPosts(resPost.data);

      const resProduct = await getCategoriesProduct();
      setCategoriesProducts(resProduct.data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

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
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold">Category Management</h1>
        <p className="text-gray-600 mt-1">
          Create, edit, and delete categories for blog and products.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blog categories */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-5">Category Blog</h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <input
              type="text"
              className="bg-white w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Category name"
              value={createNamePost}
              onChange={(e) => setCreateNamePost(e.target.value)}
            />

            <button
              type="button"
              onClick={handleCreateCategoryPost}
              className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-900 transition-colors"
            >
              Create
            </button>
          </div>

          {categories_posts.length === 0 ? (
            <div className="text-gray-500 py-6 text-center border border-dashed border-gray-200 rounded-md">
              No blog categories yet.
            </div>
          ) : (
            categories_posts.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 p-4 mb-4 rounded-lg flex items-center justify-between gap-3"
              >
                <h3 className="font-medium">{item.name}</h3>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => openEditDialogPost(item)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeletePost(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}

          {editingItemPost && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
              <div
                role="dialog"
                aria-modal="true"
                className="bg-white p-6 rounded-lg w-full max-w-[400px] shadow-lg"
              >
                <h2 className="text-xl font-bold mb-5">Edit Category</h2>

                <input
                  type="text"
                  className="w-full border border-gray-200 p-3 rounded-md mb-5 focus:outline-none focus:ring-2 focus:ring-black/10"
                  value={editNamePost}
                  onChange={(e) => setEditNamePost(e.target.value)}
                />

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeDialogPost}
                    className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleUpdateCategoryPost}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Product categories */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-5">Category Product</h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <input
              type="text"
              className="bg-white w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Category name"
              value={createNameProduct}
              onChange={(e) => setCreateNameProduct(e.target.value)}
            />

            <button
              type="button"
              onClick={handleCreateCategoryProduct}
              className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-900 transition-colors"
            >
              Create
            </button>
          </div>

          {categories_products.length === 0 ? (
            <div className="text-gray-500 py-6 text-center border border-dashed border-gray-200 rounded-md">
              No product categories yet.
            </div>
          ) : (
            categories_products.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 p-4 mb-4 rounded-lg flex items-center justify-between gap-3"
              >
                <h3 className="font-medium">{item.name}</h3>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => openEditDialogProduct(item)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteProduct(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}

          {editingItemProduct && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
              <div
                role="dialog"
                aria-modal="true"
                className="bg-white p-6 rounded-lg w-full max-w-[400px] shadow-lg"
              >
                <h2 className="text-xl font-bold mb-5">Edit Category</h2>

                <input
                  type="text"
                  className="w-full border border-gray-200 p-3 rounded-md mb-5 focus:outline-none focus:ring-2 focus:ring-black/10"
                  value={editNameProduct}
                  onChange={(e) => setEditNameProduct(e.target.value)}
                />

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeDialogProduct}
                    className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleUpdateCategoryProduct}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}