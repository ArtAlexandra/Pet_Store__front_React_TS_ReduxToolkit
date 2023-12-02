import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ICard } from '../../models/ICard';
import { fetchCards } from "./ActionCreators";

interface CardsState {
   cards: ICard[];
   isLoading:boolean;
   error:string;
}

const initialState:CardsState = {
    cards: [],
    isLoading:false,
    error:""
 }

export const CardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {},
    extraReducers:{
        [fetchCards.fulfilled.type]:(state, action: PayloadAction<ICard[]>)=>{
            state.isLoading = false;
            state.error = '';
            state.cards = action.payload;
        },

        [fetchCards.pending.type]:(state)=>{
            state.isLoading = true;
        },

        [fetchCards.rejected.type]:(state, action: PayloadAction<string>)=>{
            state.isLoading = false;
            state.error = action.payload;
        }

    }
})

export default CardSlice.reducer