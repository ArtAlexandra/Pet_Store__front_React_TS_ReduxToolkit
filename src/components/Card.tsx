import React, { useState } from "react";
import { ICard } from "../models/ICard";
import "./Card.css"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";
import { databaseConfig } from '../../../back/src/config/configuration';
import  axios  from "axios";
import {Buffer} from "buffer" 
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { addGoods } from "../store/reducers/BasketSlice";

interface CardProps{
    card:ICard;

}

const Card:React.FC<CardProps> = ({card})=>{
    const navigate = useNavigate()
    const dispatch =  useAppDispatch()
    const {cards, balance} = useAppSelector(state=>state.basketReducer)
    
   const addGoodsInCard = ()=>{
    console.log("add")
        
        dispatch(addGoods(card))
        
   }
  /*
    if(card.image){
       // base64String= new Blob([card.image])//.toString('base64')

    reader.readAsDataURL(new Blob([card.image]));
  

    
    reader.onloadend = function() {
        
        base64data = reader.result
    
        console.log(""+base64data)
        console.log(card.image)
      
    }

   
    //

}*/
    return (
        <div className="card" >
            <div className="card__container">
            <p className="card__title" onClick={()=>navigate(`details/${card.id_g}`, {state:{details:card}, replace: true})}>{card.title}</p>
            

          
            {/**"data:image/jpeg;"+ */}
            <p>{card.price} руб.</p>
            {card.price && <Button variant="outline-secondary" disabled>{card?.price}</Button>}
           
           
            <Button variant="success" onClick={addGoodsInCard}>Добавить в корзину</Button>
            </div>
            
        </div>
    )
}
export default Card;