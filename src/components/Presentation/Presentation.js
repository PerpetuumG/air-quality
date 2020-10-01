import React from 'react';
import SlidePres from './SlidePresentation';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Presentation.scss';

    SwiperCore.use([Navigation, Pagination])

    const Presentation = ({title, pres}) => {
    const presSlides = pres.map((presInfo) => <SwiperSlide key={presInfo.id}>
        <SlidePres item={presInfo} />
    </SwiperSlide>);


    return (
        <section className="pres container" id="presentation">
            <h2 className="pres-title">{title}</h2>
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
                        return `<span class = "pres-pagination-bullet ${className}"></span>`;
                     },
                }}
                spaceBetween={40}
                slidesPerView={3}
                slidesPerGroup={1}
                loop={true}
            /*    сделал по одному чтобы преключались и зациклил*/
            >
                {presSlides}
            </Swiper>
            <div className="swiper-button-next"/>
            <div className="pres-pagination"/>
        </section>
    );
};

export default Presentation;