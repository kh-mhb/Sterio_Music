import React, { useContext, useEffect, useState } from 'react';
import Swipper from '../Swipper/Swipper';

import { AuthContext } from '../../context/AuthProvider';
import Card from '../Card/Card';
import { useQuery } from '@tanstack/react-query';
import SingleClass from '../SingleClass';
import useSeller from '../../hooks/useSeller/useSeller';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import SIngleInstructor from '../../SIngleInstructor';
import Spinner from '../../Spinner/Spinner';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Marquee from 'react-fast-marquee';


const Home = () => {
    const { c } = useContext(AuthContext);
    const { user } = useContext(AuthContext)


    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)


    const [instructors, setInstructors] = useState([]);
    const uri = `https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/allclassesserial?query='home'`
    const { data: classes = [], isLoading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            try {
                const res = await fetch(uri)
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }

    })
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/getinstructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    console.log(instructors)

    // if (!instructors || !classes) {
    //     return <Spinner></Spinner>
    // }
    const handleToSelectCourse = (product) => {
        const { _id, ...productWithoutId } = product;
        const info = { studentemail: user.email, SRLnumber: product._id, ...productWithoutId }
        fetch(`https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/selectCourse`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)
        })
            .then(() => {
                toast.success('Added to your selected list')
                refetch()
            })
    }
    console.log(classes)
    return (
        <div>

            <Banner></Banner>
            <Swipper></Swipper>
            <Review></Review>
            <div>
                <h1 className='text-center text-blue-600 text-4xl font-mono  font-bold  my-5 italic underline '>Top Classes You may like </h1>
                <div className='container mx-auto '>
                    {
                        !user && <Marquee speed={100}><p className='animate-pulse text-3xl  text-red-500 font-mono font-light '>To Select a class you should Sign Up</p></Marquee>
                    }


                </div>
                <div className='container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4  p-3'>
                    {classes.map(product => (
                        <SingleClass key={product._id} product={product}>
                            {
                                user && !isSeller && !isAdmin && <div>
                                    <button className={`btn mx-2 btn-xs btn-primary`} disabled={product.seats == 0 ? true : false} onClick={() => handleToSelectCourse(product)}>Select</button>
                                    <button disabled={product.seats == 0 ? true : false} className='btn mx-2 btn-xs btn-secondary'>
                                        <Link to={`/dashboard/payment/${product._id}`}>Enroll</Link> </button>
                                </div>

                            }
                        </SingleClass>
                    ))}
                </div>
                <h1 className='text-center text-4xl italic text-red-500 font-mono font-bold my-2 underline'>Best 6 Instructors </h1>
                <div className='container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-4 border-rose-500  rounded-2xl gap-6 gap-y-20 mb-10 p-3'>
                    {instructors.map(instructor => (
                        <SIngleInstructor key={instructor._id} instructor={instructor}></SIngleInstructor>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Home;