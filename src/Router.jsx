import { Route, Routes } from "react-router-dom"
import { Login } from "./components/Authentication/Login/Login"
import { Register } from "./components/Authentication/Register/Register"
import { Home } from "./components/UI/Home/Home";

export const Router = ()=>{
    return(
        <Routes>
           <Route path="/" element={ <Home/> } />
           <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
        </Routes>
    )
}