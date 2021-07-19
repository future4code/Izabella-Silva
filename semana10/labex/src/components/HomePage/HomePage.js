import React from 'react'
import {Switch, Route} from "react-router-dom";
import {ListTripsPage} from './Customer/ListTripsPage'
import {ApplicationFormPage} from './Customer/ApplicationFormPage'
import {LoginPage} from './Admin/LoginPage'
import {AdminHomePage} from './Admin/AdminHomePage'
import {ListTripsAdminPage} from './Admin/ListTripsAdminPage'
import {CreateTripPage} from './Admin/CreateTripPage'
import {TripDetailsPage} from './Admin/TripDetailsPage'
import {Container} from './HomePageStyled'

export const HomePage = () => {
    return(
        <Container>
            <Switch>
                <Route exact path={"/"}>
                    <ListTripsPage/>
                </Route>
                <Route exact path={"/applicationform/:id"}>
                    <ApplicationFormPage/>
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage/>
                </Route>
                <Route exact path={"/adminhome"}>
                    <AdminHomePage/>
                </Route>
                <Route exact path={"/listtripadmin"}>
                    <ListTripsAdminPage/>
                </Route>
                <Route exact path={"/createtrip"}>
                    <CreateTripPage/>
                </Route>
                <Route exact path={"/tripdetails/:id"}>
                    <TripDetailsPage/>
                </Route>
            </Switch>
        </Container>
    )
}
