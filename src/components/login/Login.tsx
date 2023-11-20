import React, { useState, useRef } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const refForm = useRef<HTMLFormElement|null>(null)
    const navigate = useNavigate()
    const In = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(email, password)
        navigate("/catalog")
        refForm.current?.reset()
    }
    return(
        <div className="Login">
           
            <form onSubmit={In} ref={refForm} className="form_login">
                <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form_login__input"/>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form_login__input"/>
                <button type="submit" className="form_login__button">Войти</button>
            </form>
           
        </div>
    )
}