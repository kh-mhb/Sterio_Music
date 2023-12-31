import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';


const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoadin] = useState(true);
    const { isverified, setIsVerified, userRoll, setUserRoll } = useContext(AuthContext);

    if (email == undefined) {
        email = ''
    } useEffect(() => {
        fetch(`https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/user/seller?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller)
                // console.log(data.verified, data.isSeller)
                setIsVerified(data.verified)
                if (data.isSeller) {
                    setUserRoll('Seller')
                }
                setSellerLoadin(false)
            })

    }, [email])
    return [isSeller, sellerLoading]

};

export default useSeller;