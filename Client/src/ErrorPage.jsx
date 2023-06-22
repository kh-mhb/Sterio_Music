import React from 'react';
import { Link } from 'react-router-dom';
import img0 from '../src/assets/error/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img src={img0} alt="" />
            <div className='container mx-auto text-center'>
                <Link className='btn btn-primary ' to='/'> Go Home</Link>

            </div>
        </div>
    );
};

export default ErrorPage;