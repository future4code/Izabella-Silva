import React, {useEffect, useState} from 'react';
import ContestDetails from '../components/ContestDetails';
import SelectContest from '../components/SelectContest';
import ShowName from '../components/ShowName';
import ShowNumbers from '../components/ShowNumbers';
import useRequestData from '../hooks/useRequestData';
import {ContainerPage, ContainerLottery, ContainerNumbers} from './styled'
import getBackGroundColor from '../functions/getbackgroundcolor'

const ResultPage = () => {
    const lotteries = useRequestData([], "/loterias")
    const contests = useRequestData([], "/loterias-concursos")

    const [lotteryId, setLotteryId] = useState(0)
    const [lotteryName, setLotteryName] = useState("MEGA-SENA")
    const [contestId, setContestId] = useState("2359")
    const [contestDate, setContestDate] = useState("")

    const changeLotteryId = event => {
        const numLotteryId = Number(event.target.value)
        getContest(numLotteryId)
        getName(numLotteryId)
        setLotteryId(numLotteryId)        
    }

    const getName = (numLotteryId) =>{
        lotteries.forEach((lottery) => {
            if(lottery.id === numLotteryId){
                setLotteryName(lottery.nome.toUpperCase())
            }
        })
    }

    const getContest = (numLotteryId) => {
        contests.forEach((contest) => {
            if(contest.loteriaId === numLotteryId){
                setContestId(contest.concursoId)
            }
        })
    }

    useEffect(() => {
        getName(lotteryId)
        getContest(lotteryId)
    }, [lotteryId])

    return(
        <ContainerPage>
            <ContainerLottery style={{backgroundColor: getBackGroundColor(lotteryId)}}>
                {lotteries.length > 0 && <SelectContest lotteries={lotteries} contests={contests} changeLotteryId={changeLotteryId}/>}
                {lotteries.length > 0 && <ShowName lotteryName={lotteryName}/>}
                {contestDate && <ContestDetails contestId={contestId} contestDate={contestDate} />}
            </ContainerLottery>
            <ContainerNumbers>
                <div> </div>
                {contestId && <ShowNumbers contestId={contestId} setContestDate={setContestDate}/>}
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </ContainerNumbers>
        </ContainerPage>
    )
}

export default ResultPage