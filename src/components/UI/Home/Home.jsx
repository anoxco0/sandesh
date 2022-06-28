import { Contacts } from '../Contacts/Contacts'
import { Messege } from '../Messege/Messege'
import './home.css'

export const Home = ()=>{

    return (
        <div>
            <Contacts/>
            <Messege/>
        </div>
    )
}