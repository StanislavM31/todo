import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export default configureStore({
    //импорты всех слайсов
    reducer: {
        todos: todoReducer,
        //user: userReducer,
    },
})