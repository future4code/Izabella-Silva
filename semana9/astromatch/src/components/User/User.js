import React, { Profiler, useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl, user } from '../Config/Config'
import {Matches, Photos} from './styled'

const User = (props) => {
    const[matches, setMatches] = useState([])
    // const[quantidadeMatches, setQuantidadeMatches] = useState(0)

    const getMatches = () => {
        const params = "/matches"
        axios(baseUrl+user+params)
        .then((response) => {
            setMatches(response.data.matches)
            // setQuantidadeMatches(matches.length())
            // console.log("aqui a quantidade de matches", quantidadeMatches)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    useEffect(() => {
        getMatches()
    },[])

    const onClickClearAllMatch = () => {
        console.log("Limpar aqui")
        const params = "/clear"
        axios.put(baseUrl+user+params)
        .then((response)=> {
            getMatches()
            // setQuantidadeMatches(0)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    console.log("aqui estão os maches", matches)
    return (
        <div>
            {matches.length === 0 ?
            <div>
                Nennhum Match
            </div>:
            <Matches>
                {matches.map((profile) => {
                    return (
                        <div id={"imageAndName"} key={profile.id}>
                            <div id={"photo"} style={{backgroundImage: `url(${profile.photo})`}} />
                            <p id={"name"}>{profile.name}</p>
                        </div>
                    )
                })}
                <button onClick={onClickClearAllMatch}>Limpar tudo</button>
            </Matches>
            }
        </div>
    )
}

export default User;
