import { AllContacts } from '../AllContacts/AllContacts';
import { Navbar } from '../Navbar/Navbar';
import { Search } from '../Searchbar/Search';
import './contacts.css';

export const Contacts = ()=>{

    return (
        <div className='contacts'>
            <Navbar/>
            <Search/>
            <AllContacts/>
        </div>
    )
}