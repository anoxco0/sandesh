import { useSelector } from "react-redux"
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";


export const Authentication = () =>{
    const {authentication} = useSelector(store=>store.authReducer);
    return (<>
       {authentication==="login"? <Login/>: <Register/> }
    </>)
}