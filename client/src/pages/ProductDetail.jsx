import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";
import { useState } from "react";
import ModalContact from "../components/ModalContact";

export default function ProductDetail() {

    const { category_product_id } = useParams();

    const images = [
        "/src/assets/images/product-image-1.png",
        "/src/assets/images/product-image-2.png",
        "/src/assets/images/product-image-1.png",
        "/src/assets/images/product-image-2.png",
    ];

    const [activeImage, setActiveImage] = useState(images[0]);

    const tabs = [
        {
            id: 1,
            category_arch_id: 1,
            category_name: "Mô tả",
            title: "Đại lễ rộn ràng",
            content:
                `
                Đại lễ rộn ràng, ưu đãi ngập tràn – Cơ hội nhận ngay hàng loạt quà tặng 
                hấp dẫn như xe Honda SH Mode, Iphone 16 Promax, Voucher cực khủng trị giá 
                lên đến 5 triệu đồng. Đặc biệt, sở hữu ngay các sản phẩm nhôm Xingfa nhập 
                khẩu với mức giá cực kỳ ưu đãi – Cơ hội mua nhôm Xingfa giá tốt, nhựa 
                Sparlee, phụ kiện GQ, 3H chưa từng có.

                Tháng 4 năm nay, không khí cả nước đang sục sôi hướng về ngày lễ trọng 
                đại – 50 năm Giải phóng miền Nam 30/4. Hòa trong niềm vui đó, ASEANWINDOW 
                chính thức khởi động chương trình ưu đãi lớn nhất năm với tên gọi “ĐẠI LỄ 
                RỘN RÀNG – ƯU ĐÃI NGẬP TRÀN”, mang đến hàng loạt phần quà giá trị và ưu đãi 
                chưa từng có, áp dụng từ ngày 01/04 đến hết 30/04/2025.

                Chương trình không chỉ là dịp tri ân Quý Khách hàng đã đồng hành cùng thương 
                hiệu,mà còn là cơ hội để sở hữu nhôm Xingfa nhập khẩu chính hãng cùng các vật 
                liệu xây dựng chất lượng cao, đồng thời nhận quà tặng giá trị lên tới hàng 
                chục triệu đồng.
                `
        },
        {
            id: 2,
            category_arch_id: 2,
            category_name: "Đánh giá",
            title: "Thông tin ưu đãi",
            content:
                "Thông tin ưu đãi dành cho vách kính và các sản phẩm kính cường lực cao cấp."
        }
    ];

    const [activeTab, setActiveTab] = useState(0);

    const [openModal, setOpenModal] = useState(false);

    return (

        <div className="py-[100px]">

            <section className="container grid grid-cols-2 gap-10">
                <aside>
                    <div className="border border-(--white-gray) shadow-md/20 rounded-[10px] overflow-hidden">

                        <div className="relative h-[500px] overflow-hidden p-10 flex items-center hover:scale-110 transition-transform">
                            <img src={activeImage} alt="" className="relative z-10 w-full max-h-full object-cover rounded-[10px]" />
                        </div>

                        <div className="grid grid-cols-4 border-t border-(--white-gray)">
                            {images.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => { setActiveImage(item); }}
                                    className={`h-[130px] p-2 ${index != 0 ? "border-l" : ""} border-(--white-gray) group relative overflow-hidden cursor-pointer
                                        flex items-center`}>

                                    <span className="absolute inset-0 bg-(--dark-blue) scale-y-0 origin-bottom transition-transform group-hover:scale-y-100"></span>
                                    <img src={item} alt="" className="relative z-10 w-full max-h-full object-cover rounded-[10px] bg-(--white)" />
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>
                <article>
                    <div className="border-b-2 border-(--white-gray) w-full pb-4">
                        <p className="text-[35px] font-semibold">Máy đột dập thủy lực 42 dao Ginifon: Đột mọi hệ nhôm, Gia công hoàn hảo</p>
                    </div>
                    <div className="w-full py-4">
                        <p className="text-lg text-red-600 font-semibold">Ưu đãi:</p>
                        <p className="text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            <span>
                                Ưu đãi...
                            </span>
                        </p>
                        <p className="text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            <span>
                                Ưu đãi...
                            </span>
                        </p>
                        <p className="text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            <span>
                                Ưu đãi...
                            </span>
                        </p>
                    </div>
                    <div className="w-full pb-4">
                        <p className="text-lg text-green-600 font-semibold">Chính sách:</p>
                        <p className="text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                            </svg>
                            <span>
                                Ưu đãi...
                            </span>
                        </p>
                        <p className="text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                            </svg>
                            <span>
                                Ưu đãi...
                            </span>
                        </p>
                        <p className="text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                            </svg>
                            <span>
                                Ưu đãi...
                            </span>
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="grid grid-cols-2 gap-5">
                            <button onClick={() => setOpenModal(true)}
                                className="col-span-2 group relative overflow-hidden w-full bg-(--white) font-bold cursor-pointer p-2 flex justify-center items-center gap-1 border border-(--dark-blue) text-(--dark-blue) shadow-md/20 rounded-[10px] transition-colors">

                                <span className="absolute inset-0 bg-(--dark-blue) scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                                <span className="absolute inset-0 bg-(--dark-blue) scale-x-0 origin-right transition-transform group-hover:scale-x-100 duration-300"></span>

                                <span
                                    className="relative flex items-center gap-1 group-hover:text-(--white) text-lg">
                                    LIÊN HỆ NGAY
                                </span>
                            </button>

                            <a href="tel:0902562225"
                                className="group relative overflow-hidden w-full bg-(--white) font-bold cursor-pointer p-2 flex justify-center items-center gap-1 border border-red-700 text-red-700 shadow-md/20 rounded-[10px] transition-colors">

                                <span className="absolute inset-0 bg-red-700 scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                                <span className="absolute inset-0 bg-red-700 scale-x-0 origin-right transition-transform group-hover:scale-x-100 duration-300"></span>

                                <span
                                    className="relative flex items-center gap-1 group-hover:text-(--white) text-lg">
                                    Hotline: 0902.562.225
                                </span>
                            </a>

                            <a href="https://zalo.me/0902562225" target="_blank" rel="noopener noreferrer"
                                className="group relative overflow-hidden w-full bg-(--white) font-bold cursor-pointer p-2 flex justify-center items-center gap-1 border border-blue-500 text-blue-500 shadow-md/20 rounded-[10px] transition-colors">

                                <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                                <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-right transition-transform group-hover:scale-x-100 duration-300"></span>

                                <span
                                    className="relative flex items-center gap-1 group-hover:text-(--white) text-lg">
                                    Zalo: 0902.562.225
                                </span>
                            </a>
                        </div>
                    </div>
                </article>
            </section>

            <div className="absolute top-[800px] w-full z-[-10]">
                <img className='w-full' src="/src/assets/images/home-vector-3.png" alt="" />
            </div>

            <section className="container py-[100px]">

                <div className="flex items-end gap-1">

                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(index)}
                            className={`
                            px-5 py-2
                            text-lg
                            rounded-t-[10px]
                            border
                            border-(--white-gray)
                            bg-(--white)
                            mb-[-1px]
                            cursor-pointer
                            ${activeTab === index
                                    ? "border-b-0 font-semibold"
                                    : "hover:text-(--orange)"
                                }
                        `}
                        >
                            {tab.category_name}
                        </button>
                    ))}
                </div>

                <div className="bg-white border border-(--white-gray) p-5 rounded-b-[10px] shadow-md/10">

                    <p className="font-semibold">
                        {tabs[activeTab].title}
                    </p>

                    <p className="text-(--gray)">
                        {tabs[activeTab].content}
                    </p>

                </div>
            </section>

            <section className="container">
                <div className="border-b-2 border-(--white) w-[400px] mb-10">
                    <p className="text-(--dark-blue) text-[35px] font-semibold text-(--white)">SẢN PHẨM LIÊN QUAN</p>
                </div>
                <div className="grid grid-cols-3 gap-10 place-items-center">
                    <Product textStyle='text-lg' imageStyle='h-[370px]'></Product>
                    <Product textStyle='text-lg' imageStyle='h-[370px]'></Product>
                    <Product textStyle='text-lg' imageStyle='h-[370px]'></Product>
                </div>
            </section>

            <ModalContact open={openModal} setOpen={setOpenModal}></ModalContact>

        </div>

    );

}