import React from 'react'
import { useParams } from 'react-router-dom'
import useGetTripDetails from '../../../Hooks/useGetTripDetails'
import decideCandidate from '../../../Hooks/decideCandidate'
import {ButtonBack} from '../ButtonBack'
import {FullButton, EmptyButton} from '../../../Several/Buttons'

export const TripDetailsPage = () => {
    const params = useParams()

    const detailTrip = useGetTripDetails(params.id, {})

    return(
        <div>
            <ButtonBack/>
            <h2>Nome:</h2>
            <p>{detailTrip.name}</p>
            <h2>Aprovados</h2>
            <p>{detailTrip.approved && detailTrip.approved.map((approved) => approved.name)}</p>
            <h2>Lista de Candidatos</h2>
            <div>{detailTrip.candidates && detailTrip.candidates.map((candidate)=>{
                return(
                    <div key={candidate.id}>
                        <ul>Nome: {candidate.name}</ul>
                        <ul>Idade: {candidate.age}</ul>
                        <ul>Cidade: {candidate.country}</ul>
                        <ul>Profissão: {candidate.profession}</ul>
                        <ul>Teste de Aplicação: {candidate.applicationText}</ul>
                        <EmptyButton onClick={() => decideCandidate(candidate.id, params.id, true )}>Aprovar</EmptyButton>
                        <FullButton onClick={() => decideCandidate(candidate.id, params.id, false )}>Reprovar</FullButton>
                    </div>
                )
                })}
            </div>
        </div>
    )
}