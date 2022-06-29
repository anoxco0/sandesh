import { AUTHENTICATION_LOADING, IS_AUTHENTICATED, USER_NAME } from "./action"


const init = {
    authLoading : false,
   isAuthenticated : false,
   username:"",
}

export const authReducer = (store=init, {type, payload}) =>{
    switch(type){
        case AUTHENTICATION_LOADING:
            return {
                ...store,
                authLoading:true
            }
        case IS_AUTHENTICATED:
           return {
            ...store,
            isAuthenticated:payload,
        }
        case USER_NAME:
            return{
                ...store,
                username:payload,
                authLoading:false
            }
        default :
        return store
    }
}