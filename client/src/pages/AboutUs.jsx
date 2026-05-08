import { useState } from "react";
import { useParams } from "react-router-dom";
import ModalContact from "../components/ModalContact";

export default function AboutUs() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <section className="mb-[100px]">
                <div className="w-full h-[700px] bg-[url(/src/assets/images/about-banner-1.png)] bg-no-repeat bg-cover bg-center">
                    <div className="bg-(--dark-blue-90) w-full h-full">
                        <div className="container pt-[80px]">
                            <div className="grid grid-cols-2 gap-20 place-items-center">
                                <div>
                                    <p className="text-(--white) text-[35px] font-semibold border-b-2 pb-5">Chúng tôi sẵn sàng đồng hành cùng mọi đối tác cần gia công vòm nhôm</p>
                                    <p className="text-(--white) text-justify mb-2 mt-5 font-semibold">Chuyên gia công từng chi tiết vòm nhôm với độ chính xác cao</p>
                                    <p className="text-(--white) text-justify my-2">Với hệ thống máy móc hiện đại và kỹ thuật uốn vòm chuyên sâu,
                                        AAMT đáp ứng mọi yêu cầu thiết kế cong - vòm cho các công
                                        trình kiến trúc. Chúng tôi tiếp cận từng dự án với sự chăm
                                        chút và linh hoạt, đảm bảo sản phẩm đầu ra đúng kỹ
                                        thuật - đẹp thẩm mỹ - đúng tiến độ.</p>
                                    <p className="text-(--white) text-justify mb-2 mt-5 font-semibold">Từ khâu tư vấn đến bàn giao sản phẩm uốn vòm hoàn thiện</p>
                                    <p className="text-(--white) text-justify my-2">AAMT đồng hành cùng bạn từ lúc lên ý tưởng thiết kế, chọn
                                        mẫu vòm nhôm, cho đến khâu gia công và bàn giao thành phẩm,
                                        đảm bảo tối ưu chi phí, đúng tiến độ và độ chính xác kỹ thuật
                                        cao nhất. Mỗi chi tiết đều được thực hiện với sự
                                        tận tâm và chuyên môn sâu.</p>

                                    <button onClick={() => setOpenModal(true)}
                                        className="mt-5 group relative overflow-hidden w-full font-bold cursor-pointer p-2 flex justify-center items-center gap-1 border border-(--white) text-(--white) shadow-md/20 rounded-[10px] transition-colors">
                                        <span className="absolute inset-0 bg-(--white) scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                                        <span className="absolute inset-0 bg-(--white) scale-x-0 origin-right transition-transform group-hover:scale-x-100 duration-300"></span>

                                        <span className="relative flex items-center gap-1 group-hover:text-(--dark-blue) text-lg">
                                            LIÊN HỆ BÁO GIÁ NGAY
                                        </span>
                                    </button>
                                </div>
                                <div>
                                    <img src="/src/assets/images/about-banner-1.png" className="bg-(--white-50) rounded-[10px]" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[50px] bg-(--dark-blue)"></div>
                </div>
            </section>

            <div className="absolute top-[1000px] w-full z-[-10] translate-item-y-1">
                <img className='w-full h-[700px]' src="/src/assets/images/about-vector-1.png" alt="" />
            </div>

            <section className="container grid grid-cols-4 gap-10 py-[100px]">
                <img className='w-full h-[350px] rounded-[10px] shadow-lg/30' src="/src/assets/images/about-image-1.png" alt="" />
                <img className='w-full h-[350px] rounded-[10px] shadow-lg/30 mt-[100px]' src="/src/assets/images/about-image-2.png" alt="" />
                <img className='w-full h-[350px] rounded-[10px] shadow-lg/30' src="/src/assets/images/about-image-3.png" alt="" />
                <img className='w-full h-[350px] rounded-[10px] shadow-lg/30 mt-[100px]' src="/src/assets/images/about-image-4.png" alt="" />
            </section>

            <section className="pt-[100px]">
                <div className="h-[1200px] w-full bg-(--dark-blue) radius-item">
                    <div className="container text-(--white) flex flex-col items-center gap-20 text-center py-[100px]">

                        <div className="max-w-[550px]">
                            <p className="border-b-2 pb-4 mb-5 text-[30px]">
                                Những gì chúng tôi mang đến cho bạn
                            </p>
                            <p className="text-lg">
                                Chúng tôi không chỉ phân phối máy móc sản xuất cửa nhôm – cửa nhựa chất lượng cao, mà còn đồng hành cùng khách hàng trong suốt hành trình sản xuất và hoàn thiện sản phẩm.
                            </p>
                        </div>

                        <div className="flex flex-row justify-center gap-20">
                            <div>
                                <p className="border-b-2 pb-4 mb-5 text-[30px]">
                                    Những gì chúng tôi mang đến cho bạn
                                </p>
                                <p className="text-lg">
                                    Chúng tôi không chỉ phân phối máy móc sản xuất cửa nhôm – cửa nhựa chất lượng cao, mà còn đồng hành cùng khách hàng trong suốt hành trình sản xuất và hoàn thiện sản phẩm.
                                </p>
                            </div>
                            <div>
                                <p className="border-b-2 pb-4 mb-5 text-[30px]">
                                    Những gì chúng tôi mang đến cho bạn
                                </p>
                                <p className="text-lg">
                                    Chúng tôi không chỉ phân phối máy móc sản xuất cửa nhôm – cửa nhựa chất lượng cao, mà còn đồng hành cùng khách hàng trong suốt hành trình sản xuất và hoàn thiện sản phẩm.
                                </p>
                            </div>
                            <div>
                                <p className="border-b-2 pb-4 mb-5 text-[30px]">
                                    Những gì chúng tôi mang đến cho bạn
                                </p>
                                <p className="text-lg">
                                    Chúng tôi không chỉ phân phối máy móc sản xuất cửa nhôm – cửa nhựa chất lượng cao, mà còn đồng hành cùng khách hàng trong suốt hành trình sản xuất và hoàn thiện sản phẩm.
                                </p>
                            </div>
                        </div>

                        <div className="w-[80%] h-[400px]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.987919710888!2d106.55787496657734!3d10.734094431100853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752de6b829e7db%3A0x3b4c5bd2e6ef488!2zQ8OUTkcgVFkgVE5ISCBD4busQSBT4buUIFZJ4buGVCBDSMOCVSDDgSBBU0VBTldJTkRPVw!5e1!3m2!1svi!2s!4v1778052351599!5m2!1svi!2s"
                                style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowFullScreen=""
                                className="w-full h-full rounded-[10px]"></iframe>
                        </div>

                    </div>
                </div>
            </section>
            
            <ModalContact open={openModal} setOpen={setOpenModal}></ModalContact>
        </div>
    );

}