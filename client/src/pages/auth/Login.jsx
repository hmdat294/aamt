import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginAdmin } from '../../services/authService';
import { setToken } from '../../utils/authCookie';

export default function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await loginAdmin({
                username,
                password
            });

            setToken(res.token);

            navigate('/admin');

        } catch (err) {

            alert(
                err.response?.data?.message ||
                'Login failed'
            );

        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-[10px] shadow-xl p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Admin Login
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Đăng nhập để quản trị hệ thống
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleLogin}>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tài khoản
                        </label>

                        <input type="text" placeholder="Nhập tài khoản..." value={username} onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-[10px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                    </div>

                    <div className='relative'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mật khẩu
                        </label>

                        <input type={showPassword ? 'text' : 'password'} placeholder="Nhập mật khẩu..." value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-[10px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />

                        <button type="button" onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 bottom-1 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-poiter">

                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c1.997 0 3.894-.556 5.515-1.538M6.228 6.228A9.956 9.956 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.5a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m0 0a3 3 0 1 0 4.243 4.243m-4.242-4.242L9.88 9.88" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            )}

                        </button>

                    </div>

                    <button type="submit" className="group relative overflow-hidden w-full bg-(--white) font-bold cursor-pointer p-2 
                        flex justify-center items-center gap-1 border border-(--dark-blue) text-(--dark-blue) shadow-md/20 rounded-[10px] transition-colors">

                        <span className="absolute inset-0 bg-(--dark-blue) scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>

                        <span className="relative flex items-center gap-1 group-hover:text-(--white)">
                            Đăng nhập

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor" className="size-6" >
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </button>

                </form>

            </div>

        </div>
    );
}


