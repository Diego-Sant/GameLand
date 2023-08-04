import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import favoriteReducer from "./favoriteReducer";

export const store = configureStore({
    reducer: combineReducers({
        cart: cartReducer,
        favorites: favoriteReducer,
    }),
});