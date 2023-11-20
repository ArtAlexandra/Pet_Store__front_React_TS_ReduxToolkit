import React from "react";
import { useNavigate } from "react-router-dom";

const Basket:React.FC = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>navigate(-1)}>Назад</button>
            Basket
        </div>
    )
}

export default Basket;