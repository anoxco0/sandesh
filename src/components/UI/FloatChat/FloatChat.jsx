import { useSelector } from "react-redux";
import {UnreadChats} from "../../svg/UnreadChats"
import {Contacts} from "../../svg/Contacts";
import {NonContacts} from "../../svg/NonContacts";
import {Groups} from "../../svg/Groups";
import "./floatchat.css";

export const FloatChat = () => {
  const { theme } = useSelector((store) => store.settingReducer);
  return (
    <div className="float_chat" style={{ backgroundColor: theme[0] }}>
      <div style={{color:"white", fontSize:"16px", lineHeight:"24px"}}>Chats</div>
      <div>
        <UnreadChats/>
        <p>Unread Chats</p>
      </div>
      <div>
        <Contacts/>
        <p>Contacts</p>
      </div>
      <div>
        <NonContacts/>
        <p>Non-contacts</p>
      </div>
      <div>
       <Groups/>
        <p>Groups</p>
      </div>
    </div>
  );
};
