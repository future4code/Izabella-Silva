import React, {useState} from 'react'
import CommentsVoltes from '../../Components/Votes/CommentsVotes'
import { BASE_URL } from '../../constants/url'
import useRequestData from '../../Hooks/useRequestData'
import CreateComment from './CreateComents'

const Coments = ({postId}) => {
    
    const {data, getData} = useRequestData([], `${BASE_URL}/posts/${postId}/comments`)


    const allComents = data.map((comment) => {
        return(
            <div key={comment.id}>
                <p>{comment.body}</p>
                <p>{comment.username}</p>
                <p>{comment.createdAt}</p>
                <CommentsVoltes voteSum={comment.voteSum} id={comment.id} getData={getData}/>
            </div>
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