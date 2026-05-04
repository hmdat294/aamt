export default function Footer() {

    return (

        <footer className="w-full h-[480px] bg-[url(./src/assets/images/background-footer.png)] bg-cover">

            <div className="bg-(--dark-blue-50) w-full h-full">

                <div className="container py-[50px] grid grid-cols-2 gap-5">
                    <div className="bg-(--white-70) rounded-[10px] p-5 flex flex-col gap-5">
                        <div className="flex justify-start items-center gap-3">
                            <img className="w-[62px]" src="./src/assets/images/logo-aamt.png" alt="" />
                            <p className="text-xl font-medium">CÔNG TY TNHH MÁY SẢN XUẤT CỬA AAMT</p>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                            </svg>
                            <p className="text-lg">Số B22/463i, ấp 2, đường Trần Đại Nghĩa, xã Tân Nhựt, TP. HCM</p>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                            <p className="text-lg">0902.562.225</p>
                        </div>
                        <div className="w-full rounded-[10px] overflow-hidden bg-(--white) shadow-sm p-5">
                            <div className="w-[500px] m-auto">
                                <div className="fb-page"
                                    data-href="https://www.facebook.com/maynhomnhuaAseandoor"
                                    data-width="500"
                                    data-small-header="false"
                                    data-adapt-container-width="true"
                                    data-hide-cover="false"
                                    data-show-facepile="true">
                                    <blockquote cite="https://www.facebook.com/maynhomnhuaAseandoor" className="fb-xfbml-parse-ignore">
                                        <a href="https://www.facebook.com/maynhomnhuaAseandoor">Máy sản xuất cửa Nhôm Xingfa, cửa nhựa</a>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-(--white-70) rounded-[10px] p-5">
                            <p className="font-medium pb-3">Chúng tôi chuyên uốn vòm nhôm theo yêu cầu kỹ thuật cao</p>
                            <p className="text-justify">Với kinh nghiệm thực tiễn và trang thiết bị chuyên dụng, AAMT là đơn vị đồng hành
                                đáng tin cậy của các nhà thầu và xưởng nhôm trong gia công vòm chất lượng cao,
                                thẩm mỹ vượt trội.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-lg text-(--white)">Yêu cầu liên hệ:</p>
                            <input type="text" name="" id="" placeholder="Tên"
                                className="bg-(--white) p-3 rounded-[10px] inset-shadow-sm w-full" />
                            <input type="text" name="" id="" placeholder="Số điện thoại"
                                className="bg-(--white) p-3 rounded-[10px] inset-shadow-sm w-full" />
                            <div className="flex justify-end">
                                <button className="bg-(--white) py-3 px-6 rounded-[10px] inset-shadow-sm text-(--dark-blue) border border-(--dark-blue) font-medium">GỬI NGAY</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="fb-root"></div>
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v25.0&appId=515608814071208"></script>

            </div>

        </footer>

    );

}