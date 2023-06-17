import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weather: [],
    },
    reducers: {
        setWeather: (state, action) => {
            state.weather = action.payload;
           
        }
    }
});