import useRequestData from "../hooks/useRequestData"
import { BallsContainer, BallStyled} from "./styled"

const ShowNumbers = (props) => {
    const contest = useRequestData({}, `/concursos/${props.contestId}`)
    props.setContestDate(contest.data)

    const numbers = contest.numeros?.map((number) => {
        return(
            <BallStyled key={number}>
                {number}
            </BallStyled>
        )
    })
    return(
        <BallsContainer>
            {numbers}
        </BallsContainer>
    )
}

export default ShowNumbers