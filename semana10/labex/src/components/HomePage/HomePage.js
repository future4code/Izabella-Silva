import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListTripsPage from './Customer/ListTripsPage'
import ApplicationFormPage from './Customer/ApplicationFormPage'
import LoginPage from './Admin/LoginPage'
import AdminHomePage from './Admin/AdminHomePage'
import CreateTripPage from './Admin/CreateTripPage'
import TripDetailsPage from './Admin/TripDetailsPage'

export const HomePage = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <ListTripsPage/>
                </Route>
                <Route exact path={"/applicationform"}>
                    <ApplicationFormPage/>
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage/>
                </Route>
                <Route exact path={"/adminhome"}>
                    <AdminHomePage/>
                </Route>
                <Route exact path={"/createtrip"}>
                    <CreateTripPage/>
                </Route>
                <Route exact path={"/tripdetails"}>
                    <TripDetailsPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
