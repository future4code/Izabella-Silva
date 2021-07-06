import React, { useEffect, useState } from 'react'
import User from '../User/User'
import Profiles from '../Profiles/Profiles'
import axios from 'axios'
import {baseUrl, user} from '../Config/Config'
import {OptionsEmpty} from './styled'
import twoHearts from '../../img/twoHearts.png'
import ResetProfiles from './ResetProfiles'

const Body = (props) => {

    const[profile, setProfile] = useState({})
    const[nextProfile, setNextProfile] = useState(1)

    const getProfileTooChoose = () => {
        const params = "/person"
        axios.get(baseUrl+user+params)
        .then((response)=> {
            setProfile(response.data.profile)
        })
        .catch((error) => {
    
        })
    }
    
    useEffect(()=>{
        getProfileTooChoose()
    },[nextProfile])

    const changeProfile = () => {
        setNextProfile(nextProfile + 1)
    }

    return(
       <div>
           {props.changeScreen === "home" ?
           (profile === null ? 
            <OptionsEmpty>
                <img src={twoHearts} alt={"dois coracoes"}/>
                <p>Já foram mostrados todos os perfis</p>
                <ResetProfiles getProfileTooChoose = {getProfileTooChoose}/>
            </OptionsEmpty> :
           <Profiles profile={profile} changeProfile={changeProfile}/>)
           : 
           <User />}
       </div>
    );
}

export default Body;