import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const createPostVote = (postId, getData) =>{
    const body= {
        "direction": 1
    }
    axios.post(`${BASE_URL}/posts/${postId}/votes`, body,
    {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        getData()
    })
    .catch((error) => {
        alert("Erro, tente novamente")
    })
}

export const createCommentVote = (commentId, getData) =>{
    const body= {
        "direction": 1
    }
    axios.post(`${BASE_URL}/comments/${commentId}/votes`, body,
    {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        getData()
    })
    .catch((error) => {
        alert("Erro, tente novamente")
    })
}

export const changePostVote = (postId, getData) =>{
    const body= {
        "direction": -1
    }
    axios.put(`${BASE_URL}/posts/${postId}/votes`, body,
    {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        getData()
    })
    .catch((error) => {
        alert("Erro, tente novamente")
    })
}

export const changeCommentVote = (commentId, getData) =>{
    const body= {
        "direction": -1
    }
    axios.put(`${BASE_URL}/comments/${commentId}/votes`, body,
    {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        getData()
    })
    .catch((error) => {
        alert("Erro, tente novamente")
    })
}

export const deletePostVote = (postId, getData) =>{
    axios.delete(`${BASE_URL}/posts/${postId}/votes`,
    {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        getData()
    })
    .catch((error) => {
        alert("Erro, tente novamente")
    })
}

export const deleteCommentVote = (commentId, getData) =>{
    axios.delete(`${BASE_URL}/comments/${commentId}/votes`,
    {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        getData()
    })
    .catch((error) => {
        alert("Erro, tente novamente")
    })
}