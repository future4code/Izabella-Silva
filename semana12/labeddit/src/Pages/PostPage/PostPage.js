import React from 'react'
import CardPost from '../../Components/CardPost.js/CardPost'

const PostPage = ({detailPost}) => {

    return(
        <div>
            <CardPost post={detailPost}/>
        </div>
    )
}

export default PostPage