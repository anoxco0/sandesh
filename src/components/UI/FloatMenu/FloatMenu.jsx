import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../../Authentication/firebase-config";
import {useNavigate} from "react-router-dom";
import "./floatmenu.css";

export const FloatMenu = () => {
    const {theme} = useSelector(store=>store.settingReducer);
    const navigate=useNavigate()
    const signout= async()=>{
       await signOut(auth);
       navigate("/login")
      
    }
    return (
        <div style={{backgroundColor:theme[0]}} className="float_menu">
          <div>New group</div>
          <div>Profile</div>
          <div>Catalog</div>
          <div>Starred messeges</div>
          <div>Labels</div>
          <div>Settings</div>
          <div onClick={()=>signout()}>Log Out</div>
        </div>
    )
}