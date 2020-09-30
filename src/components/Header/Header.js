import React from 'react';
import './Header.scss';
// import '../../App.scss';

const Header = ({title, links, logos}) => {
    const logosImages = logos.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="header-partners-item" key={i}/>);
    const navItems = links.map((link, i) => <a href={link.href} className="header-nav-item" key={i}>{link.title}</a>);

    return (
        <section className="header">
            <div className="container">
                <div className="header-partners">
                    {logosImages}
                </div>
                <nav className="header-nav">
                    {navItems}
                </nav>
                <h1 className="header-title">{title}</h1>
                <a href="#" className="header-link">Отследить</a>
            </div>
        </section>
    );
};

export default Header;