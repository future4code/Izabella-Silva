import { useHistory } from "react-router";
import {FullButton} from '../../Several/Buttons'

export const ButtonBack = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
     };

    return(
        <FullButton onClick={goBack}>Voltar</FullButton>
    )
}