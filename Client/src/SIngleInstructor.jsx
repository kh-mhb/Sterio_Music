import React from 'react';

const SIngleInstructor = ({ instructor }) => {
    return (
        <div className=''>
            <div className='text-center'>

                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={instructor.img} />
                    </div>

                </div>
                <h1>{instructor.name}</h1>
            </div>

        </div>
    );
};

export default SIngleInstructor;