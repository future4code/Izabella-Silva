import React from 'react'
import axios from 'axios'
    import { baseUrl, user } from '../Config/Config'
import {Photos} from './styled'

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
            console.log(error.response)
        })
    }

    return(
        <div>
            <div>
                <Photos src={props.profile.photo} alt={props.profile.name}/>
                <p>{props.profile.name}, {props.profile.age}</p>
                <p>{props.profile.bio}</p>
            </div>
            <div>
                <button onClick={onClickDontLike}>X</button>
                <button onClick={onClickLike}>ok</button>
            </div>
        </div>
    )
}

export default Profiles;