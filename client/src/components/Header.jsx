import { Link } from 'react-router-dom';

export default function Header() {

    return (

        <header className="w-full">
            <div className='w-full h-[30px] bg-(--dark-blue) flex items-center'>
                <div className='container text-(--white) flex justify-end items-center gap-3'>
                    <p className='flex gap-2 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>

                        <span>8:00 :17:00</span>
                    </p>|
                    <p className='flex gap-2 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>

                        <span>Hotline: 0902.562.225</span>
                    </p>
                </div>
            </div>

            <div className='w-full h-[80px] flex items-center border-b border-(--dark-blue)'>
                <div className='container flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-5'>
                        <div className='w-[62px]'>
                            <img className='w-full' src="./src/assets/images/logo-aamt.png" alt="" />
                        </div>
                        <div className='relative'>
                            <input className='border border-(--dark-blue) rounded-[10px] h-[40px] w-[380px] px-3 inset-shadow-sm' type="search" placeholder='Tìm kiếm' />
                            <button className='absolute right-0 top-0 p-[10px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>

                        <nav className="flex justify-end items-center gap-5 text-lg">

                            <Link to="/">
                                <span className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    Trang chủ
                                </span>
                            </Link>

                            <Link to="/products">
                                <span className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    Sản phẩm
                                </span>
                            </Link>

                            <Link to="/">
                                <span>
                                    Uốn vòm
                                </span>
                            </Link>

                            <Link to="/">
                                <span>
                                    Bài viết
                                </span>
                            </Link>

                            <Link to="/">
                                <span>
                                    Giới thiệu
                                </span>
                            </Link>

                            {/* <Link to="/create-product">Create Product</Link> */}

                        </nav>

                    </div >
                </div >
            </div >

        </header >

    );

}