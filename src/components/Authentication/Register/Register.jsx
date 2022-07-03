import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { Auth, db } from "../firebase-config";
import "./register.css";
import { Authentication } from "../../../redux/Authentication/action";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { ShowPassword } from "../../svg/ShowPassword";
import { HidePassword } from "../../svg/HidePassword";

export const Register = () => {
  const dispatch = useDispatch();
  const [passVisibility, setPassVisibility] = useState("password");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useSelector((store) => store.settingReducer);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(Auth, email, password);
      console.log(user);
      await setDoc(doc(db, "sandesh", user.user.uid), {
        uid: user.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
        typing:false,
      });
    } catch (error) {
      console.log(error.messege);
    }
  };

  return (
    <div className="register" style={{ backgroundColor: theme[1] }}>
      <form onSubmit={(e) => register(e)}>
        <h1>Register here</h1>
        <div className="req_name">
          <input
          required
            type="text"
            name=""
            id="reg_name"
            onChange={(e) => setName(e.target.value)}
            placeholder="enter your full Name here..."
          />
        </div>
        <div className="reg_email">
          <input
            required
            id="reg_email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email here..."
          />
        </div>
        <div className="reg_password">
          <input
            required
            type={passVisibility}
            name=""
            id="reg_password"
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
        <div className="reg_submit">
          <input id="reg_submit" type="submit" placeholder="Submit" />
        </div>
        <div style={{ display: "flex" }}>
          already have an account,{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => dispatch(Authentication("login"))}
          >
            {" "}
            click here
          </span>{" "}
        </div>
      </form>
    </div>
  );
};
