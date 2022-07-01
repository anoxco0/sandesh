import { AUTHENTICATION, AUTHENTICATION_LOADING, IS_AUTHENTICATED, USER_NAME } from "./action"


const init = {
    authLoading : false,
   isAuthenticated : false,
   username:"",
   authentication:"login"
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
        case AUTHENTICATION:
            return {
                ...store,
                authentication:payload
            }
        default :
        return store
    }
}