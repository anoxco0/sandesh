import { useSelector } from "react-redux";
import "./messnav.css";
import IconButton from "@mui/material/IconButton";
import { Menu } from "../../svg/Menu";
import {Search} from "../../svg/Search"
import {ProfilePic} from "../../svg/ProfilePic"

export const MessNav = () => {
    const {theme} = useSelector(store=>store.settingReducer);
    const {reciever} = useSelector(store=>store.messegeReducer);
  return (
    <div className="mess_nav" style={{backgroundColor:theme[0]}}>
      {reciever?
       <div style={{display:"flex",height:"40px", alignItems:"center", gap:"10px"}}>
        <div style={{height:"40px", width:"40px", borderRadius:"50%"}}>
          {reciever.avatar?<img src={reciever.avatar} style={{height:"40px", width:"40px", borderRadius:"50%"}} alt="" />:<ProfilePic/>}
        </div>
        <div>
        <div style={{fontSize:"20px", fontWeight:"600", color:"white"}}>{reciever.name}</div>
        <div style={{fontSize:"12px", fontWeight:"400", color:"white"}}>{reciever.isOnline?"online":"offline"}</div>
        </div>
        <div></div>
       </div>:
      <div style={{color:"white", fontSize:"20px", marginLeft:"20px"}}>Live Chat...</div>
      }
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
