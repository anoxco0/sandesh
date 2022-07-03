import { useSelector } from "react-redux";
import { Contacts } from "../Contacts/Contacts";
import { Messege } from "../Messege/Messege";
import { Profile } from "../Profile/Profile";
import "./home.css";

export const Home = () => {
  const {profileslide} = useSelector(store=>store.contactsReducer);
  return (
    <div className="main_home">
      {profileslide?<Profile/>:<Contacts />}
      <Messege />
    </div>
  );
};
