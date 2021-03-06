import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import Pollution from "./components/Pollution/Pollution";
import Optimization from './components/Optimization/Optimization';
import Footer from "./components/Footer/Footer";
import GSNU from './assets/partner_GC.svg';
import ITN from './assets/partner_ITN.svg';
import Shid from './assets/partner_shid.svg';
import './reset.scss';

function App() {


    const partners = [
        Shid,
        ITN,
        GSNU
    ];

    const navigation = [
        {
            title: "Основные факты",
            href: "#presentation"
        },
        {
            title: "Индекс качетсва воздуха",
            href: "#pollution"
        },
        {
            title: "Потикика по уменьшению загрязнения",
            href: "#optimization"
        }
    ];

    const presSlides = [
        {   id: '1',
            imgUrl: require("./assets/presentation/pre-1.jpg"),
            desc: "Женщины и дети - главные жертвы загрязнения воздуха"
        },
        {
            id: '2',
            imgUrl: require("./assets/presentation/pre-2.jpg"),
            desc: "Защитники окружающей среды подтвергаются преследованиям"
        },
        {
            id: '3',
            imgUrl: require("./assets/presentation/pre-3.jpg"),
            desc: "Загрязнение воздуха – нарушение прав человека"
        },
        {
            id: '4',
            imgUrl: require("./assets/presentation/pre-4.jpg"),
            desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения \n" +
                "атмосферного воздуха"
        },
        {
            id: '5',
            imgUrl: require("./assets/presentation/pre-5.jpg"),
            desc: "Согласно оценкам, суммарный объем затрат \n" +
                "в связи с загрязнением воздуха превышает 5 трлн долл. в год."
        },
    ];

    const optimization = [
        {
            name: "Промышленность",
            imgUrl: require('./assets/optimization/industry.jpg'),
            description: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)"
        },
        {
            name: "Транспорт",
            imgUrl: require('./assets/optimization/transport.jpg'),
            description: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
        },
        {
            name: "Городское планирование",
            imgUrl: require('./assets/optimization/city-planing.jpg'),
            description: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов"
        },
        {
            name: "Энергия",
            imgUrl: require('./assets/optimization/energy.jpg'),
            description: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
        },
        {
            name: "Энергетика",
            imgUrl: require('./assets/optimization/energetics.jpg'),
            description: " Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
        },
        {
            name: "Утилизация отходов",
            imgUrl: require('./assets/optimization/utilisation.jpg'),
            description: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
        }
    ];

    const author = "Alpeyev Yuriy";
    const designer = "Валерией Бубырь";

    return (
    <>
      <Header title="Качество атмосферного воздуха и здоровье"
              partners={partners}
              navs={navigation}
              />
      <Presentation
          title="Основные факты" pres={presSlides}/>
      <Pollution/>
      <Optimization name="Политика по уменьшению загрязнений"
                    subname="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
                    optims={optimization} />
      <Footer navs={navigation} partners={partners} author={author} designer={designer}/>
    </>
  );
}

export default App;
