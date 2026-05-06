export default function BlogDetail() {

    return (
        <div>
            <section className="pb-[50px]">

                <div className="w-full h-[150px] bg-[url(/src/assets/images/home-banner-2.png)] bg-no-repeat bg-cover bg-bottom">
                    <div className="bg-(--dark-blue-70) w-full h-full">
                        <div className="container pt-[45px]">
                            <div className="flex justify-center items-center">
                                <p className="text-(--white) text-[35px] font-semibold border-b-3 w-[320px] text-center">CHI TIẾT BÀI VIẾT</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="pb-[100px]">
                <div className="container grid grid-cols-4 gap-20">

                    <aside className="col-span-3">
                        <p className="text-[35px]">ASEANWINDOW TIÊN PHONG DẪN ĐẦU XU HƯỚNG NỔI BẬT TẠI VIETBUILD HÀ NỘI 2025</p>
                        <div className="border-b-2 border-(--white-gray) w-full my-3"></div>
                        <img className='w-full h-[500px] rounded-[10px] shadow-md/20' src="/src/assets/images/post-image-1.png" alt="" />
                        <p className="text-justify mt-5">
                            ZEN PALACE là một dự án kiến trúc nổi bật tại Đà Nẵng, nơi vẻ đẹp thiên
                            nhiên gặp gỡ sự tinh tế của thiết kế hiện đại. Tại đây, toàn bộ hệ thống
                            cửa của công trình đều sử dụng nhôm Xingfa hệ Class A với sắc trắng
                            champagne (Z003), tạo nên không gian sống sang trọng và đẳng cấp.
                        </p>
                    </aside>

                    <article>
                        <div>
                            <p className="text-xl font-semibold text-(--gray)">BÀI VIẾT LIÊN QUAN</p>
                            <div className="border-b-2 border-(--white-gray) w-full my-2"></div>
                        </div>
                        <div>
                            <div className="border-b-2 border-(--white-gray) w-full mt-5 pb-2">
                                <a href="/">
                                    <img className='w-full h-[150px] rounded-[10px] shadow-md/20' src="/src/assets/images/post-image-1.png" alt="" />
                                    <p className="text-xl mt-3 text-(--gray)">ASEANWINDOW TIÊN PHONG DẪN ĐẦU XU HƯỚNG NỔI BẬT TẠI VIETBUILD HÀ NỘI 2025</p>
                                </a>
                            </div>
                            <div className="border-b-2 border-(--white-gray) w-full mt-5 pb-2">
                                <a href="/">
                                    <img className='w-full h-[150px] rounded-[10px] shadow-md/20' src="/src/assets/images/post-image-1.png" alt="" />
                                    <p className="text-xl mt-3 text-(--gray)">ASEANWINDOW TIÊN PHONG DẪN ĐẦU XU HƯỚNG NỔI BẬT TẠI VIETBUILD HÀ NỘI 2025</p>
                                </a>
                            </div>
                            <div className="w-full mt-5 pb-2">
                                <a href="/">
                                    <img className='w-full h-[150px] rounded-[10px] shadow-md/20' src="/src/assets/images/post-image-1.png" alt="" />
                                    <p className="text-xl mt-3 text-(--gray)">ASEANWINDOW TIÊN PHONG DẪN ĐẦU XU HƯỚNG NỔI BẬT TẠI VIETBUILD HÀ NỘI 2025</p>
                                </a>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </div>
    );

}