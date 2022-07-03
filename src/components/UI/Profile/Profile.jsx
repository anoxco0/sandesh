import { useDispatch, useSelector } from "react-redux";
import { Avtar, profileSlide } from "../../../redux/contacts/action";
import { Back } from "../../svg/Back";
import { Call } from "../../svg/Call";
import { ProfilePic } from "../../svg/ProfilePic";
import { User } from "../../svg/User";
import { Camera } from "../../svg/Camera";
import "./Profile.css";
import { useEffect, useState } from "react";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { Auth, db, storage } from "../../Authentication/firebase-config";
import { doc, updateDoc } from "firebase/firestore";


export const Profile = () => {
  const [image, setImage] = useState("");
  // const [user, setUser] = useState()
  const { theme } = useSelector((store) => store.settingReducer);
  const { username } = useSelector((store) => store.authReducer);
  const { name, avtar } = useSelector((store) => store.contactsReducer);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if (image) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${image.name}`
        );
        try {
          const snap = await uploadBytes(imgRef, image);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          await updateDoc(doc(db, "sandesh", Auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          dispatch(Avtar(url));

          setImage("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImg();
    }
  },[dispatch, image])
  return (
    <div className="profile">
      <div style={{ width: "100%", height: "40vh", backgroundColor: theme[0] }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "100px 20px",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div onClick={() => dispatch(profileSlide(false))}>
            <Back />
          </div>
          <div style={{ fontSize: "28px", fontWeight: "600", color: "white" }}>
            Profile
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", width: "100%" }}>
        <div
          className="img_container"
          style={{
            width: "200px",
            border: `10px solid ${theme[1]}`,
            margin: "auto",
            height: "200px",
            marginTop: "-120px",
            borderRadius: "50%",
          }}
        >
          <div className="image">
            {avtar?<img src={avtar} alt="" style={{width:"200px", borderRadius:"50%", height:"200px"}} />:<ProfilePic />}
          </div>
          <div className="overlay">
            <div>
              <label htmlFor="photo" style={{width:"100%", height:"100%", color:"white", cursor:"pointer"}}>
                <Camera />
                <div>Change</div>
                <div>Profile Pic</div>
              </label>
              <input
                type="file"
                name=""
                id="photo"
                accept="image/*"
                style={{ display: "none" }}
                onChange = {(e)=>setImage(e.target.files[0])}
              />
            </div>
          </div>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      <div style={{ backgroundColor: theme[1], height: "60vh" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "40px",
            padding: "20vh 30px 5vh",
          }}
        >
          <div>
            <User />
          </div>
          <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "18px" }}>
            {name}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "40px",
            padding: "0 30px",
          }}
        >
          <div>
            <Call />
          </div>
          <div style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.6)" }}>
            {username}
          </div>
        </div>
      </div>
    </div>
  );
};
