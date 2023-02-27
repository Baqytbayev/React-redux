import {configureStore} from "@reduxjs/toolkit";
import {contactSlice} from "./conSlice";


export const store = configureStore({
    reducer: {
        contacts: contactSlice.reducer
    }
})