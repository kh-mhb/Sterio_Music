import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Spinner from '../Spinner/Spinner';



const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    if (user) {
        return children;
    }
    if (loading) {
        return <Spinner></Spinner>
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Private;