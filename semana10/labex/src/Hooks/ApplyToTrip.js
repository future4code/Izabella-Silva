import axios from 'axios'
import {urlGetTrips} from '../Config/config'

const applyToTrip = (id,body) => {

    axios.post(`${urlGetTrips}/${id}/apply`,body)
    .then(()=>{
        alert("Mensagem enviada com sucesso, aguarde contato")
    })
    .catch(()=>{
        alert("Error, tente novamente")
    })  
}

export default applyToTrip;