import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ICard } from "../../models/ICard";
import {deleteGoods, setBasketBalance} from "../../store/reducers/BasketSlice"
import "./Basket.css"

const Basket:React.FC = ()=>{
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
      const {cards, balance} = useAppSelector(state=>state.basketReducer);
     
      console.log(cards)
      
      useEffect(()=>{
        dispatch( setBasketBalance(100))
      

      }, [])

      const deleteGoodsInBasket = (card:ICard)=>{
        dispatch(deleteGoods(card));
      }
    return(
        <div>


            <button onClick={()=>navigate(-1)}>Назад</button>
            Basket
            <p>Balance : {balance}</p>
            <div >
            {cards.map((card)=>{
                return(
                    <div key={card.id_g} className="basket_card">
                        <p>{card.title}</p>
                        <p>{card.quantity}</p>
                        <p>{card.price}</p>
                        <button onClick={()=>deleteGoodsInBasket(card)}>Удалить</button>
                        
                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default Basket;