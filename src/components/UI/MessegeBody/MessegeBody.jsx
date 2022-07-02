import { useEffect, useState } from "react";
import "./messegebody.css";
import imgback from "./messege_background.png";
import 'firebase/auth';
import 'firebase/firestore';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Auth, db } from "../../Authentication/firebase-config";
// import { useEffect, useState } from "react";

export const MessegeBody = () => {
  const [messege, setMessege] = useState([]);
  useEffect(()=>{
    const msgsRef = collection(db, "messeges", Auth?.currentUser.uid, "chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessege(msgs);
    });
  },[])
  console.log(messege)

  return (
    <div
      className="messege_body"
      style={{ background: `url(${imgback})`, opacity: "0.07" }}
    >
      <div className="messegeBody"></div>
    </div>
  );
};
