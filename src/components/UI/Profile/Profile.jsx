import { useDispatch, useSelector } from "react-redux";
import { profileSlide } from "../../../redux/contacts/action";
import "./Profile.css";

export const Profile = () => {
  const { theme } = useSelector((store) => store.settingReducer);
  const { username } = useSelector((store) => store.authReducer);
  const {name} = useSelector(store=>store.contactsReducer)
  const dispatch = useDispatch();
  console.log('name',name);

  return (
    <div className="profile">
      <div style={{ width: "100%", height: "40vh", backgroundColor: theme[0] }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "100px 20px",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div onClick={() => dispatch(profileSlide(false))}>
            <svg viewBox="0 0 24 24" width="34" class="">
              <path
                fill="white"
                d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
              ></path>
            </svg>
          </div>
          <div style={{ fontSize: "28px", fontWeight: "600", color: "white" }}>
            Profile
          </div>
        </div>
      </div>
      <div style={{position:'absolute', width:"100%"}}>
        <div style={{width:"200px", border:`10px solid ${theme[1]}`, margin:"auto", height:"200px", marginTop:"-120px", borderRadius:"50%"}}>
            <img src="" alt="" />
        </div>
      </div>
      <div style={{ backgroundColor: theme[1], height: "60vh" }}>
        <div style={{ width: "100%", display: "flex", gap: "40px", padding:"20vh 30px 5vh" }}>
          <div>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              class=""
            >
              <path
                d="M3.5 5v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-14a2 2 0 0 0-2 2Zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3Zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1h-12v-1Z"
                fill="rgba(255, 255, 255, 0.6)"
              ></path>
            </svg>
          </div>
          <div style={{color:"rgba(255, 255, 255, 0.6)", fontSize:"18px"}}>{name}</div>
        </div>
        <div style={{ width: "100%", display: "flex", gap: "40px", padding:"0 30px" }}>
          <div>
            <svg width="24px" viewBox="0 0 19 6" class="">
              <path
                fill="rgba(255, 255, 255, 0.6)"
                d="M13.322 4.856a.956.956 0 0 1-.25-.425 4 4 0 0 1-.112-.564 8.197 8.197 0 0 0-.08-.399.677.677 0 0 0-.178-.335c-.127-.128-.355-.235-.686-.321a7.837 7.837 0 0 0-1.15-.2 14.194 14.194 0 0 0-1.384-.075c-.486-.004-.947.013-1.383.052-.436.039-.82.098-1.154.18-.333.08-.562.184-.688.312a.723.723 0 0 0-.184.353 6.77 6.77 0 0 0-.092.468c-.03.185-.067.366-.109.544a.893.893 0 0 1-.23.434c-.107.108-.27.204-.487.289a7.246 7.246 0 0 1-.706.231c-.253.07-.502.13-.75.182a16.46 16.46 0 0 0-1.093.264 4.616 4.616 0 0 1-.456.095 1.57 1.57 0 0 1-.387.014.951.951 0 0 1-.339-.098 1.26 1.26 0 0 1-.321-.243 1.962 1.962 0 0 1-.456-.732A2.522 2.522 0 0 1 .5 3.995c.004-.309.062-.613.175-.911.113-.3.284-.564.514-.796.39-.393.884-.734 1.48-1.024.598-.289 1.262-.529 1.995-.72a16.08 16.08 0 0 1 2.339-.42 22.042 22.042 0 0 1 5.007.038c.825.103 1.6.252 2.327.449.727.196 1.387.441 1.98.734s1.08.63 1.458 1.013c.226.227.4.49.522.786.123.297.19.602.201.914a2.45 2.45 0 0 1-.143.92c-.107.3-.276.567-.505.798a.698.698 0 0 1-.485.223 2.434 2.434 0 0 1-.56-.05 6.695 6.695 0 0 1-.462-.1 33.98 33.98 0 0 1-.995-.27l-.528-.138a7.67 7.67 0 0 1-.155-.04l-.127-.036a13.44 13.44 0 0 0-.312-.083 4.737 4.737 0 0 1-.333-.099 2.03 2.03 0 0 1-.31-.133 1.085 1.085 0 0 1-.261-.194Z"
              ></path>
            </svg>
          </div>
          <div style={{fontSize:"18px", color:"rgba(255, 255, 255, 0.6)"}}>{username}</div>
        </div>
      </div>
    </div>
  );
};
