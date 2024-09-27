import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Auth-Slice/index"


const store = configureStore({
    reducer:{
        auth : authReducer,
    }

})

export default store;