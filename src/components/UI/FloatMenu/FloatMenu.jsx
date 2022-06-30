import { useSelector } from "react-redux";
import "./floatmenu.css";

export const FloatMenu = () => {
    const {theme} = useSelector(store=>store.settingReducer);
    return (
        <div style={{backgroundColor:theme[0]}} className="float_menu">
          <div>New group</div>
          <div>Profile</div>
          <div>Catalog</div>
          <div>Starred messeges</div>
          <div>Labels</div>
          <div>Settings</div>
          <div>Log Out</div>
        </div>
    )
}