import React, { useContext, useEffect, useState } from 'react';
import useSeller from './hooks/useSeller/useSeller';
import useAdmin from './hooks/useAdmin/useAdmin';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import SingleClass from './Components/SingleClass';
import Spinner from './Spinner/Spinner';

const MySelected = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)

    const uri = `https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/myselected?email=${user.email}`

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch(uri, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    // if (isLoading) {
    //     return <Spinner></Spinner>
    // }
    console.log(classes);
    return (
        <div>
            <div className='container max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4  p-3'>
                {classes.map(product => (
                    <SingleClass className="" key={product._id} product={product}>
                        {
                            user && !isSeller && !isAdmin && <div>
                                <Link to={`/dashboard/payment/${product.SRLnumber}`} className='btn mx-2 btn-xs btn-secondary'>Enroll</Link>
                            </div>

                        }
                    </SingleClass>
                ))}
            </div>
        </div>
    );
};

export default MySelected;