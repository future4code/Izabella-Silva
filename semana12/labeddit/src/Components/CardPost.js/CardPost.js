import React from 'react'

const CardPost = (props) => {
    return<div>
        <p>{props.post.username}</p>
        <p>{props.post.createdAt}</p>
        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
        <p>{props.post.voteSum} votos</p>
        <p>{props.post.commentCount} comentários</p>
    </div>
}

export default CardPost