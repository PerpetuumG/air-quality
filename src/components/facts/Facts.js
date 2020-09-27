import React from 'react';
import SlideFacts from './SlideFacts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './Facts.scss'

const Facts = ({title, slides}) => {
    const factsSlides = slides.map((slideInfo) => <SwiperSlide><SlideFacts item={slideInfo} key={slideInfo.id}/>
    </SwiperSlide>);


    return (
        <section className="facts container">
            <h2 className="facts-title">{title}</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
            >
                {factsSlides}
            </Swiper>
        </section>
    );
};

export default Facts;