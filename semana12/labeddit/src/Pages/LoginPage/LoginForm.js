import React from 'react'
import { useHistory } from 'react-router'
import useForm from '../../Hooks/useForm'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { login } from '../../services/users'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        login(form, history)
    }

    return(
        <div>
            <form onSubmit = {onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant = {"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin= {"normal"}
                    required
                    type={"password"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >Fazer Login</Button>
            </form>
        </div>
    )
}

export default LoginForm