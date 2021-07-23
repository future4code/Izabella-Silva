import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import useForm from '../../Hooks/useForm'
import { createComment } from '../../services/contentCreate';
import {ContainerButtons} from './styled'

const CreateComment = ({postId, getData}) => {
    const history = useHistory()
    const[form, onChange, clear] = useForm({body:""})

    const onSubmitComment = (event) => {
        event.preventDefault()
        createComment(postId, form, clear, history, getData)
    }

    const goBack = () =>{
        history.goBack()
    }

    return(
        <div>
            <form onSubmit={onSubmitComment}>
                <TextField 
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    type={"text"}
                    label={"Comentar"}
                    variant={"outlined"}
                    fullWidth
                    margin={"dense"}
                />
                <ContainerButtons>
                    <Button
                        type={"submit"}
                        variant="contained"
                        color="primary"
                    >
                    Enviar
                    </Button>
                    <Button
                        onClick={goBack}
                        variant="contained"
                        color="primary"
                    >
                    Voltar
                    </Button>
                </ContainerButtons>
            </form>
            
        </div>
    )
}

export default CreateComment