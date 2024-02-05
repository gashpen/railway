import { ConfigProvider, Switch } from "antd";
import React from "react";

const TicketSwitch = (props) => {
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <div className="ticket_switch">
            {props.svg}
            <span style={{
                fontSize: '18px',
                color:'#FFFFFF'
            }}>{props.service}</span>
            <ConfigProvider
                theme={{
                    components: {
                        Switch: {
                            handleBg: '#FFA800',
                            handleSize: 28,
                            trackMinWidth: 72,
                            trackHeight: 19,
                            trackPadding: -4,
                            colorPrimary: '#FCDC9D',
                            colorPrimaryHover: '#FCDC9D',
                        },
                    },
                }}
            >
                <Switch
                    onChange={onChange} />
            </ConfigProvider>

        </div>
    );
}

export default TicketSwitch;