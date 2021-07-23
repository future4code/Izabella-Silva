import React from 'react'
import { useParams } from 'react-router-dom'
import CardPostDetail from '../../Components/CardPost.js/CardPostDetail'
import Coments from './Coments'
import useProtectedPage from '../../Hooks/useProtectedPage'

const PostPage = ({feed}) => {
    useProtectedPage()
    const params = useParams()
    const postId = params.id

    const detailPost = feed.filter((post)=>{
        return post.id === postId
    })

    return(
        <div>
            <CardPostDetail post={detailPost}/>
            <Coments postId={postId} />
        </div>
    )
}

export default PostPage