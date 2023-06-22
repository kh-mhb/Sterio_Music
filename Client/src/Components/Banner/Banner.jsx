import React from 'react';
import banner1 from '../../../src/assets/Banner/banner1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='t-shadow'>
            <div className="hero max-h-fit p-5 mx-10 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-7xl font-bold"><span className='text-red-600 italic text-8xl' > Sterio</span><span className='text-6xl text-red-400'> Music</span> </h1>
                        <p className=" text-2xl  font-sans font-thin px-2 py-8">Welcome to our music school, where we foster a vibrant and enriching environment for musical education and exploration. Our school is dedicated to nurturing the talents and passions of aspiring musicians of all ages and skill levels.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner; <h3>Hello from banner</h3>