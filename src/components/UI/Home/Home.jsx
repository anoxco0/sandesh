import { Contacts } from "../Contacts/Contacts";
import { Messege } from "../Messege/Messege";
import "./home.css";

export const Home = () => {
  return (
    <div className="main_home">
      <Contacts />
      <Messege />
    </div>
  );
};
