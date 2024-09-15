import { createSlice } from "@reduxjs/toolkit";

// Define the cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],   
    }, 
    // Reducer functions to modify the cart state
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeItemFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
    },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
