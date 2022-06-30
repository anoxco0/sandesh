import { useSelector } from "react-redux";
import "./messnav.css";
import IconButton from "@mui/material/IconButton";

export const MessNav = () => {
    const {theme} = useSelector(store=>store.settingReducer)
  return (
    <div className="mess_nav" style={{backgroundColor:theme[0]}}>
      <div style={{color:"white", fontSize:"20px", marginLeft:"20px"}}>Live Chat...</div>
      <div>
      <IconButton>
      <svg viewBox="0 0 24 24" width="40px" className="">
          <path
            fill="rgba(255, 255, 255, 0.6)"
            d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
          ></path>
        </svg>
        </IconButton>
        <IconButton>
          <svg
            viewBox="0 0 24 24"
            width="30px"
            className=""
            
          >
            <title>Menu</title>
            <path
              fill="rgba(255, 255, 255, 0.6)"
              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
            ></path>
          </svg>
        </IconButton>
      </div>
    </div>
  );
};
