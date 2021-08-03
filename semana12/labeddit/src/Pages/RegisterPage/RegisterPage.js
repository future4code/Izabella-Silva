import React from 'react'
import RegisterForm from './RegisterForm'
import useUnprotectedPage from '../../Hooks/useUnprotectedPage'

const RegisterPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    return(
        <div>
            <RegisterForm setRightButtonText={setRightButtonText}/>
        </div>
    )
}

export default RegisterPage