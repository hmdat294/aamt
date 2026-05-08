import Product from "../components/Product";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Home() {

    const images = [
        "/src/assets/images/slide-image-jmd.png",
        "/src/assets/images/slide-image-ginifon.png",
        "/src/assets/images/slide-image-cmech.png",
        "/src/assets/images/slide-image-xingfa.png",
        "/src/assets/images/slide-image-3h.png",
    ];

    const slide_product_images = [
        "/src/assets/images/product-image-2.png",
        "/src/assets/images/product-image-2.png",
        "/src/assets/images/product-image-2.png",
    ];

    return (
        <div>
            <section>
                <img className='w-full' src="/src/assets/images/home-banner-1.png" alt="" />
            </section>

            <div className="absolute w-full z-[-10] translate-item-y-1">
                <img className='w-full' src="/src/assets/images/home-vector-1.png" alt="" />
            </div>

            <section className="container pt-[150px]">

                <div className="grid grid-cols-2 gap-8 mb-[100px]">
                    <div className="shadow-md/20 rounded-[10px] bg-(--white) overflow-hidden">
                        <div className="w-full h-[80px] bg-(--dark-blue) flex justify-center items-center">
                            <p className="border-b-2 border-(--white) w-[250px] p-1 mb-2 font-medium text-[25px] text-center text-(--white)">Máy sản xuất cửa</p>
                        </div>

                        <div className="relative">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                modules={[Autoplay, Navigation]}
                                speed={500}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: ".next-btn",
                                    prevEl: ".prev-btn",
                                }}
                            >
                                {slide_product_images.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={item}
                                            alt=""
                                            className="w-full"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <button className="cursor-pointer prev-btn absolute left-1 top-1/2 z-10 bg-(--white-gray) p-2 opacity-30 hover:opacity-70 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            <button className="cursor-pointer next-btn absolute right-1 top-1/2 z-10 bg-(--white-gray) p-2 opacity-30 hover:opacity-70 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 gap-8 place-items-center">
                        <Product textStyle='text-(--white)' imageStyle='h-[170px]'></Product>
                        <Product textStyle='text-(--white)' imageStyle='h-[170px]'></Product>
                        <Product textStyle='text-(--white)' imageStyle='h-[170px]'></Product>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div className="shadow-md/20 rounded-[10px] bg-(--white) overflow-hidden">
                        <div className="w-full h-[80px] bg-(--dark-blue) flex justify-center items-center">
                            <p className="border-b-2 border-(--white) w-[250px] p-1 mb-2 font-medium text-[25px] text-center text-(--white)">Máy sản xuất cửa</p>
                        </div>

                        <div className="relative">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                modules={[Autoplay, Navigation]}
                                speed={500}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: ".next-btn-1",
                                    prevEl: ".prev-btn-1",
                                }}
                            >
                                {slide_product_images.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={item}
                                            alt=""
                                            className="w-full"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <button className="cursor-pointer prev-btn-1 absolute left-1 top-1/2 z-10 bg-(--white-gray) p-2 opacity-30 hover:opacity-70 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            <button className="cursor-pointer next-btn-1 absolute right-1 top-1/2 z-10 bg-(--white-gray) p-2 opacity-30 hover:opacity-70 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 gap-8 place-items-center">
                        <Product imageStyle='h-[170px]'></Product>
                        <Product imageStyle='h-[170px]'></Product>
                        <Product imageStyle='h-[170px]'></Product>
                    </div>
                </div>

            </section>

            <section className="pt-[150px]">

                <div className="w-full h-[700px] bg-[url(/src/assets/images/home-banner-2.png)] bg-no-repeat bg-cover bg-center">
                    <div className="bg-(--dark-blue-70) w-full h-full">
                        <div className="container pt-[50px]">
                            <div className="flex justify-between items-center">
                                <p className="text-(--white) text-[35px] font-semibold border-b-3 w-[180px] text-center">UỐN VÒM</p>
                                <Link to="/arch" className="text-(--white) text-xl border-b w-[100px] hover:text-(--orange) text-center">Xem thêm</Link>
                            </div>
                            <div className="grid grid-cols-3 gap-10 mt-[30px]">
                                <div>
                                    <img className='w-full h-[500px] rounded-[10px] shadow-md/20' src="/src/assets/images/arch-image-1.png" alt="" />
                                </div>
                                <div>
                                    <img className='w-full h-[500px] rounded-[10px] shadow-md/20' src="/src/assets/images/arch-image-2.png" alt="" />
                                </div>
                                <div>
                                    <img className='w-full h-[500px] rounded-[10px] shadow-md/20' src="/src/assets/images/arch-image-3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[50px] bg-(--dark-blue)"></div>
                </div>

            </section>

            <section className="pt-[150px]">
                <div className="container">
                    <div>
                        <p className="text-(--dark-blue) text-[35px] font-semibold border-b-3 w-[140px] text-center">BÀI VIẾT</p>
                    </div>
                    <div className="grid grid-cols-2 gap-10 mt-[30px]">
                        <div className="grid grid-cols-2 gap-10">
                            <img className='w-full h-[200px] rounded-[10px] shadow-md/20' src="/src/assets/images/post-image-1.png" alt="" />
                            <a href="/" className="text-xl">ASEANWINDOW TIÊN PHONG DẪN ĐẦU XU HƯỚNG NỔI BẬT TẠI VIETBUILD HÀ NỘI 2025</a>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <img className='w-full h-[200px] rounded-[10px] shadow-md/20' src="/src/assets/images/post-image-1.png" alt="" />
                            <a href="/" className="text-xl">ASEANWINDOW TIÊN PHONG DẪN ĐẦU XU HƯỚNG NỔI BẬT TẠI VIETBUILD HÀ NỘI 2025</a>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <img className='w-full h-[200px] rounded-[10px] shadow-md/20' src="/src/assets/images/post-image-1.png" alt="" />
                            <a href="/" className="text-xl">ASEANWINDOW TIÊN PHONG DẪN ĐẦU XU HƯỚNG NỔI BẬT TẠI VIETBUILD HÀ NỘI 2025</a>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <img className='w-full h-[200px] rounded-[10px] shadow-md/20' src="/src/assets/images/post-image-1.png" alt="" />
                            <a href="/" className="text-xl">ASEANWINDOW TIÊN PHONG DẪN ĐẦU XU HƯỚNG NỔI BẬT TẠI VIETBUILD HÀ NỘI 2025</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[150px]">
                <div className="container">
                    <div>
                        <p className="text-(--dark-blue) text-[35px] font-semibold border-b-3 w-[340px] text-center">ĐỐI TÁC PHÂN PHỐI</p>
                    </div>
                    <div className="mt-[50px]">

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={4}
                            loop={true}
                            modules={[Autoplay]}
                            speed={1000}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                        >
                            {images.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item}
                                        alt=""
                                        className="w-full"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </section>
        </div>

    );

}