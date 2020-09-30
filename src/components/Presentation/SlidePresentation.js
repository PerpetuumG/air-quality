import React from 'react';
import './Presentation.scss';

const SlidePresentation = ({item}) => {
    return (
        <div className="facts-slide">
            <img src={item.imgUrl} alt="slide_image"/>
            <p className="facts-slide-desc">
                {item.desc}
            </p>
        </div>
    );
};

export default SlidePresentation;