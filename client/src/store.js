import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./state/modalSlice";
import postModalReducer from "./state/postSlice";
import postReducer from "./state/displayPostSlice";
import updateReducer from "./state/updatePostSlice";
import userDetailsReducer from "./state/userDetailsSlice";

export const store = configureStore({
    reducer : {
        modal : modalReducer,
        postModal : postModalReducer ,
        post : postReducer,
        update : updateReducer,
        userData : userDetailsReducer,
    }
})