import { isAuth, USER_NAME } from "./action"


const init = {
   isAuthenticated : false,
   username:"",
}

export const authReducer = (store=init, {type, payload}) =>{
    switch(type){
        case isAuth:
           return {
            ...store,
            isAuthenticated:payload
           }
        case USER_NAME:
            return{
                ...store,
                username:payload
            }
        default :
        return store
    }
}