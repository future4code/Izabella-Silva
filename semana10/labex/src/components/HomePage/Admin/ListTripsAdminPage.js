import React from 'react'
import { useHistory } from 'react-router-dom'
import {urlGetTrips} from '../../../Config/config'
import GetTrips from '../../../Hooks/GetTrips'
import {goToPage} from '../../Functions/functions'
import {ConteinerCards, CardTrip} from '../../../Several/CardsTrip'
import deleteTrip from '../../../Hooks/deleteTrip'
import {ButtonBack} from '../ButtonBack'
import {EmptyButton} from '../../../Several/Buttons'

export const ListTripsAdminPage = () => {
    const history = useHistory()
    const tripList = GetTrips(urlGetTrips, [])

    const allTrips = tripList.map((trip) => {
        return(
            <CardTrip key={trip.id}>
                <p>{trip.name}</p>
                <p>{trip.planet}</p>
                <p>{trip.date}</p>
                <p>{trip.durationInDays}</p>
                <p>{trip.description}</p>
                <div>
                    <EmptyButton onClick={() => goToPage(`/tripdetails/${trip.id}`, history)}>Detalhar</EmptyButton>
                    <EmptyButton onClick={() => deleteTrip(trip.id)}>Deletar</EmptyButton>
                </div>
            </CardTrip>
        )
    })

    return(
        <div>
            <ButtonBack/>
            <ConteinerCards>
                {allTrips}
            </ConteinerCards>
        </div>
    )
}