import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginAdmin } from '../../services/authService';

export default function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await loginAdmin({
                username,
                password
            });

            localStorage.setItem(
                'token',
                res.token
            );

            navigate('/admin');

        } catch (err) {

            alert(
                err.response?.data?.message ||
                'Login failed'
            );

        }
    };

    return (
        <form onSubmit={handleLogin}>

            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) =>
                    setUsername(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <button type="submit">
                Login
            </button>

        </form>
    );
}