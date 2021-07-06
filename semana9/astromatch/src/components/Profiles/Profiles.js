import React from 'react'
import axios from 'axios'
import { baseUrl, user } from '../Config/Config'
import {CardProfiles, ConteinerProfiles, ButtonsLikeUnLike} from './styled'
import ResetProfiles from '../Body/ResetProfiles'

const Profiles = (props) => {

    const onClickDontLike = () => {
        const params = "/choose-person"
        const body = {
            id: props.profile.id,
            choice: false
        }
        axios.post(baseUrl+user+params,body)
        .then((response) =>{
            props.changeProfile()
        })
        .catch((error) => {

        })
    }

    const onClickLike = () => {
        const params = "/choose-person"
        const body = {
            id: props.profile.id,
            choice: true
        }
        axios.post(baseUrl+user+params,body)
        .then((response) =>{
            props.changeProfile()
        })
        .catch((error) => {
            alert("Erro, tente mais tarde")
        })
    }

    return(
        <ConteinerProfiles>
            <CardProfiles>
                <img id="photo" src={props.profile.photo} alt={props.profile.name}/>
                <p id="nameAndAge">{props.profile.name}, {props.profile.age}</p>
                <p>{props.profile.bio}</p>
            </CardProfiles>
            <ButtonsLikeUnLike>
                <div className="buttons" id="buttonUnLike" onClick={onClickDontLike}></div>
                <div className="buttons" id="buttonLike"  onClick={onClickLike}></div>
            </ButtonsLikeUnLike>
            <ResetProfiles/>
        </ConteinerProfiles>
    )
}

export default Profiles;