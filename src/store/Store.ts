
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import  cardReducer  from "./reducers/CardSlice";
import basketReducer from "./reducers/BasketSlice";
//import {cardsAPI} from 

const rootReducer = combineReducers({
    cardReducer,
    basketReducer,
   // [cardsAPI.reducersPath]:
})

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']