

import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import appSlice from "./slice/appSlice";
import  { basketReducer }  from "./slice/basketSlice";
import { userReducer } from "./slice/userSlice";


const persistConfig = {
    key: "root",
    storage
  };
  
const persistedReducerForBusket = persistReducer(persistConfig, basketReducer)
const presistReudcerForUser = persistReducer(persistConfig, userReducer)
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        app: appSlice,
        basket: persistedReducerForBusket,
        userStatus: presistReudcerForUser
        
    },
   middleware: (getDefaultMiddleware) => {
    
       return getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          }
       }).concat(api.middleware)
   }
})


export const persistor = persistStore(store);







// import { configureStore } from "@reduxjs/toolkit";
// import { api } from "./api/api";

// import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import appSlice from "./slice/appSlice";
// import  basketSlice  from "./slice/basketSlice";

// export const store = configureStore({
//     reducer: {
//         [api.reducerPath]: api.reducer,
//         app: appSlice,
//         basket: basketSlice,
//     },
//    middleware: (getDefaultMiddleware) => {
//        return getDefaultMiddleware().concat(api.middleware)
//    }
// })

// setupListeners(store.dispatch)
