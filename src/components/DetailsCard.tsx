import React, { useEffect, useState } from "react";
import { ICard } from '../models/ICard';
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { fetchCards } from "../store/reducers/ActionCreators";
import { addGoods } from "../store/reducers/BasketSlice";
/*
const data: ICard[] = [
    {
      id:0,
      name:"Кошачий корм1",
      price:500,
      image: "/picture/cat1.jpg",
      description : "Аппетитный обед с лососем Whiskas - это сбалансированный рацион для здоровой и счастливой жизни Вашей кошки. Хрустящие подушечки с нежным паштетом внутри обязательно придутся по вкусу Вашей любимице. Кроме того, Whiskas содержит все необходимое, чтобы еда Вашей кошки была не только вкусной, но и полезной"
    },
    {
      id:1,
      name:"Кошачий корм2",
      price:600,
      image: "/picture/cat2.jpg",
      description:"Оптимальное сочетание питательных веществ и нутриентов для подержания обмена веществ Витамин Е и цинк для иммунитетаОмега-6 и цинк для здоровья кожи и шерстиБаланс кальция и фосфора для здоровья костей"
    },
    {
        id:2,
        name:"Кошачий корм3",
        price:100,
        image: "/picture/cat3.jpg"
        },
        {
          id:3,
          name:"Кошачий корм4",
          price:800,
          image: "/picture/cat4.jpg"
          },
          {
            id:4,
            name:"Кошачий корм5",
            price:900,
            image: "/picture/cat5.jpg"
            },
            {
              id:5,
              name:"Собачий корм1",
              price:40,
              image: "/picture/dog1.jpg"
              },
              {
                id:6,
                name:"Собачий корм2",
                price:300,
                image: "/picture/dog2.jpg"
                },
                {
                  id:7,
                  name:"Собачий корм3",
                  price:100,
                  image: "/picture/dog3.jpg"
                  },
                  {
                    id:8,
                    name:"Собачий корм4",
                    price:500,
                    image: "/picture/dog4.jpg"
                    },
                    {
                      id:9,
                      name:"Собачий корм5",
                      price:200,
                      image: "/picture/dog5.jpg"
                      },

  ]
  */
const DetailsCard:React.FC = ()=>{

  
    const {id} = useParams()

    

    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const {cards, isLoading,error} = useAppSelector(state=>state.cardReducer);
   
    const selectedCard = cards.find((card)=>card.id_g===Number(id));

    useEffect(()=>{
        dispatch(fetchCards())
    }, [])
    const Add = ()=>{
      console.log("tyt")
      if(selectedCard){
      dispatch(addGoods(selectedCard))
      }
    }
    const [quantity, setQuantity] = useState<number>(1)
    const [amount, setAmount] = useState<number>(0)
    useEffect(()=>{
      const cost = quantity* Number(selectedCard?.price)
      setAmount(cost)
    }, [quantity])
    return(
        <div>
           
           
            <button onClick={()=>navigate("/catalog")}>Назад</button>
            <p>{selectedCard?.title}</p>
            {/*selectedCard?.image&&  <img src={"data:image/jpeg;"+URL.createObjectURL(selectedCard?.image)} alt="card" width={200} height={250}/>*/}
           
            <p>{selectedCard?.mark}</p>
            <p>{selectedCard?.price}</p>
          
          <button onClick={()=>setQuantity(quantity + 1)}>+</button>  <p>{quantity}</p><button onClick={()=>setQuantity(quantity - 1)}>-</button>
           <p>{amount}</p>
            <Button variant="success" onClick={Add}>Добавить в корзину</Button>
            <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Описание">
      <p>{selectedCard?.description}</p>
      </Tab>
      <Tab eventKey="profile" title="Состав">
        <p>Какой-то большой состав</p>
      </Tab>
      <Tab eventKey="contact" title="Отзывы" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>

        </div>
    )
}

export default DetailsCard;