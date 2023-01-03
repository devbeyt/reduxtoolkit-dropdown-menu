import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../features/nav/navigationSlice";


const store = configureStore({
    reducer:{
        links:navigationReducer,
    }
})



export default store