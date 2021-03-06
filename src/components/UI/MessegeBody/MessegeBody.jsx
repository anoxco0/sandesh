import { useEffect, useState } from "react";
import "./messegebody.css";
import imgback from "./messege_background.png";
import "firebase/auth";
import "firebase/firestore";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Auth, db } from "../../Authentication/firebase-config";
import {useSelector} from "react-redux"

export const MessegeBody = () => {
  const [messege, setMessege] = useState([]);
  const user1 = Auth?.currentUser?.uid;
  const {reciever} = useSelector(store=>store.messegeReducer);
  useEffect(() => {
    if(reciever){
      const user2 = reciever.uid;
      const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgsRef = collection(db, "sandesh", id, "chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));
    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessege(msgs);
    });
    }
    else{
    const msgsRef = collection(db, "messeges");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessege(msgs);
    });
  }
  }, [reciever, user1]);

  return (
    <div style={{ position: "relative" }}>
      <div
        className="messege_body"
        style={{
          background: `url(${imgback})`,
          opacity: "0.07",
          position: "absolute",
          width: "100%",
          height: "calc(100vh - 155px)",
        }}
      ></div>
      <div className="messegeBody">
        {messege.map((el, i) => (
          <div key={i} style={{ display: "flex", width: "100%" }}>
          {reciever?<div
          className="messege_div"
          style={{
            borderRadius:
              el.from === Auth.currentUser.uid
                ? "10px 0 10px 10px"
                : "0 10px 10px 10px",
            marginLeft: el.from === Auth.currentUser.uid ? "auto" : "10%",
            backgroundColor:
              el.from === Auth.currentUser.uid ? "#377D71" : "#2a3942",
            marginRight:
              el.from === Auth.currentUser.uid ? "10%" : "auto",
            marginTop: "20px",
          }}>
            <div style={{ color: "white", fontSize: "20px"}} >

              {el.messege}
            </div>
          </div>
          :<div key={i} style={{ display: "flex", width: "100%" }}>
            <div
              className="messege_div"
              style={{
                borderRadius:
                  el.user === Auth.currentUser.email
                    ? "10px 0 10px 10px"
                    : "0 10px 10px 10px",
                marginLeft: el.user === Auth.currentUser.email ? "auto" : "10%",
                backgroundColor:
                  el.user === Auth.currentUser.email ? "#377D71" : "#2a3942",
                marginRight:
                  el.user === Auth.currentUser.email ? "10%" : "auto",
                marginTop: "20px",
              }}
            >
              {el.user === Auth.currentUser.email ? (
                ""
              ) : (
                <div style={{ display: "flex", gap: "40px" }}>
                  <div style={{ color: "#FBB454" }}>{el.user}</div>
                  <div>{el.name}</div>
                </div>
              )}
              <div style={{ color: "white", fontSize: "20px" }}>{el.text}</div>
            </div>
          </div>}
          </div>
        ))}
      </div>
    </div>
  );
};
