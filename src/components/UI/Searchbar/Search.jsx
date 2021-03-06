import "./search.css";
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react';
import {FloatChat} from '../FloatChat/FloatChat'
import { search_name } from "../../../redux/contacts/action";
import { Auth, db } from "../../Authentication/firebase-config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";


export const Search = () => {
    const {theme} = useSelector(store=>store.settingReducer);
    const dispatch = useDispatch();
    const [focus, setFocus] = useState(false);
    // const [data, setData] = useState([]);
    const [chats, setChats] = useState(false);
    const onFocus = ()=> setFocus(true);
    const onBlur = ()=>setFocus(false);
    const { datas } = useSelector(store=>store.contactsReducer);
    const user1 = Auth.currentUser?.uid;
    const handleText=()=>{
      if (user1) {
        const usersRef = collection(db, "sandesh");
        const q = query(usersRef, orderBy("createdAt", "asc"));
        onSnapshot(q, (querySnapshot) => {
          let user = [];
          querySnapshot.forEach((doc) => {
            if(doc.data().uid===Auth.currentUser.uid) {
            }
            else {
              user.push(doc.data());}
          });
          dispatch(search_name(document.getElementById("search_inp").value, user));
        });
    }
  }
    console.log(datas)
    const debounce = (func, delay)=>{
        setTimeout(()=>{
          func()
        }, delay)
    }
  return (
    <div className="search" style={{background:theme[1]}}>
      <div style={{backgroundColor:theme[0]}}>
        {focus?<svg onClick={onBlur} viewBox="0 0 24 24" width="24" height="24" className=""><path fill="#008069" d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path></svg>:
        <svg viewBox="0 0 24 24" width="30px" className="">
          <path
            fill="rgba(255, 255, 255, 0.6)"
            d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
          ></path>
        </svg>}
         <input type="text" name="" id="search_inp" placeholder="Search or start new chat"onInput={(e)=>{debounce(handleText, 2000); onFocus(e)}} />
          {chats?<FloatChat/>:""}
      </div>
        <svg onClick={()=>setChats(!chats)}  viewBox="0 0 24 24" width="24" height="24" className="">
          <path
            fill="rgba(255, 255, 255, 0.6)"
            d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"
          ></path>
        </svg>
    </div>
  );
};
