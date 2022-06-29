import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import "./register.css";
import { userName } from "../../../redux/Authentication/action";

export const Register = () => {
  const dispatch = useDispatch();
  const [passVisibility, setPassVisibility] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const { theme } = useSelector((store) => store.settingReducer);
  
  const register = async (e) => {
      e.preventDefault();
      try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error.messege);
        }
    };
    
    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    dispatch(userName(user.email));
  }, [dispatch, user]);
  console.log(user)

  return (
    <div className="register" style={{ backgroundColor: theme[1] }}>
      <form onSubmit={(e) => register(e)}>
        <h1>Register here</h1>
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
         <div onClick={()=>{passVisibility==="password"?setPassVisibility("text"):setPassVisibility("password")}}>
         {passVisibility === "password" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <title>Show password</title>
              <desc>Created with Sketch.</desc>
              <g
                id="🔍-System-Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="ic_fluent_eye_show_24_filled"
                  fill="#212121"
                  fillRule="nonzero"
                >
                  <path
                    d="M12,9.0046246 C14.209139,9.0046246 16,10.7954856 16,13.0046246 C16,15.2137636 14.209139,17.0046246 12,17.0046246 C9.790861,17.0046246 8,15.2137636 8,13.0046246 C8,10.7954856 9.790861,9.0046246 12,9.0046246 Z M12,5.5 C16.613512,5.5 20.5960869,8.65000641 21.7011157,13.0643865 C21.8017,13.4662019 21.557504,13.8734775 21.1556885,13.9740618 C20.7538731,14.0746462 20.3465976,13.8304502 20.2460132,13.4286347 C19.3071259,9.67795854 15.9213644,7 12,7 C8.07693257,7 4.69009765,9.68026417 3.75285786,13.4331499 C3.65249525,13.8350208 3.24535455,14.0794416 2.84348365,13.979079 C2.44161275,13.8787164 2.19719198,13.4715757 2.29755459,13.0697048 C3.4006459,8.65271806 7.38448293,5.5 12,5.5 Z"
                    id="🎨-Color"
                  />
                </g>
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
            >
                <title>hide password</title>
              <path
                d="M2.21967 2.21967C1.9534 2.48594 1.9292 2.9026 2.14705 3.19621L2.21967 3.28033L6.25424 7.3149C4.33225 8.66437 2.89577 10.6799 2.29888 13.0644C2.1983 13.4662 2.4425 13.8735 2.84431 13.9741C3.24613 14.0746 3.6534 13.8305 3.75399 13.4286C4.28346 11.3135 5.59112 9.53947 7.33416 8.39452L9.14379 10.2043C8.43628 10.9258 8 11.9143 8 13.0046C8 15.2138 9.79086 17.0046 12 17.0046C13.0904 17.0046 14.0788 16.5683 14.8004 15.8608L20.7197 21.7803C21.0126 22.0732 21.4874 22.0732 21.7803 21.7803C22.0466 21.5141 22.0708 21.0974 21.8529 20.8038L21.7803 20.7197L15.6668 14.6055L15.668 14.604L8.71877 7.65782L8.72 7.656L7.58672 6.52549L3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967ZM12 5.5C10.9997 5.5 10.0291 5.64807 9.11109 5.925L10.3481 7.16119C10.8839 7.05532 11.4364 7 12 7C15.9231 7 19.3099 9.68026 20.2471 13.4332C20.3475 13.835 20.7546 14.0794 21.1565 13.9791C21.5584 13.8787 21.8028 13.4716 21.7024 13.0697C20.5994 8.65272 16.6155 5.5 12 5.5ZM12.1947 9.00928L15.996 12.81C15.8942 10.7531 14.2472 9.10764 12.1947 9.00928Z"
                fill="#212121"
              />
            </svg>
          )}
         </div>
        </div>
        <div className="reg_submit">
          <input id="reg_submit" type="submit" placeholder="Submit" />
        </div>
      </form>
    </div>
  );
};