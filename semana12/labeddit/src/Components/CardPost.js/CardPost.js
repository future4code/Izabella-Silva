import React from 'react'
import { useHistory } from 'react-router-dom'
import Votes from '../Votes/Votes'
import {ContainerPost} from './styled'
import { goToPostPage } from '../../Router/coordinator'

const CardPost = ({post, getData}) => {
    const history = useHistory()

    return<ContainerPost>
        <div id={"infoUser"} onClick={() => goToPostPage(history, post.id)}>
            <p>{post.username}</p>
            <p>{post.createdAt}</p>
        </div>
        <div id={"infoPost"} onClick={() => goToPostPage(history, post.id)}>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
        <div id={"infoVotesAndComment"}>
            <Votes voteSum={post.voteSum} id={post.id} userVote={post.userVote} getData={getData}/>
            {post.commentCount ? <p onClick={() => goToPostPage(history, post.id)}>{post.commentCount} comentários </p>:
            <p onClick={() => goToPostPage(history, post.id)}>0 comentários</p>}
        </div>
    </ContainerPost>
}

export default CardPost