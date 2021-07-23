import React from 'react'
import CommentsVoltes from '../../Components/Votes/CommentsVotes'
import { BASE_URL } from '../../constants/url'
import useRequestData from '../../Hooks/useRequestData'
import CreateComment from './CreateComents'
import { convertTime } from '../../functions.js/convertTime'
import {ContainerComments} from './styled'

const Coments = ({postId}) => {
    
    const {data, getData} = useRequestData([], `${BASE_URL}/posts/${postId}/comments`)


    const allComents = data.map((comment) => {
        return(
            <ContainerComments key={comment.id}>
                <div id={"infoUser"}>
                    <p id={"name"}>{comment.username}</p>
                    <p id={"time"}>{convertTime(comment.createdAt)}</p>
                </div>
                <p>{comment.body}</p>
                <CommentsVoltes voteSum={comment.voteSum} id={comment.id} getData={getData}/>
            </ContainerComments>
        )
    })

    return(
        <div>
            <CreateComment postId = {postId} getData={getData}/>
            {allComents}
        </div>
    )
}

export default Coments