import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Login from '../../../Hooks/Login'
import useForm from '../../../Hooks/useForm'
import {ContainerLogin, FormLogin, InputLogin} from './style'
import {ButtonBack} from '../ButtonBack'
import {EmptyButton} from '../../../Several/Buttons'

export const LoginPage = () => {
    const history = useHistory()

    const {form, onChange, cleanFields} = useForm({
        email: "",
        senha:"",
    })

    const onClickLogin = (event) => {
        event.preventDefault()
        Login(form, history)
        cleanFields()
    }

    return(
        <ContainerLogin>
            <FormLogin onSubmit={onClickLogin}>
                <h2>Login</h2>
                <InputLogin
                    name="email"
                    value={form.email}
                    type="email" 
                    placeholder="E-mail"
                    onChange={onChange}
                    required
                    pattern={"^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$"}

                />
                <InputLogin
                    name="password"
                    value={form.password}
                    type="password"
                    placeholder="Senha"
                    onChange={onChange}
                    required
                    />
                <EmptyButton>Entrar</EmptyButton>
            </FormLogin>
            <ButtonBack/>
        </ContainerLogin>
    )
}