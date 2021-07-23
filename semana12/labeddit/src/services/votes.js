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
        console.log("Posto Vote",response.data)
        getData()
    })
    .catch((error) => {
        console.log(error.response)
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
        console.log("Comment Vote",response.data)
        getData()
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}

export const changePostVote = (postId, getData) =>{
    console.log("Change Vote post", postId)
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
        console.log("Modificacao Posto Vote",response.data)
        getData()
    })
    .catch((error) => {
        console.log(error.response.data.message)
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
        console.log("Modificacao comment Vote",response.data)
        getData()
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}

export const deletePostVote = (postId, getData) =>{
    console.log("Delete Vote post", postId)
    axios.delete(`${BASE_URL}/posts/${postId}/votes`,
    {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        console.log("Detele Posto Vote",response.data)
        getData()
    })
    .catch((error) => {
        console.log(error.response.data.message)
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
        console.log("Delete comment Vote",response.data)
        getData()
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
}