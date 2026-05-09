import { useEffect, useState } from 'react';

import {
  getCategoriesPost,
  createCategoryPost,
  updateCategoryPost,
  deleteCategoryPost,
} from '../../services/categoryService';

export default function AdminCategory() {
  const [categories_posts, setCategoriesPosts] = useState([]);

  const [createName, setCreateName] = useState('');

  const [editName, setEditName] = useState('');

  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await getCategoriesPost();

      setCategoriesPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  async function handleCreateCategoryPost() {
    try {
      await createCategoryPost({
        name: createName,
      });

      setCreateName('');

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateCategoryPost() {
    try {
      await updateCategoryPost(editingItem.id, {
        name: editName,
      });

      setEditingItem(null);
      setEditName('');

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      'Bạn có chắc muốn xóa?'
    );

    if (!confirmDelete) return;

    try {
      await deleteCategoryPost(id);

      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  function openEditDialog(item) {
    setEditingItem(item);

    setEditName(item.name);
  }

  function closeDialog() {
    setEditingItem(null);

    setEditName('');
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        Category
      </h1>

      <div className="flex gap-5 mb-5">
        <input
          type="text"
          className="bg-white w-full border p-3 rounded"
          placeholder="Category name"
          value={createName}
          onChange={(e) =>
            setCreateName(e.target.value)
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
                onClick={() => openEditDialog(item)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      }

      {
        editingItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-[400px]">
              <h2 className="text-xl font-bold mb-5">
                Edit Category
              </h2>

              <input
                type="text"
                className="w-full border p-3 rounded mb-5"
                value={editName}
                onChange={(e) =>
                  setEditName(e.target.value)
                }
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={closeDialog}
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
  );
}