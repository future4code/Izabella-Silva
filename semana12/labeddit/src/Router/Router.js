import React, { useState } from 'react'
import {Switch, Route} from "react-router-dom"
import LoginPage from '../Pages/LoginPage/LoginPage'
import FeedPage from '../Pages/FeedPage/FeedPage'
import PostPage from '../Pages/PostPage/PostPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage.js'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import {ContainerRouter} from './styled'

const Router = ({setRightButtonText}) => {
    const[feed, setFeed] = useState([])

    return(
        <ContainerRouter>
            <Switch>
                <Route exact path={"/"}>
                    <LoginPage setRightButtonText= {setRightButtonText}/>
                </Route>
                <Route exact path={"/feed"}>
                    <FeedPage feed = {feed} setFeed={setFeed} />
                </Route>
                <Route exact path={`/post/:id`}>
                    <PostPage feed = {feed} />
                </Route>
                <Route exact path={"/cadastro"}>
                    <RegisterPage setRightButtonText= {setRightButtonText}/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </ContainerRouter>
    )
}

export default Router