import React from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { useHistory } from 'react-router-dom'
import {goToPostPage} from '../../Router/coordinator'
import CardPost from '../../Components/CardPost.js/CardPost'

const FeedPage = ({setDetailPost}) => {
    const history = useHistory()
    const feed = useRequestData([], `${BASE_URL}/posts?page=1&size=20`)
    console.log(feed)

    const allPosts = feed.map((post) => {
        return(
            <div onClick={ () => goToPostPage(history, setDetailPost(post))} key={post.id}>
                <CardPost post={post}/>
            </div>
        )
    })

    return(
        <div>
            {allPosts}
        </div>
    )
}

export default FeedPage