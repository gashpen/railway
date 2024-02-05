import { ConfigProvider } from "antd";
import React, { useState } from "react";
import './sliderfromandto.css'
import Slider from "./Slider";


const SliderFrom = () => {
   
    return (
        <div className="slider_location">
                <div>
                    <span style={{ textAlign: 'left', fontSize: 24 }}>Время отбытия</span>
                   <Slider/>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                        <span>0:00</span>
                        <span>24:00</span>
                    </div>
                </div>
                <div>
                    <span style={{ textAlign: 'right', fontSize: 24 }}>Время прибытия</span>
                    <Slider/>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                        <span>0:00</span>
                        <span>24:00</span>
                    </div>
                </div>

            
        </div>
    );
}

export default SliderFrom;