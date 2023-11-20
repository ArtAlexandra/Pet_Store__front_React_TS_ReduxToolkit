import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "../../models/ICard";

const initialState:ICard = {
    id:0,
    name:"name in CardSlice",
    price:0,
    image:"",
    description:"",
    number:0,
    add:false
}

export const CardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {}
})

export default CardSlice.reducer