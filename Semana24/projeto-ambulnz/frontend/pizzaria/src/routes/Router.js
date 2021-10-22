import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "../pages/Splash/Splash";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Splash}/>
                <Route exact path="/login"/>
                <Route exact path="/cadastro"/>
                <Route exact path="/feed"/>
                <Route exact path="/criar"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router