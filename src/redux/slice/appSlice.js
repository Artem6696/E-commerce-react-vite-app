import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    visible: true,
    page: null,
    inputValue: '',
    
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        increment: ( state ) => {
            state.count += 1
        },
        decrement: ( state ) => {
            state.count -= 1
        },
        toggleContentVisible: ( state ) => {
            state.visible = !state.visible
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        backUpNavigation : (state,action) => {
            state.page = action.payload
        },
       
       
        
    }
})

export const { increment, decrement, toggleContentVisible,setSelectedCategory, backUpNavigation,  } = appSlice.actions
export default  appSlice.reducer