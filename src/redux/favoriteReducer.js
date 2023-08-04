import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const getSavedWishListFromLocalStorage = () => {
    const savedWishList = localStorage.getItem("storageWishList");
    return savedWishList ? JSON.parse(savedWishList) : [];
};

const saveWishListToLocalStorage = (favorite) => {
    localStorage.setItem("storageWishList", JSON.stringify(favorite));
};

export const wishListSlice = createSlice({
    name: "favoritos",
    initialState: {
        products: getSavedWishListFromLocalStorage()
    },
    reducers: {
        addToWishList: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)

            if (item) {
                toast.error("Esse item já está na sua lista de desejos!");
            } else {
                state.products.push(action.payload)
            }

            saveWishListToLocalStorage(state.products);
        },
        removeWishListItem: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
            saveWishListToLocalStorage(state.products);
        },
        resetWishList: (state, action) => {
            state.products = []
            saveWishListToLocalStorage(state.products);
        }
    }
});

export const {addToWishList, removeWishListItem, resetWishList} = wishListSlice.actions;

export default wishListSlice.reducer;