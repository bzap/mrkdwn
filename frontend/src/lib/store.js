import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "./reducers/markdownSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["markdownReducer"],
};

const persistedReducer = persistReducer(persistConfig, markdownReducer);

// const store = configureStore({
//     reducer: persistedReducer,
// });

export const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store);
