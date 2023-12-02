
import { ICard } from '../../models/ICard';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface BasketState {
    cards:ICard[];
    balance: number;
}

const initialState: BasketState ={
    cards: [],
    balance: 0
}

export const BacketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasket(state,action: PayloadAction<ICard[]>){
            state.cards = action.payload;
        },
        setBasketBalance(state,action: PayloadAction<number>){
            state.balance = action.payload;
        },
        addGoods(state, action: PayloadAction<ICard>){
            state.cards = [...state.cards, action.payload];
        },
        deleteGoods(state, action: PayloadAction<ICard>){
            state.cards = state.cards.filter((card)=>card.id_g!==action.payload.id_g)
        }


    },

})
export const {setBasket, setBasketBalance, addGoods, deleteGoods} = BacketSlice.actions;
export default BacketSlice.reducer;