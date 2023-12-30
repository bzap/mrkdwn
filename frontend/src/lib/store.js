import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "./reducers/markdownSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["markdownReducer"],
};

const persistedReducer = persistReducer(persistConfig, markdownReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export const persistor = persistStore(store);
