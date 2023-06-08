import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./state/modalSlice";
import postModalReducer from "./state/postSlice";

export const store = configureStore({
    reducer : {
        modal : modalReducer,
        postModal : postModalReducer 
    }
})