import React from 'react';
import SlidePresentation from './SlidePresentation';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Presentation.scss';

    SwiperCore.use([Navigation, Pagination])

    const Presentation = ({title, slides}) => {
    const factsSlides = slides.map((slideInfo) => <SwiperSlide key={slideInfo.id}>
        <SlidePresentation item={slideInfo} />
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
                pagination={{
                    el: '.Presentation-pagination',
                    clickable: 'true',
                    renderBullet: function(index, className) {
                        return `<span class = "facts-pagination-bullet ${className}"></span>`;
                     },
                }}
                spaceBetween={40}
                slidesPerView={3}
                // centeredSlides={true}
                slidesPerGroup={3}
                // loop={true}
                // loopFillGroupWithBlank={true}
            >
                {factsSlides}
            </Swiper>
            <div className="swiper-button-next"/>
            <div className="facts-pagination"/>
        </section>
    );
};

export default Presentation;