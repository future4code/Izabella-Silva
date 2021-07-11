import React from 'react'
import {useParams } from 'react-router-dom'
import applyToTrip from '../../../Hooks/applyToTrip'
import useForm from '../../../Hooks/useForm'
import {Container, ConteinerForm, Inputs} from './styled'
import {ButtonBack} from '../ButtonBack'
import {EmptyButton} from '../../../Several/Buttons'
import {Select} from '../../../Several/Select'

export const ApplicationFormPage =() => {
    const params = useParams();

    const {form, onChange, cleanFields} = useForm({
            "name": "",
            "age": "",
            "applicationText": "",
            "profession": "",
            "country": "",
    })

    const countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]

    const goToapplyToTrip = (event) => {

        event.preventDefault()
        applyToTrip(params.id,form)
        cleanFields()
    }

    const allCountries = countryList.map((country, index)=> {
        return <option key={index} value={country} >{country}</option>
    })

    return(
        <Container>
            <ConteinerForm onSubmit={goToapplyToTrip}>
                <h2>Preencha aqui o formulário</h2>
                <Inputs
                    id="name"
                    name={"name"}
                    value={form.name}
                    placeholder="Nome Completo"
                    onChange={onChange}
                    required
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <div>
                    <Inputs
                        id="age"
                        name={"age"}
                        value={form.age}
                        placeholder="Idade"
                        onChange={onChange}
                        required
                        type="number"
                        min={18}
                        title={"Idade deve ser maior ou igual a 18 anos"}
                    />
                    <Inputs
                        id="profession"
                        name={"profession"}
                        value={form.profession}
                        placeholder="Profissão"
                        onChange={onChange}
                        required
                        pattern={"^.{3,}"}
                        title={"A profissão deve ter no mínimo 3 letras"}
                    />
                    <Select name='country' onChange={onChange} value={form.country} required>
                        {allCountries}
                    </Select>
                </div>
                <textarea
                    name={"applicationText"}
                    value={form.applicationText}
                    placeholder="Mensagem"
                    onChange={onChange}
                    required
                    pattern={"^.{20,}"}
                    title={"A mensagem deve ter no mínimo 20 caracteres"}
                />
                <EmptyButton className={"buttons"}>Enviar</EmptyButton>
            </ConteinerForm>
            <ButtonBack/>
        </Container>
    )
}