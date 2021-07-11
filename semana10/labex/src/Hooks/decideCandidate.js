import axios from 'axios'
import {urlGetTrips} from '../Config/config'

const decideCandidate = (idCandidate, idTrip, approve) => {
    const token = localStorage.getItem("token")

    const body = {
        approve: approve
    }
    
    axios.put(`${urlGetTrips}/${idTrip}/candidates/${idCandidate}/decide`, body,{
        headers: {
            auth: token
        }
    })
    .then((response) => {
        alert("Candidato aprovado com sucesso")
    })
    .catch((error) => {
        alert(`Erro ${error.response.data}, tente novamente`)
    })
}

export default decideCandidate