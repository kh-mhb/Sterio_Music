import React, { useContext, useEffect, useState } from 'react';
import useSeller from './hooks/useSeller/useSeller';
import useAdmin from './hooks/useAdmin/useAdmin';
import { AuthContext } from './context/AuthProvider';
import SingleClass from './Components/SingleClass';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Myenrolled = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)

    const uri = `https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/myenrolled?email=${user.email}`

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
    const handleToDelete = product => {
        fetch(`https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/enrolledCourseDelete`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.msg) {
                    toast.success("Deleted")
                    window.location.reload();

                }
            })
    }
    return (
        <div>
            <div className='container max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4  p-3'>
                {classes.map(product => (
                    <SingleClass className="" key={product._id} product={product}>
                        {
                            user && !isSeller && !isAdmin && <div>
                                <p>Enrolled By you</p>
                                <button onClick={() => handleToDelete(product)} className='btn mx-2 btn-xs btn-secondary'>Delete</button>
                            </div>

                        }
                    </SingleClass>
                ))}
            </div>
        </div>
    );
};

export default Myenrolled;