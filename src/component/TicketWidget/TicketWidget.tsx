import React from "react";
import "./ticket-widget.css"
import TicketForm from "./TicketForm/TicketForm";
import { useLocation } from "react-router-dom";
const TicketWidget = () => {
    let location = useLocation();

    return (
        <div className="header_widget-wrap">
            {location.pathname === '/ticket' ? '' :
                <h1 className="header_widget-head">
                    Вся жизнь -
                    <br />
                    <span> путешествие!</span>
                </h1>}
            <TicketForm />
        </div>
    );
}

export default TicketWidget;