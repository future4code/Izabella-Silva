import { addressInfo } from "../types"
import axios from "axios"

export const getAddressInfo = async(zipCode: string): 
Promise<addressInfo | null> => {

    try{
        const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)
        console.log(response)

        return{
            street: response.data.logradouro,
            neighborhood: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf
        }

    }catch(error){
        console.log(error)
        return null
    }
}