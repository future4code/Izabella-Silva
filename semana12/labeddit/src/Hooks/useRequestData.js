import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestData = (initialData, url) =>{
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) =>{
            console.log(response.data)
            setData(response.data)
        })
        .catch((error) =>{
            console.log(error.response.data.message)
            alert("Erro, tente novamente")
        })
    }, [url])

    return (data)
}

export default useRequestData