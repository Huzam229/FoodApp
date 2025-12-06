import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeToCart: (state, action) => {
            const index = state.items.findIndex(item => item._id === action.payload.id);
            if (index >= 0) {
                state.items.splice(index, 1);
            } else {
                console.log("Can't remove an item that is not in the cart.");
            }
        },
        emptyCart: (state) => {
            state.items = [];
        },
    },
});

// Action creators
export const { addToCart, removeToCart, emptyCart } = cartSlice.actions;

// Selectors
export const selectCart = (state) => state.cart.items;

// **Optimized selectCartById using reselect**
export const selectCartById = createSelector(
    [selectCart, (_, id) => id],
    (items, id) => items.filter(item => item._id === id)
);

// **Fixed selectCartTotal**
export const selectCartTotal = createSelector(
    [selectCart],
    (items) => items.reduce((total, item) => total + item.price, 0)
);

export default cartSlice.reducer;
