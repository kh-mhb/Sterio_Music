import React, { useContext, useEffect, useState } from 'react';
import SIngleUser from './Components/SIngleUser';
import { AuthContext } from './context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const { user } = useContext(AuthContext)
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/user')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])

    const uri = `https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/user`
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
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

    const handleToMakeInstructor = us => {

        fetch(`https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/makeinstructor?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(us)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }
    const handleToMakeAdmin = us => {

        fetch(`https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/makeadmin?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(us)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }

    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th></th>

                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>-</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => <SIngleUser user={user} key={user._id}><div>{
                        (user.role !== 'Seller' && user.role !== 'admin') &&
                        <button className='mx-2 btn btn-primary btn-xs' onClick={() => handleToMakeInstructor(user)}>Make Instructor</button>
                    }{
                            user.role !== 'admin' &&

                            <button className='mx-2 btn btn-secondary btn-xs' onClick={() => handleToMakeAdmin(user)}>Make Admin</button>
                        }
                    </div> </SIngleUser>)}


            </tbody>
        </table>
    );
};

export default AllUsers;