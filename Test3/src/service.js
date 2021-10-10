import axios from "axios"


export const BASE = 'https://api.spacexdata.com'
export const VERSION = '/v4'
export const LAUNCHES = '/launches'
export const PAST_LAUNCHES = '/past'
export const UPCOMING_LAUNCHES = '/upcoming'
export const COMPANY = '/company'
export const STARLINK = '/starlink'

export const getLaunches = ()=>{
    return axios.get(`${BASE}${VERSION}${COMPANY}`)
}
export const getStarlink = ()=>{
    return axios.get(`${BASE}${VERSION}${STARLINK}`)
}