// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import class1 from '../../../src/assets/class/cls7.jpg'
import class2 from '../../../src/assets/class/cls2.jpg'
import class3 from '../../../src/assets/class/cls3.jpg'
import class4 from '../../../src/assets/class/cls4.jpg'
import class5 from '../../../src/assets/class/cls7.jpg'
import class6 from '../../../src/assets/class/cls3.jpg'

// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <div className='m-3'>
            <h1 className='text-4xl font-medium text-center p-3 my-4 underline font-serif decoration-slate-300 text-red-500 italic' > ClassRoom Gallery</h1>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src={class1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={class2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={class3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={class4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={class5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={class6} alt="" /></SwiperSlide>
            </Swiper></div>
    );
};