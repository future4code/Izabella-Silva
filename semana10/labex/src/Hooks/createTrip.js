import axios from 'axios'
import {urlGetTrips} from '../Config/config'

const createTrip = (body) => {
    const token = localStorage.getItem("token")

    axios.post(urlGetTrips, body, {
        headers:{
            auth: token
        }
    })
    .then((response) => {
        alert("Viagem Incluída com sucesso")
    })
    .catch((error) => {
        alert(`Erro, ${error.response.data}, tente novamente`)
    })
}

export default createTrip