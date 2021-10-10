import axios from 'axios'

const BASE = 'https://restcountries.eu/rest/v2'
const ALL = '/all'


export const getAllCountries = () => axios.get(`${BASE}${ALL}`)

// export const getEurope = () => axios.get(`${BASE}${REGION}${EUROPE}`)
// export const getAmericas = () => axios.get(`${BASE}${REGION}${AMERICAS}`)