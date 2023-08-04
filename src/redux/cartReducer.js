import { createSlice } from "@reduxjs/toolkit";

const getSavedCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("storageCarrinho");
    return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("storageCarrinho", JSON.stringify(cart));
};

export const cartSlice = createSlice({
    name: "carrinho",
    initialState: {
        products: getSavedCartFromLocalStorage()
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)

            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.products.push(action.payload)
            }

            saveCartToLocalStorage(state.products);
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
            saveCartToLocalStorage(state.products);
        },
        resetCart: (state, action) => {
            state.products = []
            saveCartToLocalStorage(state.products);
        }
    }
});

export const {addToCart, removeItem, resetCart} = cartSlice.actions;

export default cartSlice.reducer;