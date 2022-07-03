import { ALL_CONTACTS, AVTAR, NAME, PROFILE_SLIDE, SEARCH_LOADING, SEARCH_RESULT } from "./action"

const init ={
    name:"",
    profileslide:false,
    avtar:"",
    allcontacts:[],
    datas:[],
    loading:false
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
        case AVTAR:
            return {
                ...store,
                avtar:payload
            }
        case ALL_CONTACTS:
            return {
                ...store,
                allcontacts:payload
            }
        case SEARCH_LOADING:
            return{
                ...store,
                loading:true,
            }
        case SEARCH_RESULT:
            return{
                ...store,
                datas:payload,
                loading:false,
            }
        default:
            return store
    }
}