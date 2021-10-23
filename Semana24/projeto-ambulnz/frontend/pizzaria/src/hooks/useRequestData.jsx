import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const useRequestData = (initialData, path) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(`${BASE_URL}${path}`)
        .then((res) => {
            console.log(res.data.message)
            setData(res.data.message) 
        }).catch((error) => {
            console.log(error.data)
            window.alert('Erro ao realizar solicitação.\n Tente novamente.')
        })
    }, [path])

    console.log(data)

    return (data)
}

export default useRequestData