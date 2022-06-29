import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "./components/Authentication/Login/Login"
import { Register } from "./components/Authentication/Register/Register"
import { Home } from "./components/UI/Home/Home";
import { useSelector } from "react-redux";

const PrivateRoute=({isAuthenticated, children})=>{
    return isAuthenticated?children:<Navigate to={"/register"} />;
  }

export const Router = ()=>{
    const {isAuthenticated } = useSelector(store=>store.authReducer); 

    return(
        <Routes>
           <Route path="/" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home/>
            </PrivateRoute>
          } />
           <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
        </Routes>
    )
}