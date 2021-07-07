import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import ApplyToTrip from '../../../Hooks/ApplyToTrip'

export const ApplicationFormPage =() => {
    const params = useParams();
    console.log(params.id)

    const[inputName, setInputName] = useState("")
    const[inputAge, setInputAge] = useState("")
    const[inputProfession, setInputProfession] = useState("")
    const[inputCountry, setInputCountry] = useState("")
    const[inputMessage, setInputMessage] = useState("")


    const onChangeName = event => {     
        setInputName(event.target.value)  
    }

    const onChangeAge = event => {     
        setInputAge(event.target.value)  
    }

    const onChangeProfession = event => {     
        setInputProfession(event.target.value)  
    }

    const onChangeCountry = event => {     
        setInputCountry(event.target.value)  
    }

    const onChangeMessage = event => {     
        setInputMessage(event.target.value)  
    }

    const applyToTrip = () => {
        const body = {
            "name": inputName,
            "age": inputAge,
            "applicationText": inputMessage,
            "profession": inputProfession,
            "country": inputCountry
        }

        ApplyToTrip(params.id,body)
    }

    return(
        <div>
            <input placeholder="Nome Completo" onChange={onChangeName}/>
            <input placeholder="Idade" onChange={onChangeAge}/>
            <input placeholder="Profissão" onChange={onChangeProfession}/>
            <input placeholder="País" onChange={onChangeCountry}/>
            <textarea placeholder="Mensagem" onChange={onChangeMessage}/>
            <button onClick={applyToTrip}>Enviar</button>
        </div>
    )
}