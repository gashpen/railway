import { ConfigProvider, Slider } from "antd";
import React from "react";

const TicketSlider = () => {

    const onChangeComplete = (value: number | number[]) => {
        console.log('onChangeComplete: ', value);
    };

    return (
        <div className="ticket_slider-price">
            <h3 className="input_headers">Стоимость</h3>
            <div className="slider_from-and-to">
                <span className="from">от</span>
                <span className="to">до</span>
            </div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimaryBorderHover: '#fff',
                        fontSize: 18,
                        boxShadowSecondary: 'rgba(0, 0, 0, 0)'
                    },
                    components: {
                        Slider: {
                            dotSize: 24,
                            controlSize: 24,
                            handleSize: 24,
                            handleSizeHover: 20,
                            handleActiveColor: '#fff',
                            dotActiveBorderColor: '#fff',
                            dotBorderColor: '#fff',
                            handleColor: '#fff',
                            trackHoverBg: '#FFA800',
                            trackBg: '#FFA800',
                            railSize: 19,
                        },
                    },
                }}
            >
                <Slider
                    tooltip={{
                        placement: 'bottom',
                        color: 'rgba(0,0,0,0)',
                    }}
                    min={0}
                    max={20000}
                    range
                    step={10}
                    defaultValue={[0, 20000]}
                    onChangeComplete={onChangeComplete}
                />
            </ConfigProvider>
            <div className="slider_from-and-to">
                <span className="from">0</span>
                <span className="to">20000</span>
            </div>
        </div>
    );
}

export default TicketSlider;