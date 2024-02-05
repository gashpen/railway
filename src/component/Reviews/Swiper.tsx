import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SlideCard from './SlideCard';
import men from '../../assets/adb42ec0d354460adb5d422bc34dc958.png';
import women from '../../assets/2fec5f0f798b8787930c80dd5d6472af.png'

const SwiperReview = () => {
    return ( 
        <div className='review_swiper-wrap'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                <SwiperSlide>
                    <SlideCard
                    img={women}
                    name={'Екатерина Вальнова'}
                    text={'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideCard
                    img={men}
                    name={'Евгений Стрыкало'}
                    text={'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideCard/>
                </SwiperSlide>
            </Swiper>
      </div>
    );
}

export default SwiperReview;
