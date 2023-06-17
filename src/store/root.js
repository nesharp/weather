import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./weather/weather.slice";

export const store = configureStore({
    reducer: weatherSlice.reducer,
});