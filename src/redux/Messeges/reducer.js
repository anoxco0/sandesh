import { RECIEVER } from "./action"


const init = {
    reciever:null
}

export const messegesReducer = (store=init, {type, payload})=>{
     switch(type){
        case RECIEVER:
            return{
                ...store,
                reciever:payload,
            }
        default:
            return store
     }
}