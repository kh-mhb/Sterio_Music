import React from 'react';
const Welcome = () => {
    return (
        <div>


            <div className=' md:flex items-center justify-between my-2    '>


                <div className=' md:w-1/2 p-3 container'>
                    <h1 className="lg:text-9xl text-center md:text-left  text-5xl my-3 bebus text-red-500  "> <span className='text-amber-500 '> Welcome</span>  To <br /> Your Dashboard</h1>
                    <p className='text-xl md:inline hidden  gray-text  '>Explore Your Dashboard..A masterful combination of style, power, sporty handling and comfort.</p>
                </div>


            </div>

        </div>
    );
};

export default Welcome;