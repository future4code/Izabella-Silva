import axios from 'axios'
import {urlGetTrips} from '../Config/config'

const deleteTrip = (id) => {
    const token = localStorage.getItem("token")

    axios.delete(`${urlGetTrips}/${id}`,{
        headers:{
            auth: token
        }
    })
    .then((response) => {
        alert("Viagem deletada com sucesso")
    })
    .catch((error) => {
        alert(`Erro ${error.response.data}, tente novamente`)
    })
}

export default deleteTrip