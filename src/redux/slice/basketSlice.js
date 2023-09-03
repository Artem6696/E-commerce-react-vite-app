import { createSlice } from "@reduxjs/toolkit"

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketUser: [],
    },
    reducers: {
        addToBasket: (state, action) => {
            const itemInBusket = state.basketUser.find(
                (item) => item._id === action.payload._id
            );
                if(itemInBusket) {
                    itemInBusket.quantity++
                } else {
                    state.basketUser.push({ ...action.payload, quantity: 1})
                }
        },
        incremenQuantity: (state, action) => {
            const item = state.basketUser.find((item) => item._id === action.payload);
            item.quantity++
        },
        decrementQuanntity: (state, action) => {
            const item = state.basketUser.find((item) => item._id === action.payload);
            if(item.quantity === 1){
                item.quantity = 1
            }else{
                item.quantity--
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.basketUser.filter(
                (item) => item._id !== action.payload
            )
            state.basketUser = removeItem
        },
    }
})
export const basketReducer = basketSlice.reducer; 
export const { addToBasket, incremenQuantity, decrementQuanntity, removeItem } = basketSlice.actions;