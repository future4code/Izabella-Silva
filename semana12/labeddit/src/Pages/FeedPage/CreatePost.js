import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import useForm from '../../Hooks/useForm'
import { createPost } from '../../services/contentCreate'

const CreatePost = () => {
    const history = useHistory()
    const[form, onChange, clear] = useForm({title: "", body:""})

    const onSubmitCreatePostForm = (event) => {
        event.preventDefault()
        createPost(form, clear, history)
    }

    return(
        <div>
            <form onSubmit={onSubmitCreatePostForm}>
                <TextField
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    type={"text"}
                    label={"Título"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                />
                <TextField
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    type={"text"}
                    label={"Descrição"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    size={"medium"}
                />
                <Button
                    type={"submit"}
                    variant="contained"
                    color="primary"
                >
                Postar
                </Button>

            </form>
        </div>
    )
}

export default CreatePost