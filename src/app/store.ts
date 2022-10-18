import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authLogin/authSlice'


export const store = configureStore({
    reducer: {
        authLogin: authReducer
    }
})