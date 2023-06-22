import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

import Spinner from './Spinner/Spinner';
import SingleClass from './Components/SingleClass';
import { AuthContext } from './context/AuthProvider';

const MyClass = () => {
    const { user, logOut, setUserRoll } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const uri = `https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/product?email=${user.email}`;
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(uri, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    setUserRoll('Buyer');
                    logOut()
                        .then(() => {
                            localStorage.removeItem("accessToken");
                            navigate(from, { replace: true });
                        });
                } else {
                    return res.json(); // Return the parsed JSON data
                }
            })
            .then(data => {
                console.log(data);
                setIsLoading(false); // Set loading state to false
                setProducts(data); // Update products state with the fetched data
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error(error);
            });
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    console.log(products);

    return (
        <div>
            <h1 className='text-6xl text-center p-3 bebus my-3 mx-3 italic text-red-500 underline'>My Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-3'>
                {products.map(product => (
                    <SingleClass key={product._id} product={product}>
                        {/* {product?.issold ? (
                            <div className='w-full'>
                                <p className='text-xs gray-text'>Status: Already Sold</p>
                                <button
                                    className='m-1 p-1 w-full bg-blue-400 rounded btn-circle text-xl text-white text-center btn-sm'
                                    onClick={() => handleAvailable(product)}
                                >
                                    Mark As Available
                                </button>
                                <div>
                                    <button
                                        className='btn btn-primary btn-sm w-full  m-1'
                                        onClick={() => handleDelete(product)}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className='w-full'>
                                <p className='text-xs gray-text'>Status: Available</p>
                                <p
                                    className='m-1 btn btn-sm w-full bg-blue-400 rounded btn-circle text-xl text-white text-center '
                                    onClick={() => handleSold(product)}
                                >
                                    Mark As Sold
                                </p>
                                <div>
                                    <button
                                        className='btn btn-primary w-full btn-sm m-1 p-1'
                                        onClick={() => handleDelete(product)}
                                    >
                                        DELETE
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className='btn btn-secondary w-full btn-sm m-1 p-1'
                                        onClick={() => handleToAddvertise(product)}
                                    >
                                        Advertise
                                    </button>
                                </div>
                            </div>
                        )} */}
                    </SingleClass>
                ))}
            </div>
        </div>
    );
};

export default MyClass;
