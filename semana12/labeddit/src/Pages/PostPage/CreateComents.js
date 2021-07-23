import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import useForm from '../../Hooks/useForm'
import { createComment } from '../../services/contentCreate';

const CreateComment = ({postId, getData}) => {
    const history = useHistory()
    const[form, onChange, clear] = useForm({body:""})

    const onSubmitComment = (event) => {
        event.preventDefault()
        createComment(postId, form, clear, history, getData)
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
                <Button
                    type={"submit"}
                    variant="contained"
                    color="primary"
                >
                Enviar
                </Button>
            </form>
            
        </div>
    )
}

export default CreateComment