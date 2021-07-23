import React from 'react'
import Votes from '../Votes/Votes'
import {ContainerPost} from './styled'
import { convertTime } from '../../functions.js/convertTime'

const CardPostDetail = ({post}) => {

    const detailPost = post.map((post) =>{

        return(
            <ContainerPost>
                <div id={"infoUser"}>
                    <p id={"name"}>{post.username}</p>
                    <p id={"time"}>{convertTime(post.createdAt)}</p>
                </div>
                <div id={"infoPost"}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <div id={"infoVotesAndComment"}>
                    <Votes voteSum={post.voteSum}/>
                    <p className={"comments"} >{post.commentCount} comentários</p>
                </div>
            </ContainerPost>
        )
    })


    return<div>
        {detailPost}
    </div>
}

export default CardPostDetail