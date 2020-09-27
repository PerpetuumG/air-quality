import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import Facts from "./components/facts/Facts";
import gsLogo from './assets/GC_logo.svg';
import ITNLogo from './assets/ITN_logo.svg';
import shidLogo from './assets/shid_emozhl_logo.svg';
import './reset.scss';

function App() {

    const partners = [
        shidLogo,
        ITNLogo,
        gsLogo   // , require('./assets/GC_logo.svg')
    ];

    const navLinks = [
        {
            title: "Основные факты",
            href: "#facts"
        },
        {
            title: "Индекс качетсва воздуха",
            href: "#quality"
        },
        {
            title: "Потикика по уменьшению загрязнения",
            href: "#politics"
        }
    ];

    const factSlides = [
        {   id: '1332',
            imgUrl: require("./assets/facts-slide/slider-1.jpg"),
            desc: "Женщины и дети - главные жертвы загрязнения воздуха"
        },
        {
            id: '1333',
            imgUrl: require("./assets/facts-slide/slider-2.jpg"),
            desc: "Защитники окружающей среды подтвергаются преследованиям"
        },
        {
            id: '1334',
            imgUrl: require("./assets/facts-slide/slider-3.jpg"),
            desc: "Загрязнение воздуха – нарушение прав человека"
        },
        {
            id: '1335',
            imgUrl: require("./assets/facts-slide/slider-4.jpg"),
            desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения \n" +
                "атмосферного воздуха"
        },
        {
            id: '1336',
            imgUrl: require("./assets/facts-slide/slider-5.jpg"),
            desc: "Согласно оценкам, суммарный объем затрат \n" +
                "в связи с загрязнением воздуха превышает 5 трлн долл. в год."
        },
    ];

  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье"
                 logos={partners}
                 links={navLinks}/>
                 <Facts title="Основные факты" slides={factSlides}/>
    </>
  );
}

export default App;
