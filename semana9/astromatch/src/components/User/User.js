import React, { Profiler, useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl, user } from '../Config/Config'
import {ConteinerMatches, MatchesEmpty, Matches} from './styled'
import twoHearts from '../../img/twoHearts.png'

const User = (props) => {
    const[matches, setMatches] = useState([])

    const getMatches = () => {
        const params = "/matches"
        axios(baseUrl+user+params)
        .then((response) => {
            setMatches(response.data.matches)
        })
        .catch((error) => {
            alert("Erro, tente mais tarde")
        })
    }

    useEffect(() => {
        getMatches()
    },[])

    const onClickClearAllMatch = () => {
        const params = "/clear"
        axios.put(baseUrl+user+params)
        .then((response)=> {
            getMatches()
        })
        .catch((error) => {
            alert("Erro, tente mais tarde")
        })
    }

    return (
        <ConteinerMatches>
            {matches.length === 0 ?
            <MatchesEmpty>
                <img src={twoHearts} alt={"dois coracoes"}/>
                <p>Não há Matches</p>
            </MatchesEmpty>:
            <Matches>
                {matches.map((profile) => {
                    return (
                        <div id={"imageAndName"} key={profile.id}>
                            <div id={"photo"} style={{backgroundImage: `url(${profile.photo})`}} />
                            <p id={"name"}>{profile.name}</p>
                        </div>
                    )
                })}
                <button id={"clearButton"} onClick={onClickClearAllMatch}>
                    Limpar tudo</button>
            </Matches>
            }
        </ConteinerMatches>
    )
}

export default User;
