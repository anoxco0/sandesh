// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom"
import { Authentication } from "./components/Authentication/Authentication";
import { Home } from "./components/UI/Home/Home";

export const Router = ()=>{
    return(
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/authentication" element={<Authentication/>} />
        </Routes>
    )
}