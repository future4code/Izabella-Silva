import axios from 'axios'
import {BASE_URL} from '../constants/url'
import {goToFeedPage} from '../Router/coordinator'

export const login = (body, history, clear, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`,body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeedPage(history)
        setIsLoading(false)
        setRightButtonText("Logout")
    })
    .catch((error) => {
        setIsLoading(false)
        alert("Erro: ", error.response.message, " tente novamente")
    })
}

export const register = (body, history, clear, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeedPage(history)
        setIsLoading(false)
        setRightButtonText("Logout")
    })
    .catch((error) => {
        setIsLoading(false)
        alert("Erro: ", error.response.message, " tente novamente")
    })
}