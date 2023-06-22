import React, { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import useSeller from './hooks/useSeller/useSeller';
import useAdmin from './hooks/useAdmin/useAdmin';
import { useQuery } from '@tanstack/react-query';
import SingleClass from './Components/SingleClass';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllClassTogether = () => {
    const { user, handleToSelectCourse } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    const uri = `https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/allclassesserial`
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
    return (
        <div className='container max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4  p-3'>
            {classes.map(product => (
                <SingleClass className="" key={product._id} product={product}>
                    {
                        user && !isSeller && !isAdmin && <div>
                            <button className='btn mx-2 btn-xs btn-primary' disabled={product.seats == 0 ? true : false} onClick={() => {
                                handleToSelectCourse(product)
                                    .then(() => {
                                        toast.success('Added to your selected list')
                                        refetch()
                                    })
                            }}>Select</button>
                            <button className='btn mx-2 btn-xs btn-secondary' disabled={product.seats == 0 ? true : false}>
                                <Link to={`/dashboard/payment/${product._id}`} >Enroll</Link>
                            </button>
                        </div>

                    }
                </SingleClass>
            ))}
        </div>

    );
};

export default AllClassTogether;