import React from 'react'
import createTrip from '../../../Hooks/createTrip'
import useForm from '../../../Hooks/useForm'
import {ButtonBack} from '../ButtonBack'
import {EmptyButton} from '../../../Several/Buttons'
import {FormContainer} from './style'

export const CreateTripPage = () => {
    const {form, onChange, cleanFields} = useForm({
        name: "",
        planet: "",
        date:"",
        description: "",
        durationInDays:"",
    })

    const register = (event) => {
        event.preventDefault()
        createTrip(form)
        cleanFields();
    }

    return(
        <div>
            <h2>Insira aqui os dados da viagem</h2>
            <FormContainer onSubmit={register}>
                <input
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    placeholder="Nome"
                    required
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <input
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                    placeholder="Planeta"
                    required
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <input
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    placeholder="DD/MM/AAAA"
                    required
                    // pattern={"^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"}
                    title={"A data deve ser no formato DD/MM/AAAA"}
                />
                <input
                    type="number"
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    placeholder="Duração de Dias"
                    required
                />
                <textarea
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    placeholder="Descrição"
                    required
                    pattern={"^.{10,}"}
                    title={"O nome deve ter no mínimo 10 letras"}
                />
                <EmptyButton>Cadastrar</EmptyButton>
            </FormContainer>
            <ButtonBack/>
        </div>
    )
}