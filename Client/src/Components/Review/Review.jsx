import React from 'react';
import rv1 from '../../assets/review/rv1.png'
import rv2 from '../../assets/review/rv2.png'

const Review = () => {
    return (
        <div>
            <h3 className='text-4xl font-mono font-semibold text-red-500 text-center py-3 px-2 italic underline'>Student Review</h3>
            <div className='flex justify-around flex-col lg:flex-row mx-10'>
                <div className='ms-4'>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={rv1} />
                            </div>
                        </div>
                        <div className="chat-bubble">The instructor and fellow classmates created a supportive and encouraging learning environment. We felt comfortable asking questions and exploring different musical ideas without fear of judgment..</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={rv1} />
                            </div>
                        </div>
                        <div className="chat-bubble"> The class followed a well-structured curriculum that gradually built upon previous knowledge and skills. This approach ensured a solid foundation while allowing for continuous growth and advancement.</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={rv1} />
                            </div>
                        </div>
                        <div className="chat-bubble">The musical class equipped us with lifelong musical skills, fostering a deep appreciation and understanding of music that will continue to enrich our lives beyond the classroom.</div>
                    </div>
                </div>
                <div className='ms-5                                                                                                  '>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={rv2} />
                            </div>
                        </div>
                        <div className="chat-bubble"> The musical class was incredibly engaging, and the instructor's passion for music was truly inspiring..</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={rv2} />
                            </div>
                        </div>
                        <div className="chat-bubble">The class covered a wide range of musical topics, from music theory and technique to performance skills and interpretation.</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={rv2} />
                            </div>
                        </div>
                        <div className="chat-bubble">The class was structured in a way that made learning fun and interactive. We had opportunities to participate in group activities, ensemble performances, and even occasional jam sessions.</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;