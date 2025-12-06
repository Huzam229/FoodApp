import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: null,
}

export const restaurantsSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        },
    },
}) 


export const { setRestaurant } = restaurantsSlice.actions
export const selectRestaurant = state => state.restaurant.restaurant
export default restaurantsSlice.reducer