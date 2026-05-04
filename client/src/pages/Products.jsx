import { useParams } from "react-router-dom";
import Product from "../components/Product";

export default function Products() {

    const { category_product_id } = useParams();

    return (
        <div>
            <section className="pb-[50px]">

                <div className="w-full h-[150px] bg-[url(/src/assets/images/home-banner-2.png)] bg-no-repeat bg-cover bg-bottom">
                    <div className="bg-(--dark-blue-70) w-full h-full">
                        <div className="container pt-[45px]">
                            <div className="flex justify-center items-center">
                                <p className="text-(--white) text-[35px] font-semibold border-b-3 w-[250px] text-center">SẢN PHẨM</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className="absolute top-[500px] w-full z-[-10]">
                <img className='w-full' src="/src/assets/images/home-vector-2.png" alt="" />
            </div>

            <section className="pb-[100px]">

                <div className="container">
                    <div className="flex justify-between items-center pb-[50px]">
                        <p className="text-(--dark-blue) text-[35px] font-semibold">PHỤ KIỆN</p>
                        <select name="" id="" className="border p-3 rounded-[10px] shadow-md/20 w-[250px]">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-3 gap-10 place-items-center">
                        <Product textStyle='text-lg text-(--white)' imageStyle='h-[370px]'></Product>
                        <Product textStyle='text-lg text-(--white)' imageStyle='h-[370px]'></Product>
                        <Product textStyle='text-lg text-(--white)' imageStyle='h-[370px]'></Product>
                        <Product textStyle='text-lg' imageStyle='h-[370px]'></Product>
                        <Product textStyle='text-lg' imageStyle='h-[370px]'></Product>
                        <Product textStyle='text-lg' imageStyle='h-[370px]'></Product>
                    </div>
                </div>

            </section>
        </div>
    );

}