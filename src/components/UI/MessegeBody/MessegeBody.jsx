import { useEffect, useState } from "react";
import "./messegebody.css";
import imgback from "./messege_background.png";
import 'firebase/auth';
import 'firebase/firestore';

export const MessegeBody = () => {
  const [messege, setMessege] = useState([]);

  return (
    <div
      className="messege_body"
      style={{ background: `url(${imgback})`, opacity: "0.07" }}
    >
      <div className="messegeBody"></div>
    </div>
  );
};
