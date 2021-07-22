import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const createPostVote = (postId) =>{
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
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}

export const createCommentVote = (commentId) =>{
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
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}

export const changePostVote = (postId) =>{
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
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}

export const changeCommentVote = (commentId) =>{
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
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}

export const deletePostVote = (postId) =>{
    axios.delete(`${BASE_URL}/posts/${postId}/votes`,
    {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}

export const deleteCommentVote = (commentId) =>{
    axios.delete(`${BASE_URL}/comments/${commentId}/votes`,
    {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}