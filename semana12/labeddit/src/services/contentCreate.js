import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { goToFeedPage, goToPostPage } from '../Router/coordinator'

export const createPost = (body, clear, history, getData) => {
    axios.post(`${BASE_URL}/posts`, body,{
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response) => {
        alert("Post Criado com sucesso")
        clear()
        goToFeedPage(history)
        getData()
    })
    .catch((error) => {
        alert(`Erro: ${error.response.data.message}, tente novamente`)
    })
}

export const createComment = (postId, body, clear, history, getData) =>{
    axios.post(`${BASE_URL}/posts/${postId}/comments`, body,{
        headers:{
            Authorization: localStorage.getItem('token')
        }
    } )
    .then((response) => {
        alert("Comentário criado com sucesso")
        clear()
        goToPostPage(history,postId)
        getData()
    })
    .catch((error) => {
        alert(`${error.response.data.message}, tente novamente`)
    })
}