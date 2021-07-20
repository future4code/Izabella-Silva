import React, { useState } from 'react'
import {Switch, Route} from "react-router-dom"
import LoginPage from '../Pages/LoginPage/LoginPage'
import FeedPage from '../Pages/FeedPage/FeedPage'
import PostPage from '../Pages/PostPage/PostPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage.js'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'

const Router = () => {
    const[detailPost, setDetailPost] = useState({})

    return(
        <div>
            <Switch>
                <Route exact path={"/"}>
                    <LoginPage/>
                </Route>
                <Route exact path={"/feed"}>
                    <FeedPage detailPost={detailPost} setDetailPost={setDetailPost}/>
                </Route>
                <Route exact path={`/post`}>
                    <PostPage detailPost={detailPost}/>
                </Route>
                <Route exact path={"/cadastro"}>
                    <RegisterPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </div>
    )
}

export default Router