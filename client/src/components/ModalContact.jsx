import React, { useEffect, useState } from "react";
import { getProvinces } from "../services/provincesService";

export default function ModalContact({
    open,
    setOpen,
}) {

    if (!open) return null;

    const [provinces, setProvinces] = useState([]);

    useEffect(() => {

        fetchProvinces();

    }, []);

    const fetchProvinces = async () => {

        try {

            const res = await getProvinces();

            setProvinces(res.data);

        } catch (err) { console.log(err); }

    };

    return (

        <div className="fixed inset-0 bg-(--black-50) z-[999] flex justify-center items-center"
            onClick={() => setOpen(false)}>

            <div onClick={(e) => e.stopPropagation()}
                className="relative container w-full max-w-[calc(1190px-20%)] h-full max-h-[600px] bg-(--white) 
                rounded-[10px] p-2 shadow-md/20 animate-[modal_0.3s_ease] grid grid-cols-2 gap-10">
                <div className="w-full h-full">
                    <img className='w-full h-full rounded-[10px]' src="/src/assets/images/modal-image-1.png" alt="" />
                </div>

                <div>

                    <button onClick={() => setOpen(false)}
                        className="absolute top-2 right-2 cursor-pointer hover:text-(--orange) transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col gap-3 justify-center h-full pr-3 -ml-5">

                        <div className="flex gap-3 items-center font-semibold text-lg">
                            <img className='w-[62px]' src="/src/assets/images/logo-aamt.png" alt="" />
                            <p>CÔNG TY TNHH <br></br> MÁY SẢN XUẤT CỬA AAMT</p>
                        </div>

                        <div>
                            <label>
                                <span className="text-(--gray) text-lg">Họ và Tên</span>
                                <input className="w-full block border border-(--dark-blue) rounded-[10px] py-3 px-5 inset-shadow-sm bg-(--white)"
                                    type="text" placeholder="Vui lòng nhập họ và tên" />
                            </label>
                        </div>

                        <div>
                            <label>
                                <span className="text-(--gray) text-lg">Số điện thoại</span>
                                <input className="w-full block border border-(--dark-blue) rounded-[10px] py-3 px-5 inset-shadow-sm bg-(--white)"
                                    type="text" placeholder="Vui lòng nhập số điện thoại" />
                            </label>
                        </div>

                        <div>
                            <label>
                                <span className="text-(--gray) text-lg">Tỉnh thành</span>
                                <select className="w-full block border border-(--dark-blue) rounded-[10px] py-3 px-5 inset-shadow-sm bg-(--white)">
                                    <option>Chọn tỉnh thành</option>

                                    {provinces.map((province) => (
                                        <option
                                            key={province.code}
                                            value={province.name}
                                        >
                                            {province.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                <span className="text-(--gray) text-lg">Sản phẩm quan tâm</span>
                                <input className="w-full block border border-(--dark-blue) rounded-[10px] py-3 px-5 inset-shadow-sm bg-(--white)"
                                    type="text" placeholder="Vui lòng nhập họ và tên" />
                            </label>
                        </div>

                        <button
                            className="group relative overflow-hidden w-full bg-(--white) 
                            font-bold cursor-pointer p-3 flex justify-center items-center gap-1 
                            border border-(--dark-blue) text-(--dark-blue) shadow-md/20 rounded-[10px] 
                            transition-colors duration-300 mt-3">

                            {/* lớp nền chạy từ trái sang phải */}
                            <span className="absolute inset-0 bg-(--dark-blue) scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

                            {/* nội dung */}
                            <span className="relative flex items-center gap-1 group-hover:text-(--white) text-lg">
                                NHẬN BÁO GIÁ NGAY
                            </span>
                        </button>

                        <div>
                            <p className="text-sm text-(--gray)">
                                Hãy cho chúng tôi biết bạn đang cần gì, chúng tôi sẽ liên hệ với bạn qua thông tin bên trên trong thời gian sớm nhất!
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}