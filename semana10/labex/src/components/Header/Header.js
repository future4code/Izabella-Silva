import React from 'react'
import {HeaderOfPage, Logo} from './style'
import {useHistory} from 'react-router-dom'
import {goToPage} from '../Functions/functions'
import logo from '../../img/logo.png'
import { FullButton, EmptyButton } from '../../Several/Buttons'
import {InputSearch} from '../../Several/Inputs'

export const Header = () => {
    const history = useHistory();

    return<HeaderOfPage>
        <Logo>
            <img id="imgLogo" src={logo} alt="Logo Foguete e Planeta"/>
            <p id = "name" >LabeX</p>
        </Logo>
        <InputSearch placeholder="Pesquisar"/>
        <div class="buttons">
            <EmptyButton onClick={() => goToPage("/", history)}>Home</EmptyButton>
            <FullButton onClick={() => goToPage("/login", history)}>Administrador</FullButton>
        </div>
    </HeaderOfPage>
}