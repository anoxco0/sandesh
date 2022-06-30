import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { Loading } from "./components/Loading/Loading";
import { isAuth, userName } from "./redux/Authentication/action";
import { Router } from "./Router";
import { auth } from "./components/Authentication/firebase-config";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoding, setIsLoding] = useState(true);
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    if(user?.email){
      dispatch(userName(user.email));
      dispatch(isAuth(true))
      dispatch(isAuth(true));
      navigate("/")
    }
    else{
      navigate("/login")
    }
  }, [dispatch, navigate, user]);
  setTimeout(() => {
    setIsLoding(false);
  }, 3000);
  
  
  return (
    <div className="App">
      {isLoding?<Loading/>:""}
      <Router />
    </div>
  );
}

export default App;
