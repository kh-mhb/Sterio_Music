import React, { useContext, useState } from 'react';
import SingleClass from './Components/SingleClass';
import { AuthContext } from './context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const ManagesClass = () => {

    const { user } = useContext(AuthContext)
    const [feedbackBox, setFeedBackBox] = useState(false);
    const [currentcard, setCurrentCard] = useState(1);


    const uri = `https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/allclasses`
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


    const handleToAccept = (us, product) => {
        const user = { ...us, product }
        fetch(`https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/makeaccept?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(() => {
                refetch()
            })

    }
    const handleToDenySubmit = (us, e, product) => {
        e.preventDefault();
        const feedback = e.target.feedback.value;
        console.log(feedback);

        const user = { ...us, feedback, product }
        fetch(`https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/makedeny?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(() => {
                setFeedBackBox(false);
                setCurrentCard('1')

                refetch()
            })

    }
    const handleToDeny = (id) => {
        setFeedBackBox(true);
        setCurrentCard(id)


    }

    return (
        <div>
            <h1>Manages class </h1>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3'>
                {classes.map(product => (
                    <SingleClass key={product._id} product={product}> {
                        product.status === 'pending' && <div>
                            <button className='btn btn-xs btn-primary mx-2' onClick={() => handleToAccept(user, product)}>Accept</button>
                            {
                                (!feedbackBox || currentcard != product._id) && <button className='btn btn-xs btn-secondary mx-2' onClick={() => handleToDeny(product._id)}>Deny</button>
                            }
                            {
                                (feedbackBox && currentcard === product._id) && <form onSubmit={(e) => handleToDenySubmit(user, e, product)}><input type="text" className='border my-2' name='feedback' placeholder='Write feedback' /> <button type='submit' className='btn btn-xs'>Submit</button></form>
                            }
                        </div>
                    }

                    </SingleClass>
                ))}
            </div>
        </div>
    );
};

export default ManagesClass;