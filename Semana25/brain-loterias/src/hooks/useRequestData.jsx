import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from 'axios'

const useRequestData = (initialData, path) => {
    const [data, setData] = useState(initialData)


    useEffect(() => {
        axios.get(`${BASE_URL}${path}`)
        .then((res) => {
            setData(res.data)
        }).catch((error) => {
            console.log(error.data)
            window.alert('Erro ao realizar solicitação.\n Tente novamente')
        })
    }, [path])

    return (data)
}

export default useRequestData