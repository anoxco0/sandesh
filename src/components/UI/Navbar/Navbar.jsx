import { useDispatch, useSelector } from "react-redux";
import { FloatMenu } from "../FloatMenu/FloatMenu";
import "./navbar.css";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { profileSlide } from "../../../redux/contacts/action";
import { ProfilePic } from "../../svg/ProfilePic";
import { Menu } from "../../svg/Menu";
import { Chat } from "../../svg/Chat";

export const Navbar = () => {
  const dispatch = useDispatch()
  const [nav, setNav] = useState(false);
  const { theme } = useSelector((store) => store.settingReducer);
  return (
    <div className="con_nav" style={{ background: theme[0] }}>
      <div className="profile_pic" onClick={()=>dispatch(profileSlide(true))}>
        <ProfilePic/>
      </div>
      <div className="con_nav_icons">
        <IconButton aria-label="delete">
          <Chat/>
        </IconButton>
        <IconButton onClick={() => setNav(!nav)}>
          <Menu/>
        </IconButton>
      </div>
      {nav ? <FloatMenu /> : ""}
    </div>
  );
};
