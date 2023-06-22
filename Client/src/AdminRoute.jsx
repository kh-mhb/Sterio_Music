import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Spinner from './Spinner/Spinner';
import { AuthContext } from './context/AuthProvider';
import useAdmin from './hooks/useAdmin/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    const location = useLocation();
    if (user && isAdmin) {
        return children;
    }
    if (loading || adminLoading) {
        return <Spinner></Spinner>
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;