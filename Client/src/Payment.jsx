import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './Checkout';

const stripePromise = loadStripe(import.meta.env.VITE_stripe_key)
const Payment = () => {

    const product = useLoaderData();
    console.log(product)
    return (
        <div>
            <h3 className="text-6xl bebus my-3 mx-3"> Payment</h3>

            <div className=' my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm product={product} />
                </Elements>

            </div>
        </div>
    );

};

export default Payment;