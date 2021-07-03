import React from 'react'
import axios from 'axios'
import { baseUrl, user } from '../Config/Config'
import {ResetButton} from '../Body/styled'

const ResetProfiles = (props) => {

    const onClickClearAllMatch = () => {
        const params = "/clear"
        axios.put(baseUrl+user+params)
        .then((response)=> {
            props.getProfileTooChoose()
        })
        .catch((error) => {
        })
    }

    return(
        <ResetButton id={"clearButton"} onClick={onClickClearAllMatch}>
                    Limpar escolhas</ResetButton>
    )
}

export default ResetProfiles;