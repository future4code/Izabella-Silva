import { useEffect } from "react"
import { useHistory } from "react-router"
import { toToLogin } from "../routes/cordinator"

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            toToLogin(history)
        }
    }, [history])
}

export default useProtectedPage