import { useSelector } from 'react-redux';
import './allcontact.css';

export const AllContacts = ()=>{
    const {theme} = useSelector(store=>store.settingReducer);
    return (
        <div className='allcontact' style={{backgroundColor:theme[1]}}>
             
        </div>
    )
}