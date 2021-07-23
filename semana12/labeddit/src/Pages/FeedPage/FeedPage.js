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
    const {data, getData} = useRequestData([], `${BASE_URL}/posts?page=1&size=20`)
    setFeed(data)

    const allPosts = feed.map((post) => {
        return(
            <div key={post.id}>
                <CardPost post={post} getData={getData}/>
            </div>
        )
    })

    return(
        <div>
            <CreatePost getData={getData}/>
            {allPosts}
        </div>
    )
}

export default FeedPage