import { NAME, PROFILE_SLIDE } from "./action"

const init ={
    name:"",
    profileslide:false
}

export const contactsReducer = (store=init, {type, payload})=>{
    switch(type){
        case PROFILE_SLIDE:
            return {
                ...store,
                profileslide:payload,
            }
        case NAME:
            return {
                ...store,
                name:payload
            }
        default:
            return store
    }
}