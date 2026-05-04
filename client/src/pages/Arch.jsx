import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Arch() {

    const tabs = [
        {
            id: 1,
            category_arch_id: 1,
            category_name: "Đặt biệt",
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
            category_name: "Vách kính",
            title: "Thông tin ưu đãi",
            content:
                "Thông tin ưu đãi dành cho vách kính và các sản phẩm kính cường lực cao cấp."
        },
        {
            id: 3,
            category_arch_id: 3,
            category_name: "Cửa đi",
            title: "Các mẫu cửa đi",
            content:
                "Các mẫu cửa đi nhôm Xingfa hiện đại, chắc chắn và sang trọng."
        },
        {
            id: 4,
            category_arch_id: 4,
            category_name: "Cửa sổ",
            title: "Giải pháp cửa sổ",
            content:
                "Giải pháp cửa sổ chống ồn, cách nhiệt với thiết kế tối ưu."
        },
        {
            id: 5,
            category_arch_id: 5,
            category_name: "Mặt dựng",
            title: "Hệ mặt dựng kính",
            content:
                "Hệ mặt dựng kính cao cấp dành cho công trình hiện đại."
        }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <section className="pb-[50px]">

                <div className="w-full h-[150px] bg-[url(/src/assets/images/home-banner-2.png)] bg-no-repeat bg-cover bg-bottom">
                    <div className="bg-(--dark-blue-70) w-full h-full">
                        <div className="container pt-[45px]">
                            <div className="flex justify-center items-center">
                                <p className="text-(--white) text-[35px] font-semibold border-b-3 w-[300px] text-center">GIA CÔNG VÒM</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className="absolute top-[500px] w-full z-[-10]">
                <img className='w-full' src="/src/assets/images/home-vector-3.png" alt="" />
            </div>

            <section className="container py-[50px]">
                <div className="grid grid-cols-5 gap-20">
                    <div className="col-span-2 mt-[50px]">
                        <p className="text-justify text-[27px] font-semibold border-b-2 pb-5">Chuyên gia công từng chi tiết vòm nhôm với độ chính xác cao</p>
                        <p className="text-justify font-semibold mt-5">Chuyên gia công từng chi tiết vòm nhôm với độ chính xác cao</p>
                        <p className="text-justify mb-10">Với hệ thống máy móc hiện đại và kỹ thuật uốn vòm chuyên sâu, AAMT
                            đáp ứng mọi yêu cầu thiết kế cong - vòm cho các công trình kiến trúc.
                            Chúng tôi tiếp cận từng dự án với sự chăm chút và linh hoạt, đảm bảo
                            sản phẩm đầu ra đúng kỹ thuật - đẹp thẩm mỹ - đúng tiến độ.</p>

                        <button className="group relative overflow-hidden w-full bg-(--white) 
                        font-bold cursor-pointer p-3 flex justify-center items-center gap-1 
                        border border-(--dark-blue) text-(--dark-blue) shadow-md/20 rounded-[10px] 
                        transition-colors duration-300">

                            {/* lớp nền chạy từ trái sang phải */}
                            <span className="absolute inset-0 bg-(--dark-blue) scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

                            {/* nội dung */}
                            <span className="relative flex items-center gap-1 group-hover:text-(--white) text-xl">
                                LIÊN HỆ BÁO GIÁ NGAY
                            </span>
                        </button>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 gap-10 mt-[30px]">
                        <div className="mt-[150px]">
                            <img className='w-full h-[300px] rounded-[10px] shadow-md/20' src="/src/assets/images/arch-image-1.png" alt="" />
                        </div>
                        <div className="mt-[75px]">
                            <img className='w-full h-[300px] rounded-[10px] shadow-md/20' src="/src/assets/images/arch-image-2.png" alt="" />
                        </div>
                        <div>
                            <img className='w-full h-[300px] rounded-[10px] shadow-md/20' src="/src/assets/images/arch-image-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-[100px]">
                <div className="w-full mx-auto">

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
                                        : ""
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
                </div>
            </section>
        </div>
    );

}