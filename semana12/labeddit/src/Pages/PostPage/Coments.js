import React from 'react'
import CommentsVoltes from '../../Components/Votes/CommentsVotes'
import { BASE_URL } from '../../constants/url'
import useRequestData from '../../Hooks/useRequestData'
import CreateComment from './CreateComents'

const Coments = ({postId}) => {
    
    const coments = useRequestData([], `${BASE_URL}/posts/${postId}/comments`)
    console.log("comentarios",coments)

    const allComents = coments.map((coment) => {
        return(
            <div>
                <p>{coment.body}</p>
                <p>{coment.username}</p>
                <p>{coment.createdAt}</p>
                <CommentsVoltes voteSum={coment.voteSum} id={coment.id}/>
            </div>
        )
    })

    return(
        <div>
            <CreateComment postId = {postId}/>
            {allComents}
        </div>
    )
}

export default Coments