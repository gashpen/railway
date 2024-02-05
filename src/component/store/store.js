import { configureStore } from "@reduxjs/toolkit";
import railwaySlice from "./railwaySlice";

export const store = configureStore({
    reducer:{
        railway: railwaySlice
    }
})