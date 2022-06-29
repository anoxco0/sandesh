

export const IS_AUTHENTICATED = "IS_AUTHENTICATED";
export const USER_NAME = "USER_NAME";

export const isAuth = (payload) =>({
    type:IS_AUTHENTICATED,
    payload
})

export const userName = (payload) =>({
    type:USER_NAME,
    payload
})