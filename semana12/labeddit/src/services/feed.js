import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const feed = () => {
    axios.get(`${BASE_URL}/posts?page=1&size=20`)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error.response)
    })
}