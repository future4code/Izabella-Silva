import React from 'react'
import Votes from '../Votes/Votes'
import {ContainerPost} from './styled'

const CardPostDetail = ({post}) => {

    const detailPost = post.map((post) =>{
        return(
            <ContainerPost>
                <div id={"infoUser"}>
                    <p>{post.username}</p>
                    <p>{post.createdAt}</p>
                </div>
                <div id={"infoPost"}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
                <div id={"infoVotesAndComment"}>
                    <Votes voteSum={post.voteSum}/>
                    <p>{post.commentCount} comentários</p>
                </div>
            </ContainerPost>
        )
    })


    return<div>
        {detailPost}
    </div>
}

export default CardPostDetail