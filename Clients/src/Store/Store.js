import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth-Slice";


const store = configureStore({
    reducer:{
        auth : authReducer,
    }
})

export default store;