import "./messsearch.css";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Auth, db } from "../../Authentication/firebase-config";
import { updateDoc, doc, collection, addDoc, getFirestore, Timestamp, setDoc} from "firebase/firestore";
import {  useState } from "react";
import { Emoji } from "../../svg/Emoji";
import { Clip } from "../../svg/Clip";
import { Send } from "../../svg/Send";

export const MessSearch = () => {
  const { theme } = useSelector((store) => store.settingReducer);
  const {username}=useSelector(store=>store.authReducer);
  const {reciever} = useSelector(store=>store.messegeReducer);
  const user1 = Auth?.currentUser?.uid;

  const [messege, setMessege] = useState("");
  async function focus() {
    await updateDoc(doc(db, "sandesh", Auth.currentUser.uid), {
      typing: true,
    });
  }
  async function blur() {
    await updateDoc(doc(db, "sandesh", Auth.currentUser.uid), {
      typing: false,
    });
  }
  const handleInput =(e)=>{
       setMessege(e.target.value);
  }

  const handleKeyDown =async(e)=>{
     if(e.key==="Enter"&&messege&&reciever){

      const user2 = reciever.uid;
  
      const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
  
      let url;
  
      await addDoc(collection(db, "sandesh", id, "chat"), {
        messege,
        from: user1,
        to: user2,
        createdAt: Timestamp.fromDate(new Date()),
        media: url || "",
      });
  
      await setDoc(doc(db, "lastMsg", id), {
        messege,
        from: user1,
        to: user2,
        createdAt: Timestamp.fromDate(new Date()),
        media: url || "",
        unread: true,
      });
  
      e.target.value=""
     }
     else
      if(e.key==="Enter"&&messege){
      await addDoc(collection(getFirestore(), "messeges"),{
        name:username,
        user:Auth.currentUser.email,
        text:messege,
        createdAt:Timestamp.fromDate(new Date()),
      })
      e.target.value="";
    }
  }
  const handleArrow = async()=>{
    if(messege&&reciever){
      const user2 = reciever.uid;
  
      const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
  
      let url;
  
      await addDoc(collection(db, "sandesh", id, "chat"), {
        messege,
        from: user1,
        to: user2,
        createdAt: Timestamp.fromDate(new Date()),
        media: url || "",
      });
  
      await setDoc(doc(db, "lastMsg", id), {
        messege,
        from: user1,
        to: user2,
        createdAt: Timestamp.fromDate(new Date()),
        media: url || "",
        unread: true,
      });
  
      document.getElementById('mess_input').value=""
     }
     else{
    await addDoc(collection(getFirestore(), "messeges"),{
      name:username,
      user:Auth.currentUser.email,
      text:messege,
      createdAt:Timestamp.fromDate(new Date()),
    })
    document.getElementById('mess_input').value=""
  }
  }
  
  return (
    <div className="mess_search" style={{ backgroundColor: theme[0] }}>
      <IconButton>
        <Emoji/>
      </IconButton>
      <IconButton className="inputSvg1">
       <Clip/>
      </IconButton>
      <input
        type="text"
        name=""
        id="mess_input"
        placeholder="Type a messege..."
        onChange={(e)=>{handleInput(e)}}
        onKeyDown={handleKeyDown}
        onFocus={focus}
        onBlur={blur}
      />
    
          <IconButton  onClick={()=>handleArrow()}>
            <Send/>
          </IconButton>
    </div>
  );
};
