// import { collection, query, where, onSnapshot } from 'firebase/firestore';
// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import {db, Auth} from '../../Authentication/firebase-config.js';
import './allcontact.css';


export const AllContacts = ()=>{
    const {theme} = useSelector(store=>store.settingReducer);
    // const [users, setUsers] = useState([]);
    // const user1 = Auth.currentUser.uid;
    // useEffect(()=>{
    //     const usersRef = collection(db, "users");
    // // create query object
    // const q = query(usersRef, where("uid", "not-in", [user1]));
    // // execute query
    // const unsub = onSnapshot(q, (querySnapshot) => {
    //   let user = [];
    //   querySnapshot.forEach((doc) => {
    //     users.push(doc.data());
    //   });
    //   setUsers(user);
    // });
    // return () => unsub();
    // },[user1, users])
    // console.log(users)
    
    return (
        <div className='allcontact' style={{backgroundColor:theme[1]}}>
             
        </div>
    )
}