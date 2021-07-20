import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import { goToFeedPage } from "../Router/coordinator"

const useUnprotectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            goToFeedPage(history)
        }
    }, [history])
}

export default useUnprotectedPage