import React, { useEffect, useState } from 'react'
import User from '../User/User'
import Profiles from '../Profiles/Profiles'
import axios from 'axios'
import {baseUrl, user} from '../Config/Config'

const Body = (props) => {

    const[profile, setProfile] = useState({})
    const[nextProfile, setNextProfile] = useState(1)
    
    useEffect(()=>{
        const params = "/person"
        axios.get(baseUrl+user+params)
        .then((response)=> {
            setProfile(response.data.profile)
        })
        .catch((error) => {
            console.log(error.data)
        })
    },[nextProfile])

    const changeProfile = () => {
        setNextProfile(nextProfile + 1)
    }

    return(
       <div>
           {props.changeScreen === "home" ?
           (profile === null ? 
            <div>
                Já foram mostrados todos os perfis
            </div> :
           <Profiles profile={profile} changeProfile={changeProfile}/>)
           : 
           <User />}
       </div>
    );
}

export default Body;