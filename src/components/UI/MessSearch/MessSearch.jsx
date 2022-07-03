import "./messsearch.css";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Auth, db } from "../../Authentication/firebase-config";
import { updateDoc, doc, collection, addDoc, getFirestore, Timestamp} from "firebase/firestore";
import {  useState } from "react";
import { Emoji } from "../../svg/Emoji";
import { Clip } from "../../svg/Clip";
import { Send } from "../../svg/Send";

export const MessSearch = () => {
  const { theme } = useSelector((store) => store.settingReducer);
  const {username}=useSelector(store=>store.authReducer);
  console.log(username)
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

  // console.log(Auth.currentUser)
  const handleKeyDown =async(e)=>{
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
    await addDoc(collection(getFirestore(), "messeges"),{
      name:username,
      user:Auth.currentUser.email,
      text:messege,
      createdAt:Timestamp.fromDate(new Date()),
    })
    document.getElementById("mess_input").value=""
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
