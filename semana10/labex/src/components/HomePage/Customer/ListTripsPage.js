import React from 'react'
import {Filter} from './Filter'
import { useHistory } from 'react-router-dom'
import {urlGetTrips} from '../../../Config/config'
import GetTrips from '../../../Hooks/GetTrips'
import {goToPage} from '../../Functions/functions'
import { EmptyButton } from '../../../Several/Buttons'
import {ConteinerCards, CardTrip} from '../../../Several/CardsTrip'

export const ListTripsPage = () => {
    const history = useHistory()
    const tripList = GetTrips(urlGetTrips, [])

    const allTrips = tripList.map((trip) => {
        return(
            <CardTrip key={trip.id}>
                <p>{trip.name}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Data: {trip.date}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Descrição: {trip.description}</p>
                <EmptyButton onClick={() => goToPage(`/applicationform/${trip.id}`, history)}>Contratar</EmptyButton>
            </CardTrip>
        )
    })

    return(
        <div>

        <Filter/>
        <ConteinerCards>
            {allTrips}
        </ConteinerCards>

        </div>
    )
}