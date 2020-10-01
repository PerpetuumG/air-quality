import React from 'react';
import './Presentation.scss';

const SlidePres = ({item}) => {
    return (
        <div className="pres-slide">
            <img src={item.imgUrl} alt="slide image"/>
            <p className="pres-slide-desc">
                {item.desc}
            </p>
        </div>
    );
};

export default SlidePres;