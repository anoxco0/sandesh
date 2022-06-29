import { useState } from "react";
import "./App.css";

import { Loading } from "./components/Loading/Loading";
import { Router } from "./Router";

function App() {
  const [isLoding, setIsLoding] = useState(true);
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
