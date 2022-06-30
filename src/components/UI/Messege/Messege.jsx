import './messege.css';
import {useSelector} from "react-redux"
// import image from './logo.png';
// import imgBack from ".//messege_background.png"
import { MessNav } from '../MessegeNav/MessNav';
import { MessSearch } from '../MessSearch/MessSearch';
import { MessegeBody } from '../MessegeBody/MessegeBody';
export const Messege = ()=>{
    const {theme} = useSelector(store=>store.settingReducer);
    return (
        // <div className='messege' style={{backgroundColor:theme[0]}}>
        //    <img style={{width:"300px"}} src={image} alt="sandesh" />
        //    <h1 style={{color:"white", fontSize:"80px"}}>Sandesh</h1>
        //    <p style={{color:'white', fontSize:"20px"}}>Now you can join live chat.</p>
        // </div>
        <div className='messeges' style={{backgroundColor:theme[2]}}>
            <MessNav/>
            <MessegeBody/>
            <MessSearch/>
        </div>
    )
}