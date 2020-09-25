import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import gsLogo from './assets/GC_logo.svg';
import ITNLogo from './assets/ITN_logo.svg';
import shidLogo from './assets/shid_emozhl_logo.svg';

function App() {

    const partners = [
        shidLogo,
        ITNLogo,
        gsLogo   // , require('./assets/GC_logo.svg')
    ]

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
    ]

  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье"
                 logos={partners}
                 links={navLinks}/>
    </>
  );
}

export default App;
