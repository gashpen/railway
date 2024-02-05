import React from "react";
import "./header.css"
import TicketWidget from "../TicketWidget/TicketWidget";
import Logo from './Logo'
import { useLocation } from "react-router-dom";

const Header = () => {
    const path = useLocation();
    return ( 
        <header className={path.pathname === '/ticket'?'header_ticket':'header'}>
            <div className="header_logo-wrap">
                <Logo/>
            </div>
            <nav className="header_navigate">
                <ul>
                    <li className="header_navigate-list">
                        О нас
                    </li>
                    <li className="header_navigate-list">
                        Как это работает?
                    </li>
                    <li className="header_navigate-list">
                        Отзывы
                    </li>
                    <li className="header_navigate-list">
                        Контакты
                    </li>
                </ul>
            </nav>
            <TicketWidget/>
        </header>
    );
}
 
export default Header;