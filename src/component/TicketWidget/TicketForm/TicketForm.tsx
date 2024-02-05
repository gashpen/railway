import React, { useState } from "react";
import NavInput from "./NavInput";
import DateInput from "./HeaderFormDate";
import "./ticket-form.css"
import { useDispatch, useSelector } from "react-redux";
import { addFormTicketValue } from "../../store/railwaySlice";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TicketForm = () => {
    const dipatch = useDispatch();
    const departureDate = useSelector(state => state.railway.departureDate);
    const arrivalDate = useSelector(state => state.railway.arrivalDate);
    const location = useSelector(state => state.railway.formLocation);
    let path = useLocation();
    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        dipatch(addFormTicketValue({
            date: {
                departureDate: departureDate,
                arrivalDate: arrivalDate
            },
            location: location
        }))
        navigate('/ticket')
    }
    return (
        <div className="header_ticket-form-wrap">
            <form id="headerForm"
                style={path.pathname === '/ticket' ? { flexDirection: 'row' }
                    : { flexDirection: 'column' }}
                onSubmit={(e) => submitForm(e)}
                className="header_ticket-form"
            >
                <NavInput />
                <div className="date_btn-wrap">
                    <DateInput />
                    <div className="ticket_btn-wrap">
                        <button className="header_ticket-btn" type="submit">
                            НАЙТИ БИЛЕТЫ
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TicketForm;