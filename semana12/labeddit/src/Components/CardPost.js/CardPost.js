import React from 'react'
import { useHistory } from 'react-router-dom'
import Votes from '../Votes/Votes'
import {ContainerPost} from './styled'
import { goToPostPage } from '../../Router/coordinator'

const CardPost = (props) => {
    const history = useHistory()

    return<ContainerPost>
        <div id={"infoUser"} onClick={() => goToPostPage(history, props.post.id)}>
            <p>{props.post.username}</p>
            <p>{props.post.createdAt}</p>
        </div>
        <div id={"infoPost"} onClick={() => goToPostPage(history, props.post.id)}>
            <p>{props.post.title}</p>
            <p>{props.post.body}</p>
        </div>
        <div id={"infoVotesAndComment"}>
            <Votes voteSum={props.post.voteSum}/>
            {props.post.commentCount ? <p onClick={() => goToPostPage(history, props.post.id)}>{props.post.commentCount} comentários </p>: <p onClick={() => goToPostPage(history, props.post.id)}>0 comentários</p>}
        </div>
    </ContainerPost>
}

export default CardPost