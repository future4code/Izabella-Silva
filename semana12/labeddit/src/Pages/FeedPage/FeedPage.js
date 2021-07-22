import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToPostPage} from '../../Router/coordinator'
import CardPost from '../../Components/CardPost.js/CardPost'
import CreatePost from './CreatePost'
import useProtectedPage from '../../Hooks/useProtectedPage'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../constants/url'

const FeedPage = ({feed, setFeed}) => {
    useProtectedPage()
    setFeed(useRequestData([], `${BASE_URL}/posts?page=1&size=20`))
    const history = useHistory()

    console.log("feed page", feed)

    const allPosts = feed.map((post) => {
        return(
            <div key={post.id}>
                <CardPost post={post}/>
            </div>
        )
    })

    return(
        <div>
            <CreatePost/>
            {allPosts}
        </div>
    )
}

export default FeedPage