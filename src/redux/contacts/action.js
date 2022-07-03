export const PROFILE_SLIDE = "PROFILE_SLIDE";
export const NAME = "NAME";
export const AVTAR = "AVTAR";
export const ALL_CONTACTS="ALL_CONTACTS";
export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_RESULT = "SEARCH_RESULT";

export const profileSlide=(payload) =>({
    type:PROFILE_SLIDE,
    payload,
})

export const Name = (payload)=>({
    type:NAME,
    payload
})

export const Avtar = (payload) =>({
    type:AVTAR,
    payload
})

export const allContacts = (payload) =>({
    type:ALL_CONTACTS,
    payload
})

export const searchLoading = ()=>({
    type:SEARCH_LOADING
})

export const searchResult = (payload)=>({
    type:SEARCH_RESULT, 
    payload,
})

export const search_name = (value, datas)=>(dispatch)=>{
    dispatch(searchLoading())
    let filteredData = datas.filter(elements=>elements.name.toLowerCase().includes(value.toLowerCase()));
    dispatch(allContacts(filteredData));
}