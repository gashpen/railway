import React, { useEffect, useState } from "react";
import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import updateLocale from 'dayjs/plugin/updateLocale';
import moment from "moment";
import { useDispatch } from "react-redux";
import { addArrivalDate, addDepartureDate, addFormDate } from "../../store/railwaySlice";


const DateInputs = (props) => {

    const dispatch = useDispatch();
    const onChangeDep: DatePickerProps['onChange'] = (date, dateString) => {
        dispatch(addDepartureDate(dateString))
    };
    const onChangeArrival: DatePickerProps['onChange'] = (date, dateString) => {
        dispatch(addArrivalDate(dateString))
    };

    dayjs.extend(updateLocale);
    dayjs.updateLocale('ru', {
        weekStart: 1,
    });
    function disabledYear(current) {
        let customYear = '11-25';
        return current && current > moment(customYear, 'MM-DD');
    }
    return (
        <ConfigProvider
            theme={{
                components: {
                    DatePicker: {
                        cellWidth: 42,
                        cellHeight: 42,
                        hoverBorderColor: 'rgba(255, 168, 0, 0.31)',
                        fontSize: props.fontSize,
                        cellHoverBg: 'rgba(255, 168, 0, 0.3)',
                    }
                }
            }}
        >
            <span className="input_headers">{props.inputHeadDep}</span>
            <DatePicker
                name="depatureTime"
                onChange={onChangeDep}
                style={{ marginRight: '35px' }}
                showToday={false}
                placeholder="ДД/ММ/ГГ"
                format="YYYY-MM-DD"
                nextIcon={'▸'}
                prevIcon={'◂'}
                disabledDate={disabledYear}
                locale={locale}
                className={props.styles}
            />
            <span className="input_headers">{props.inputHeadArrival}</span>
            <DatePicker
                name="arrivalTime"
                onChange={onChangeArrival}
                showToday={false}
                placeholder="ДД/ММ/ГГ"
                nextIcon={'▸'}
                prevIcon={'◂'}
                locale={locale}
                className={props.styles}
            />
        </ConfigProvider>
    );
}

export default DateInputs;