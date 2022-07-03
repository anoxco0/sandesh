import { useDispatch, useSelector } from 'react-redux';
import { recieverUser } from '../../../redux/Messeges/action';
import { AllContacts } from '../AllContacts/AllContacts';
import { Navbar } from '../Navbar/Navbar';
import { Search } from '../Searchbar/Search';
import './contacts.css';

export const Contacts = ()=>{
    const {theme} = useSelector(store=>store.settingReducer);
    const dispatch = useDispatch();

    return (
        <div className='contacts'>
            <Navbar/>
            <Search/>
            <div style={{backgroundColor:theme[1], color:"white", padding:"10px 0", cursor:"pointer", borderBottom:"gray"}} onClick={()=>dispatch(recieverUser(null))}>Live chat...</div>
            <AllContacts/>
        </div>
    )
}