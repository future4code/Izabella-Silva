import React from 'react'
import {ContainerFilter} from './styled'
import { EmptyButton } from '../../../Several/Buttons'

export const Filter = () => {

    return(
        <ContainerFilter>
            <h2>Filtre aqui a sua viagem espacial</h2>
            <div>
                <input id="name"placeholder="Nome ou Descrição"/>
                <input placeholder="Planeta"/>
                <input placeholder="Data: DD/MM/AAAA"/>
                <EmptyButton>Pesquisar</EmptyButton>
            </div>
        </ContainerFilter>
    )
}