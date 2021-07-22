import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { goToLoginPage } from '../../Router/coordinator'
import {Navigation} from './styled'

const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token")
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if(token){
            logout()
            setRightButtonText("Login")
            goToLoginPage(history)
        }else{
            goToLoginPage(history)
        }
    }

    return(
        <Navigation>
            <Button id={"buttonleft"} onClick={() => goToLoginPage(history)}>LabEddit</Button>
            <Button id={"buttonRight"} onClick={rightButtonAction}>{rightButtonText}</Button>
        </Navigation>
    )
}

export default Header