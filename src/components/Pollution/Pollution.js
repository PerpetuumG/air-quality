import React, {useState, useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Pollution.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFtbnlrIiwiYSI6ImNrZmxhZjZscjAwb2gycm54aWo2bGJvZnEifQ.BbYutmem-GZtYciYeMln1A';
// ссылку на карту взял у ментора, уже не успеваю регистрироваться и вносить свою. успею поменяю

const Pollution = () => {
    const mapPol = useRef(null);
    const [coordinates] = useState({
        lng: 35,
        lat: 48.5,
        zoom: 6
    });

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapPol.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [coordinates.lng, coordinates.lat],
            zoom: coordinates.zoom
        });
    }, [])


    return (
        <section className="pollution container" id="pollution">
            <h2 className="pollution-title">Индекс качества воздуха в режиме реального времени</h2>
            <div className="pollution-map" ref={mapPol}/>
            <p className="pollution-info">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
        </section>
    );
};

export default Pollution;