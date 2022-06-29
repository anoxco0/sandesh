// import {onAuthStateChanged} from "firebase/auth";

export const AUTHENTICATION_LOADING="AUTHENTICATION_LOADING";
export const IS_AUTHENTICATED = "IS_AUTHENTICATED";
export const USER_NAME = "USER_NAME";

export const auth_loading = ()=>({
    type:AUTHENTICATION_LOADING,
})

export const isAuth = (payload) =>({
    type:IS_AUTHENTICATED,
    payload
})

export const userName = (payload) =>({
    type:USER_NAME,
    payload
})

// export const authentication = (auth) => (dispatch) =>{
//     dispatch(auth_loading());
//     let user;
//     onAuthStateChanged(auth, (currentUser) => {
//         user = currentUser;
//       });
//       dispatch(userName(user.email));
//       if(user.email) dispatch(isAuth(true));
// }