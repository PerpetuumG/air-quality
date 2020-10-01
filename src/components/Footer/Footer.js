import React from 'react';
import './Footer.scss';

const Footer = ({partners, navs, author, designer}) => {
    const partnersImg = partners.map((partnerItem, i) => <img key={i} src={partnerItem} alt={'partner logo'}
                                                         className="footer-partners-item"/>);
    const navigation = navs.map((nav, i) => <a href={nav.href} key={i} className={'footer-nav-navs'}>{nav.title}</a>);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-partners">
                    {partnersImg}
                </div>

                <div className="footer-text-wrap">
                    <div className="footer-nav">
                        {navigation}
                    </div>
                    <p className="footer-nav-text">
                        Сайт разрабол <span className="text-yellow">{author}</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="text-yellow">{designer}</span>.
                    </p>
                </div>
                <p className="footer-text">
                    2020, Все права защищены
                </p>
                <p className="footer-text">
                    Согласие на обработку персональных данных<br/>
                    Политика конфиденциальности
                </p>
            </div>
        </footer>
    );
};

export default Footer;