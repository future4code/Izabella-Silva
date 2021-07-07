import { useEffect } from "react";
import axios from 'axios'
import {urlGetTrips} from '../Config/config'

const ApplyToTrip = (id,body) => {

    useEffect(()=>{
        axios.put(`${urlGetTrips}/${id}/apply`,body)
        .then((response)=>{
            alert("Mensagem enviada com sucesso, aguarde contato")
        })
        .catch((error)=>{
            console.log(error.reponse)
        })  
    })
}

export default ApplyToTrip;