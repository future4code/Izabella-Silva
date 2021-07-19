import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from '../Pages/LoginPage/LoginPage'
import FeedPage from '../Pages/FeedPage/FeedPage'
import PostPage from '../Pages/PostPage/PostPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage.js'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <LoginPage/>
                </Route>
                <Route exact path={"/feed"}>
                    <FeedPage/>
                </Route>
                <Route exact path={"/post/:id"}>
                    <PostPage/>
                </Route>
                <Route exact path={"/cadastro"}>
                    <RegisterPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router