import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {db, Auth} from '../../Authentication/firebase-config';
import './allcontact.css';


export const AllContacts = ()=>{
    const {theme} = useSelector(store=>store.settingReducer);
    const [users, setUsers] = useState([]);
    const user1 = Auth.currentUser?.uid;
    useEffect(()=>{
        if(user1){
            const usersRef = collection(db, "sandesh");
    // create query object
    const q = query(usersRef, where("uid", "not-in", [user1]));
    // execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let user = [];
      querySnapshot.forEach((doc) => {
        user.push(doc.data());
      });
      setUsers(user);
    });
    return () => unsub();
        }
    },[user1])
    console.log(users)
    
    return (
        <div className='allcontact' style={{backgroundColor:theme[1]}}>
             {users.map((el)=><div className="all_contact" key={el.uid}>
                <div style={{height:"50px", width:"50px", backgroundColor:"gray", borderRadius:"50%", marginRight:"20px"}}></div>
               <div style={{borderBottom:"1px solid #2d3940", flexGrow:1, display:'flex', padding:"20px 0", justifyContent:"space-between"}}>
                <div style={{fontSize:"20px"}}>
                {el.name}
                </div>
                <div>{el.isOnline?<div>online</div>:<div style={{color:"gray"}}>offline</div>}</div>
               </div>
             </div>)}
        </div>
    )
}