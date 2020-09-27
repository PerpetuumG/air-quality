import React from 'react';
import SlideFacts from './SlideFacts';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Facts.scss';

    SwiperCore.use([Navigation, Pagination])

    const Facts = ({title, slides}) => {
    const factsSlides = slides.map((slideInfo) => <SwiperSlide key={slideInfo.id}>
        <SlideFacts item={slideInfo} />
    </SwiperSlide>);


    return (
        <section className="facts container">
            <h2 className="facts-title">{title}</h2>
            <div className="swiper-button-prev"/>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination
                spaceBetween={40}
                slidesPerView={3}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
            >
                {factsSlides}
            </Swiper>
            <div className="swiper-button-next"/>
        </section>
    );
};

export default Facts;