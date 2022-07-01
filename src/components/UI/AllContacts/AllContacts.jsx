import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {db, Auth} from '../../Authentication/firebase-config.js';
import './allcontact.css';

const user1 = Auth.currentUser.uid;

export const AllContacts = ()=>{
    const {theme} = useSelector(store=>store.settingReducer);
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const usersRef = collection(db, "users");
    // create query object
    const q = query(usersRef, where("uid", "not-in", [user1]));
    // execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
    },[])
    console.log(users)
    
    return (
        <div className='allcontact' style={{backgroundColor:theme[1]}}>
             
        </div>
    )
}