import { ContainerContest, ContainerDatail } from "./styled"

const ContestDetails = (props) => {
    const date = props.contestDate.split("T")[0]
    const newDate = date.split("-").reverse().join("/")
    return(
        <ContainerDatail>
            <p>Concurso</p>
            <ContainerContest>
                <p>{`${props.contestId} - `}</p>
                <p>{newDate}</p>
            </ContainerContest>
        </ContainerDatail>
    )
}

export default ContestDetails