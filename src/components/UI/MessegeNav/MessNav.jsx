import { useSelector } from "react-redux";
import "./messnav.css";
import IconButton from "@mui/material/IconButton";
import { Menu } from "../../svg/Menu";
import {Search} from "../../svg/Search"

export const MessNav = () => {
    const {theme} = useSelector(store=>store.settingReducer)
  return (
    <div className="mess_nav" style={{backgroundColor:theme[0]}}>
      <div style={{color:"white", fontSize:"20px", marginLeft:"20px"}}>Live Chat...</div>
      <div>
      <IconButton>
      <Search/>
        </IconButton>
        <IconButton>
         <Menu/>
        </IconButton>
      </div>
    </div>
  );
};
