import React from 'react'
import { useHistory } from 'react-router-dom'
import {urlGetTrips} from '../../../Config/config'
import GetTrips from '../../../Hooks/GetTrips'
import {goToPage} from '../../Functions/functions'
import {ConteinerCards, CardTrip} from './style'

export const ListTripsPage = () => {
    const history = useHistory()
    const tripList = GetTrips(urlGetTrips, [])

    console.log("ListTripsPage",tripList)

    const allTrips = tripList.map((trip) => {
        return(
            <CardTrip key={trip.id}>
                <p>{trip.name}</p>
                <p>{trip.planet}</p>
                <p>{trip.date}</p>
                <p>{trip.durationInDays}</p>
                <p>{trip.description}</p>
                <button onClick={() => goToPage(`/applicationform/${trip.id}`, history)}>Contratar</button>
            </CardTrip>
        )
    })

    return(
        <ConteinerCards>
            {allTrips}
        </ConteinerCards>
    )
}