import React from "react";
import { ICard } from "../models/ICard";
import "./Card.css"
import { useNavigate } from "react-router-dom";

interface CardProps{
    card:ICard;

}

const Card:React.FC<CardProps> = ({card})=>{
    const navigate = useNavigate()
    return (
        <div className="card" onClick={()=>navigate(`details/${card.id}`, {state:{details:card}, replace: true})}>
            <div className="card__container">
            <p className="card__title">{card.name}</p>
            <img src={card.image} alt="cat1" className="card__image"/>
            <p>{card.price}</p>
           
            <button className="card__button">Купить</button>
            </div>
            
        </div>
    )
}
export default Card;