import React from 'react';
import './Card.css'
import bg1 from '../../../src/assets/background/blurry-gradient-haikei.png'

const Card = () => {
    return (
        <div className='card_section bg-slate-50  '  >
            <div>
                <h3 className='text-center text-4xl font-mono font-bold text'>Feel Fun To Learn New</h3>
            </div>
            <div className='grid grid-cols-3  p-3 justify-center  gap-8'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://static.toiimg.com/thumb/msid-86937496,width-1280,resizemode-4/86937496.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0863/6884/t/90/assets/sjc-tour-series_matte-black_full-set-1680707150735_1200x.jpg?v=1680707152" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Drums!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.immediate.co.uk/production/volatile/sites/24/2022/10/trumpet-guide-f931134.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Trumpet!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://www.thehouseofvoice.com.au/wp-content/uploads/2021/08/viola-PYMQQ9Z-380x380.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Viola</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://producerhive.com/wp-content/uploads/2022/06/Depositphotos_2529822_L.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Harp!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/71wzfwu-aGL.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mouth Organ!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card; 