import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider';

const SingleClass = ({ product, children }) => {
    const { currentYear } = useContext(AuthContext);

    const { name,
        email,
        price,
        img,
        sellername,

        seats,
        status,
        feedback } = product

    return (
        <div className={`card card-compact ${seats == 0 ? 'bg-red-300' : 'bg-base-100'}   shadow-xl max-w-sm`}>
            <figure><img src={img} className=" h-64  " alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{sellername}</p>
                <p>Available Seats :{seats}</p>
                {
                    feedback && <p>Feedback: {feedback}</p>
                }
                {/* <p>{description.length > 60 ? description.slice(0, 60) + '...' : description}</p> */}
                <div className='flex justify-between '>
                    <div className=' '>
                        {/* <p className=''><FaMapMarkerAlt className=' mr-1 inline ' />{location}</p> */}
                    </div>

                </div>
                <div>
                    <p className="text-xl font-bold">${price}
                    </p>
                    <p>Status : {status}</p>
                </div>
                <div>

                </div>

                <div className="card-actions justify-center ">

                    {
                        children
                    }
                </div>
            </div>
        </div >
    );
};

export default SingleClass;