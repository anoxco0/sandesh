import { useState } from "react";
import "./App.css";
import { Home } from "./components/UI/Home/Home";
import { Loading } from "./components/Loading/Loading";

function App() {
  const [isLoding, setIsLoding] = useState(true);
  setTimeout(() => {
    setIsLoding(false);
  }, 3000);
  return (
    <div className="App">
      {isLoding?<Loading/>:""}
      <Home/>
    </div>
  );
}

export default App;
