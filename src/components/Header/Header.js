import React from 'react';
import './Header.scss';

const Header = ({title, navs, partners}) => {
    const partnersImg = partners.map((partnerItem, i) => <img src={partnerItem} alt="partners" className="header-partners-item" key={i}/>);
    const navigation = navs.map((nav, i) => <a href={nav.href} className="header-nav-navs" key={i}>{nav.title}</a>);

    return (
        <section className="header">
            <div className="container">
                <div className="header-partners">
                    {partnersImg}
                </div>
                <nav className="header-nav">
                    {navigation}
                </nav>
                <h1 className="header-title">{title}</h1>
                <a href="#" className="header-button">Отследить</a>
            </div>
        </section>
    );
};

export default Header;