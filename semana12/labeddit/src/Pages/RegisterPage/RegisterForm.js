import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import {register} from '../../services/users'

const RegisterForm = () => {
    const history = useHistory()
    const[form, onChange, clear] = useForm({username: "",email:"", password:"" })

    const onSubmitRegisterForm = (event) => {
        event.preventDefault()
        register(form, history, clear)
    }


    return(
        <div>
            <form onSubmit={onSubmitRegisterForm}>
                <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    type={"text"}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    type={"email"}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    type={"password"}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >Cadastrar</Button>
            </form>
        </div>
    )
}

export default RegisterForm