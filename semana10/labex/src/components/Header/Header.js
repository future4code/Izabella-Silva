import React from 'react'
import {HeaderOfPage, Logo} from './style'
import {useHistory} from 'react-router-dom'
import {goToPage} from '../Functions/functions'
import logo from '../../img/logo.png'

export const Header = () => {
    const history = useHistory();

    return<HeaderOfPage>
        <Logo>
            <img id="imgLogo" src={logo} alt="Logo Foguete e Planeta"/>
            <p>LabeX</p>
        </Logo>
        <input placeholder="Pesquisar"/>
        <div>
            <button onClick={() => goToPage("/", history)}>Home</button>
            <button onClick={() => goToPage("/login", history)}>Administrador</button>
        </div>
    </HeaderOfPage>
}