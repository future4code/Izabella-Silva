import { StyledName } from "./styled"

const ShowName = (props) => {
    return(
        <StyledName>
            <p>{props.lotteryName}</p>
        </StyledName>
    )
}

export default ShowName