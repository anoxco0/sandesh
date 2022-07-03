import "./login.css";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Authentication } from "../../../redux/Authentication/action";
import { signInWithEmailAndPassword, } from "firebase/auth";
import { Auth,db } from "../firebase-config";
import { updateDoc, doc } from "firebase/firestore";
import { Exclamation } from "../../svg/Exclamation";
import { ShowPassword } from "../../svg/ShowPassword";
import { HidePassword } from "../../svg/HidePassword";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passVisibility, setPassVisibility] = useState("password");
  const [invalid, setInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useSelector((store) => store.settingReducer);

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(Auth, email, password);
      if (user.user.email) {
        setInvalid(false);
        await updateDoc(doc(db, 'sandesh', Auth.currentUser.uid),{
          isOnline:true
        })
        navigate("/");
      }
    } catch (error) {
      setInvalid(true);
      console.log(error.messege);
    }
  };

  return (
    <div className="login" style={{ backgroundColor: theme[1] }}>
      <form onSubmit={(e) => login(e)}>
        <h1>Login here</h1>
        {invalid ? (
          <div style={{ color: "red", display:'flex', alignItems:"center", gap:"10px" }}>
            {" "}
            <Exclamation/>
            {" "}
            <p> invalid email or Password</p>
          </div>
        ) : (
          ""
        )}
        <div className="login_email">
          <input
            autoComplete="off"
            required
            id="login_email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email here..."
          />
        </div>
        <div className="login_password">
          <input
          autoComplete="off"
            required
            type={passVisibility}
            name=""
            id="login_password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password here..."
          />
          <div
            onClick={() => {
              passVisibility === "password"
                ? setPassVisibility("text")
                : setPassVisibility("password");
            }}
          >
            {passVisibility === "password" ? (
              <ShowPassword/>
            ) : (
              <HidePassword/>
            )}
          </div>
        </div>
        <div className="login_submit">
          <input id="login_submit" type="submit" placeholder="Submit" />
        </div>
        <div style={{display:"flex"}}>No account, <span style={{color:"blue", cursor:"pointer"}} onClick={()=>dispatch(Authentication("register"))}> {" "} click here</span> </div>
      </form>
    </div>
  );
};
