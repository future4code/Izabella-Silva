import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { goToFeed } from '../routes/cordinator'
export const sendLogin = (body, history, cleanFields, setSpan) => {
    console.log(body)
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
        console.log("token", res.data)
        localStorage.setItem('token', res.data.token)
        cleanFields()
        goToFeed(history)
    })
    .catch((error) => {
        console.log(error.data)
        // setSpan(error.response.data.message)
    })
}

export const sendSignUp = (body, history, cleanFields, setSpan) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        cleanFields()
        goToFeed()
    })
    .catch((error) => {
        console.log(error.response)
    })
}