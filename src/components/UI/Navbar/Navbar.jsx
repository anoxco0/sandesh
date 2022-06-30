import { useSelector } from "react-redux";
import {FloatMenu} from "../FloatMenu/FloatMenu"
import "./navbar.css";
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { theme } = useSelector((store) => store.settingReducer);
  return (
    <div className="con_nav" style={{ background: theme[0] }}>
      <div className="profile_pic">
        <img src="" alt="" />
      </div>
      <div className="con_nav_icons">
      <IconButton aria-label="delete">
        <svg viewBox="0 0 24 24" width="30px" className="">
          <title>New chat</title>
          <path
            fill="rgba(255, 255, 255, 0.6)"
            d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
          ></path>
        </svg>
      </IconButton>
      <IconButton>
        <svg viewBox="0 0 24 24" width="30px"className="" onClick={()=>setNav(!nav)}>
          <title>Menu</title>
          <path
            fill="rgba(255, 255, 255, 0.6)"
            d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
          ></path>
        </svg>
      </IconButton>
      </div>
      {nav?<FloatMenu/>:""}
    </div>
  );
};
