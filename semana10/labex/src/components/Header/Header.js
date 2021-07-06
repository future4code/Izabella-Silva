import React from 'react'
import {HeaderOfPage} from './style'

export const Header = () => {
    return<HeaderOfPage>
        <spam>LabeX</spam>
        <input placeholder="Pesquisar"/>
        <div>
            <button>Home</button>
            <button>Administrador</button>
        </div>
    </HeaderOfPage>
}