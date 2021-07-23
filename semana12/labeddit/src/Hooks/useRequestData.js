import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestData = (initialData, url) =>{
    const [data, setData] = useState(initialData)

    const getData = () => {
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
    }

    useEffect(() => {
        getData()
    }, [])

    return {data,getData}
}

export default useRequestData