import React from 'react'
import { useHistory } from 'react-router-dom'
import Votes from '../Votes/Votes'
import {ContainerPost} from './styled'
import { goToPostPage } from '../../Router/coordinator'
import { convertTime } from '../../functions.js/convertTime'

const CardPost = ({post, getData}) => {
    const history = useHistory()

    return<ContainerPost>
        <div id={"infoUser"} onClick={() => goToPostPage(history, post.id)}>
            <p id={"name"}>{post.username}</p>
            <p id={"time"}>{convertTime(post.createdAt)}</p>
        </div>
        <div id={"infoPost"} onClick={() => goToPostPage(history, post.id)}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
        <div id={"infoVotesAndComment"}>
            <Votes voteSum={post.voteSum} id={post.id} getData={getData}/>
            {post.commentCount ? <p className={"comments"} onClick={() => goToPostPage(history, post.id)}>{post.commentCount} comentários </p>:
            <p className={"comments"} onClick={() => goToPostPage(history, post.id)}>0 comentários</p>}
        </div>
    </ContainerPost>
}

export default CardPost