import { useSelector } from "react-redux";
import "./navbar.css";

export const Navbar = () => {
  const { theme } = useSelector((store) => store.settingReducer);
  return (
    <div className="con_nav" style={{ background: theme[0] }}>
      <div className="profile_pic">
        <img src="" alt="" />
      </div>
      <div className="con_nav_icons">
        <svg viewBox="0 0 24 24" width="30px" class="">
          <path
            fill="rgba(255, 255, 255, 0.6)"
            d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
          ></path>
        </svg>
        <svg viewBox="0 0 24 24" width="30px"class="">
          <path
            fill="rgba(255, 255, 255, 0.6)"
            d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
