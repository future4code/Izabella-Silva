import axios from 'axios'
import {urlLogin} from '../Config/config'

const Login = (body, history) => {

    axios.post(urlLogin,body)
    .then((response)=>{
        localStorage.setItem("token", response.data.token)
        history.push("/adminhome")
    })
    .catch((error)=>{
        alert("Erro, tente novamente")
    })  

}

export default Login