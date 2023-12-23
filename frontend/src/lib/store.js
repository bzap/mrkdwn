import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "./reducers/markdownSlice";

const store = configureStore({
    reducer: {
        markdownData: markdownReducer,
    },
});

export default store;
