import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { Auth, db } from "../../Authentication/firebase-config";
import { useNavigate } from "react-router-dom";
import "./floatmenu.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { updateDoc, doc } from "firebase/firestore";

const style = {
  width: "100%",
  maxWidth: 360,
};

export const FloatMenu = () => {
  const { theme } = useSelector((store) => store.settingReducer);
  const navigate = useNavigate();
  const signout = async () => {
    await updateDoc(doc(db, 'sandesh', Auth.currentUser.uid),{
      isOnline:false
    })
    await signOut(Auth);
    navigate("/authentiacation");
  };
  return (
    <div style={{ backgroundColor: theme[0] }} className="float_menu">
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="New group" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Catalog" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Starred messeges" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Labels" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={() => signout()}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};
