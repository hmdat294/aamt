import Product from "../components/Product";

export default function Home() {

    return (
        <div>
            <section>
                <img className='w-full' src="/src/assets/images/home-banner-1.png" alt="" />
            </section>

            <div className="absolute w-full z-[-10]">
                <img className='w-full' src="/src/assets/images/home-vector-1.png" alt="" />
            </div>

            <section className="container pt-[150px]">

                <div className="grid grid-cols-2 gap-8 mb-[100px]">
                    <div className="shadow-md/20 rounded-[10px] bg-(--white) overflow-hidden">
                        <div className="w-full h-[80px] bg-(--dark-blue) flex justify-center items-center">
                            <p className="border-b-2 border-(--white) w-[250px] p-1 mb-2 font-medium text-[25px] text-center text-(--white)">Máy sản xuất cửa</p>
                        </div>
                        <img className='w-full' src="/src/assets/images/product-image-2.png" alt="" />
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
                        <img className='w-full' src="/src/assets/images/product-image-2.png" alt="" />
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
                                <a href="/" className="text-(--white) text-xl border-b w-[100px] hover:text-(--orange) text-center">Xem thêm</a>
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
                    <div className="grid grid-cols-4 gap-20 mt-[30px]">
                        <img className='w-full' src="/src/assets/images/slide-image-jmd.png" alt="" />
                        <img className='w-full' src="/src/assets/images/slide-image-ginifon.png" alt="" />
                        <img className='w-full' src="/src/assets/images/slide-image-cmech.png" alt="" />
                        <img className='w-full' src="/src/assets/images/slide-image-xingfa.png" alt="" />
                    </div>
                </div>
            </section>
        </div>

    );

}