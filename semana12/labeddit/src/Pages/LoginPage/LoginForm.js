import React, {useState} from 'react'
import { useHistory } from 'react-router'
import useForm from '../../Hooks/useForm'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { login } from '../../services/users'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({email: "", password:""})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, history, clear, setRightButtonText, setIsLoading)
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
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}
                    </Button>
            </form>
        </div>
    )
}

export default LoginForm