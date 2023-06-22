import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import useSeller from './hooks/useSeller/useSeller';
import Spinner from './Spinner/Spinner';



const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(user?.email)

    const location = useLocation();
    if (user && isSeller) {
        return children;
    }
    if (loading || sellerLoading) {
        return <Spinner></Spinner>
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;