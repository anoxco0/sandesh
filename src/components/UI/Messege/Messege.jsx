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
        <div className='messeges' style={{backgroundColor:theme[2]}}>
            <MessNav/>
            <MessegeBody/>
            <MessSearch/>
        </div>
    )
}