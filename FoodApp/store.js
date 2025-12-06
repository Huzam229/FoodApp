import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlices'; 
import restaurantReducer from './slices/restaurantSlices'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
    restaurant: restaurantReducer, 
  },
});

export default store;
