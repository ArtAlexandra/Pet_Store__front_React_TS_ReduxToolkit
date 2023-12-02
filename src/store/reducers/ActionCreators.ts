import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICard } from "../../models/ICard";



export const fetchCards = createAsyncThunk(
    'cards/fetchAll',
    async(_, thunkAPI)=>{
        try{

            const response = await axios.get<ICard[]>("http://localhost:3001/goods/getall-goods");
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Не удалось загрузить товар");
        }
    }
)

