import React, { useState } from "react";
import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import updateLocale from 'dayjs/plugin/updateLocale';
import moment from "moment";
import type { Dayjs } from 'dayjs';
import { useDispatch, useSelector } from "react-redux";
import { addFormDate } from "../../store/railwaySlice";
import DateInputs from "./DateInputs";

type Generic = string;
type GenericFn = (value: Dayjs) => string;

export type FormatType = Generic | GenericFn | Array<Generic | GenericFn>;

const HeaderFormDate = (props) => {
   
    return (
        <div className="header_form-date-wrap">
            <h3>Дата</h3>
            <div className="header_form-date">
                <DateInputs styles={"input input_date"} fontSize={24}/>
            </div>
        </div>
    );
}

export default HeaderFormDate;