import React, { Profiler, useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl, user } from '../Config/Config'
import {Photos} from './styled'

const User = () => {
    const[matches, setMatches] = useState([])

    useEffect(() => {
        const params = "/matches"
        axios(baseUrl+user+params)
        .then((response) => {
            setMatches(response.data.matches)
        })
        .catch((error) => {
            console.log(error.response)
        })
    },[matches])

    const onClickClearAllMatch = () => {
        const params = "/clear"
        axios.put(baseUrl+user+params)
        .then((response)=> {

        })
        .catch((error) => {

        })
    }

    console.log(matches)
    return (
        <div>
            {matches.map((profile) => {
                return (
                    <div>
                        <Photos src= {profile.photo} />
                        <p>{profile.name}</p>
                    </div>
                )
            })}
            <button onClick={onClickClearAllMatch}>Limpar tudo</button>
        </div>
    )
}

export default User;
