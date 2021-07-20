import axios from 'axios'
import {BASE_URL} from '../constants/url'
import {goToFeedPage} from '../Router/coordinator'

export const login = (body, history) => {

    axios.post(`${BASE_URL}/users/login`,body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        goToFeedPage(history)
    })
    .catch((error) => {
        console.log(error.response.message)
    })
}

export const register = (body, history, clear) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeedPage(history)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}