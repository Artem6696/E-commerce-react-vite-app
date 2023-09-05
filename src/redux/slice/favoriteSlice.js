import {
    createSlice
} from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteUser: [],
    },
    reducers: {
        addToFavorite: (state, action) => {
            const itemInFavorite = state.favoriteUser.find(
                (item) => item._id === action.payload._id
            );

            if (!itemInFavorite) {
                state.favoriteUser.push({...action.payload, isFavorite: true})
            } else {
                state.favoriteUser = state.favoriteUser.filter(
                    (item) => item._id !== action.payload._id
                  );
            }
        }
    }
})

export const favoriteReducer = favoriteSlice.reducer;
export const { addToFavorite } = favoriteSlice.actions;