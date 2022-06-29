import { useState } from "react";
import "./App.css";
import { Home } from "./components/UI/Home/Home";
import { Loading } from "./components/Loading/Loading";
import { useSelector } from "react-redux";
import { Register } from "./components/Authentication/Register/Register";

function App() {
  const [isLoding, setIsLoding] = useState(true);
  setTimeout(() => {
    setIsLoding(false);
  }, 3000);
  const {isAuth} = useSelector(store=>store.authReducer); 
  return (
    <div className="App">
      {isLoding?<Loading/>:""}
      {isAuth? <Home/>:<Register/>}
    </div>
  );
}

export default App;
