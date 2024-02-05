import React from "react";
import "./footer.css";
import Contacts from "./Contacts";
import Subscriber from "./Subscriber";
import Logo from "../Header/Logo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_widget">
                <Contacts />
                <Subscriber />
            </div>
            <div className="footer_copy">
                <Logo />
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="17.5" stroke="#E5E5E5" />
                    <path d="M18.3 16.7569C19.9256 18.3882 21.4531 19.9325 22.9667 21.4552C23.3758 21.8668 24.0742 21.835 24.4853 21.4256C24.8978 21.0149 24.8646 20.3803 24.4521 19.9696C22.6174 18.1427 20.7773 16.3107 18.9612 14.5024C18.571 14.114 17.9403 14.1139 17.5503 14.5026C15.8016 16.2458 13.9963 18.0515 12.1839 19.8493C11.7543 20.2753 11.7195 20.9344 12.1606 21.3485C12.579 21.7412 13.272 21.7659 13.6799 21.3622C15.1455 19.912 16.6793 18.383 18.3 16.7569Z" fill="#E5E5E5" />
                </svg>
                <span className="footer_year">2018 WEB</span>
            </div>
        </footer>
    );
}

export default Footer;