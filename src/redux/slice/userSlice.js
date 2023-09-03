import { createSlice } from "@reduxjs/toolkit"


export const userSlice = createSlice({
    name: "userStatus",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state,action) => {
            state.user = action.payload
        }
    }

})
export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions