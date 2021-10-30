import { SelectStyled } from "./styled"

const SelectContest = (props) => {

    const selecLotteries = props.lotteries.map((lottery) => {
        return(
                <option key={lottery.id} value={lottery.id}>
                    {lottery.nome.toUpperCase()}</option>
        )
    })

    return(
        <div>
            <SelectStyled onChange={props.changeLotteryId}>
                {selecLotteries}
            </SelectStyled>
        </div>
    )
}

export default SelectContest