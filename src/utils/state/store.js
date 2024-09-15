import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice';

// Configure and create the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;