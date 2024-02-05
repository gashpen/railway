import React, { useEffect, useState } from "react";
// import Input from "../../Input/Input";
import { Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import {  addFormLocation } from "../../store/railwaySlice";

const NavInput = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({
        departure:'',
        arrival:''
    })
    function handleChange(e){
        const newInput = (data) => ({...data, [e.target.name]: e.target.value});
        setInputValue(newInput);
    }
    useEffect(()=>{
        dispatch(addFormLocation(inputValue))
    },[inputValue])

    return (    
        <div className="header_form-nav">
            <h3>Направление</h3>
            <div className="input_location-wrap">
                <Input
                    onChange={handleChange}
                    value={inputValue.departure}
                    className={'input input_location'}
                    type={'text'}
                    name={'departure'}
                    placeholder={'Откуда'} />
                <div className="input_swith-btn"></div>
                <Input
                    onChange={handleChange}
                    value={inputValue.arrival}
                    className={'input input_location'}
                    type={'text'}
                    name={'arrival'}
                    placeholder={'Куда'} />
            </div>

        </div>
    );
}

export default NavInput;