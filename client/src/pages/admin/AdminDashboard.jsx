import { useEffect, useState } from 'react';
import { getPosts } from '../../services/blogService';
import { getProducts } from '../../services/productService';
import {
    getCategoriesPost,
    getCategoriesProduct,
} from '../../services/categoryService';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        categories: 0,
        products: 0,
        posts: 0,
    });
    const [loading, setLoading] = useState(true);

    async function fetchStats() {
        try {
            const [
                resPosts,
                resProducts,
                resCatPost,
                resCatProduct,
            ] = await Promise.all([
                getPosts(),
                getProducts(),
                getCategoriesPost(),
                getCategoriesProduct(),
            ]);

            const postCategories = resCatPost.data?.length ?? 0;
            const productCategories = resCatProduct.data?.length ?? 0;

            setStats({
                categories: postCategories + productCategories,
                products: resProducts.data?.length ?? 0,
                posts: resPosts.data?.length ?? 0,
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchStats();
    }, []);

    const cards = [
        {
            label: 'Danh mục',
            value: stats.categories,
            hint: 'Blog + Sản phẩm',
            accent: 'bg-violet-100 text-violet-700',
        },
        {
            label: 'Sản phẩm',
            value: stats.products,
            hint: 'Tổng sản phẩm',
            accent: 'bg-emerald-100 text-emerald-700',
        },
        {
            label: 'Bài viết',
            value: stats.posts,
            hint: 'Tổng bài blog',
            accent: 'bg-sky-100 text-sky-700',
        },
    ];

    const card_banners = [
        {
            label: 'Banner main',
            value: stats.categories,
            hint: 'Tổng số lượng',
            accent: 'bg-violet-100 text-violet-700',
        },
        {
            label: 'Banner 1',
            value: stats.products,
            hint: 'Tổng số lượng',
            accent: 'bg-emerald-100 text-emerald-700',
        },
        {
            label: 'Banner 2',
            value: stats.posts,
            hint: 'Tổng số lượng',
            accent: 'bg-sky-100 text-sky-700',
        },
    ];

    return (
        <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-gray-600 mt-1">
                    Tổng quan số lượng danh mục, sản phẩm và bài viết.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.label}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-sm text-gray-500">{card.label}</p>
                                <h2 className="text-3xl font-bold mt-2 tabular-nums">
                                    {loading ? '—' : card.value}
                                </h2>
                                <p className="text-xs text-gray-400 mt-2">{card.hint}</p>
                            </div>
                            <span
                                className={`text-xs font-medium px-2.5 py-1 rounded-full ${card.accent}`}>
                                Live
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h1 className="text-2xl font-bold">Home Banner</h1>
                <p className="text-gray-600 mt-1">
                    Tổng quan số lượng banner.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {card_banners.map((card) => (
                    <div
                        key={card.label}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-sm text-gray-500">{card.label}</p>
                                <h2 className="text-3xl font-bold mt-2 tabular-nums">
                                    {loading ? '—' : card.value}
                                </h2>
                                <p className="text-xs text-gray-400 mt-2">{card.hint}</p>
                            </div>
                            <span
                                className={`text-xs font-medium px-2.5 py-1 rounded-full ${card.accent}`}>
                                Live
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}