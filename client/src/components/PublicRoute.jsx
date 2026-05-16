import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/authCookie';

export default function PublicRoute({ children }) {

    const token = getToken();

    if (token) return <Navigate to="/admin" />;

    return children;
}