import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../Hooks/useUnprotectedPage'
import LoginForm from './LoginForm'
import {goToRegisterPage} from '../../Router/coordinator'

const LoginPage = () => {
    // useUnprotectedPage()
    const history = useHistory()

    return(
        <div>
            <LoginForm/>
            <Button
                onClick={() => goToRegisterPage(history)}
            >
                Não possui Conta? Cadastre-se
            </Button>
        </div>
    )
}

export default LoginPage