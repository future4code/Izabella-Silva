import React from 'react'
import useUnProtected from '../../hooks/useUnProtected'
import { useHistory } from 'react-router-dom'

const Login = () => {
    useUnProtected()
    const history = useHistory()

    return(
        <div>
            <h3>Entrar</h3>
            
        </div>
    )
}