import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToPage} from '../../Functions/functions'
import {ButtonBack} from '../ButtonBack'
import {EmptyButton} from '../../../Several/Buttons'
import {ContainerAdminPage} from './style'

export const AdminHomePage = () => {
    const history = useHistory()

    return(
        <ContainerAdminPage>
            <EmptyButton onClick={()=> goToPage("/listtripadmin", history)}>Ver Viagens Cadastradas</EmptyButton>
            <EmptyButton onClick={()=> goToPage("/", history)}>Dados cadastrais</EmptyButton>
            <EmptyButton onClick={()=> goToPage("/createtrip", history)}>Criar Viagem</EmptyButton>
            <ButtonBack/>
        </ContainerAdminPage>
    )
}