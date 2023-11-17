import React from "react";
import Card from "./Card";
import { ICard } from "../models/ICard";

const Catalog:React.FC = ()=>{
    const data: ICard[] = [
        {
          id:0,
          name:"Кошачий корм1",
          price:500,
          image: "/picture/cat1.jpg"
        },
        {
          id:1,
          name:"Кошачий корм2",
          price:600,
          image: "/picture/cat2.jpg"
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
      
    return(
        <div>
 <div className='container_cards'>
     {data.map((d)=>
    
      <Card key={d.id} card={d}/>
    
     )}
     </div>
        </div>
    )
}

export default Catalog;