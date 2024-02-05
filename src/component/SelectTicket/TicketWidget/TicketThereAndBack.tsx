import { ConfigProvider, Menu, MenuProps, Slider } from "antd";
import React, { useState } from "react";
import DropdownIcon from "./DropdownIcon";
import { SubMenuType } from "antd/es/menu/hooks/useItems";
import SliderFrom from "./SliderFromAndTo/SliderFrom";
type MenuItem = Required<MenuProps>['items'][number] | SubMenuType;

const TicketThereAndBack = () => {
    const [isActive, setIsActive] = useState(false);
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            onTitleClick: () => { setIsActive((prevActive) => !prevActive) },
            children,
            label,
            type,
        } as MenuItem;
    }

    const itemFrom: MenuItem[] = [
        getItem('Туда', 'sub1',
            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23877 0 0 2.23859 0 5V21C0 23.7615 2.23877 26 5 26H27C29.7612 26 32 23.7615 32 21V5C32 2.23859 29.7612 0 27 0H5ZM17.8369 14.2238V17.3334C19.3442 15.8793 20.8667 14.4109 22.3154 13.0288L20.5205 11.2816C19.6304 10.416 18.729 9.54138 17.8223 8.66669V11.9491H9.68408V14.2238H17.8369Z" fill="#FFA800" />
            </svg>
            , [
                getItem(
                    <SliderFrom/>
                , 1),
            ]),
    ];
    const itemTo: MenuItem[] = [
        getItem('Обратно', 'sub1',
            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27 0C29.7612 0 32 2.23859 32 5V21C32 23.7615 29.7612 26 27 26H5C2.23877 26 0 23.7615 0 21V5C0 2.23859 2.23877 0 5 0H27ZM14.1631 14.2236V17.3333C12.6558 15.8793 11.1333 14.4108 9.68457 13.0288C11.1479 11.6035 12.6558 10.135 14.1777 8.66663V11.949H22.3159V14.2236H14.1631Z" fill="#FFA800" />
            </svg>
            , [
                getItem(<SliderFrom/>, 1),
            ]),
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);

    };
    return (
        <ConfigProvider
            theme={{
                token:{
                    padding:0,
                    colorPrimaryBorder:'#3E3C41'
                },
                components: {
                    Menu: {
                        itemMarginBlock:0,
                        itemMarginInline:0,
                        itemBg: '#3E3C41',
                        itemSelectedBg:'#3E3C41',
                        itemSelectedColor:'#fff',
                        itemPaddingInline:0,
                        fontSize:35,
                
                    },
                    
                },
            }}
        >
            <Menu
                onClick={onClick}
                expandIcon={<DropdownIcon isActive={isActive} />}
                style={{ width: '100%' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={itemFrom} />

            <Menu
                onClick={onClick}
                expandIcon={<DropdownIcon isActive={isActive} />}
                style={{ width: '100%' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={itemTo} />
        </ConfigProvider>
    );
}

export default TicketThereAndBack;