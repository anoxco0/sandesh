import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allContacts, Avtar, Name } from "../../../redux/contacts/action";
import { recieverUser } from "../../../redux/Messeges/action";
import { db, Auth } from "../../Authentication/firebase-config";
import { ProfilePic } from "../../svg/ProfilePic";
import "./allcontact.css";

export const AllContacts = () => {
  const dispatch = useDispatch()
  const [selectUser, setSelectUser] = useState(null)
  const { theme } = useSelector((store) => store.settingReducer);
  const {allcontacts} = useSelector(store=>store.contactsReducer)
  const user1 = Auth.currentUser?.uid;
  useEffect(() => {
    if (user1) {
      const usersRef = collection(db, "sandesh");
      const q = query(usersRef, orderBy("createdAt", "asc"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let user = [];
        querySnapshot.forEach((doc) => {
          if(doc.data().uid===Auth.currentUser.uid) {
            dispatch(Name(doc.data().name));
            dispatch(Avtar(doc.data().avatar))
          }
          else {
            user.push(doc.data());}
        });
        dispatch(allContacts(user));
      });
      return () => unsub();
    }
  }, [dispatch, user1]);
  return (
    <div className="allcontact" style={{ backgroundColor: theme[1] }}>
      {allcontacts&&allcontacts.map((el) => (
        <div className="all_contact" key={el.uid} style={{backgroundColor:el.uid===selectUser?"rgba(255, 255, 255, 0.2)":""}} onClick={()=>{dispatch(recieverUser(el)); setSelectUser(el.uid)}}>
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "gray",
              borderRadius: "50%",
              marginRight: "20px",
            }}
          >
            {el.avatar?<img src={el.avatar} style={{width:"50px", borderRadius:"50%"}} alt="" />:<ProfilePic/>}
          </div>
          <div
            style={{
              borderBottom: "1px solid #2d3940",
              flexGrow: 1,
              display: "flex",
              padding: "20px 0",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: "20px" }}>{el.name}</div>
              <div style={{display:"flex",marginLeft:"5px"}}>{el.isOnline ? <div style={{color:'white'}}>online</div> : <div style={{color:"gray"}}>offline</div>}</div>
            </div>
            <div>{el.typing ? <div style={{fontSize:"14px"}}>typing...</div> : ""}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
