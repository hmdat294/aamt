import { Link } from "react-router-dom";

export default function Product({ textStyle, imageStyle }) {

    return (

        <div className="flex flex-col gap-3 mb-5 group/img">
            <img className={`${imageStyle || "h-full"} w-full shadow-md/20 rounded-[10px] group-hover/img:scale-95 transition`} src="/src/assets/images/product-image-1.png" alt="" />
            <p className={`${textStyle || ""}`}>Máy cắt ke vĩnh cửu JVJM10-40: Tự động, Nhanh, Tiết kiệm</p>

            <Link to="/product/1" className="group relative overflow-hidden w-full bg-(--white) font-bold cursor-pointer p-2 
                flex justify-center items-center gap-1 border border-(--dark-blue) text-(--dark-blue) 
                shadow-md/20 rounded-[10px] transition-colors">

                <span className="absolute inset-0 bg-(--dark-blue) scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>

                <span className="relative flex items-center gap-1 group-hover:text-(--white)">
                    Xem thêm

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </span>
            </Link>

        </div>

    );

}