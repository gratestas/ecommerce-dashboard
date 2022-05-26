import React from 'react'
import { Navigate,useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const {token} = useAuth();
    const location = useLocation();

    if(!token) return <Navigate to="/auth" replace />;
    return children;
}

export default ProtectedRoute