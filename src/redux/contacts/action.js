export const PROFILE_SLIDE = "PROFILE_SLIDE";
export const NAME = "NAME";
export const AVTAR = "AVTAR";

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