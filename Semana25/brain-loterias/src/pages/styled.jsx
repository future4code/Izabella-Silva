import styled from 'styled-components'
import { backGroundBalls } from '../constants/colors'

export const ContainerPage =  styled.div`
    display: flex;

    @media(max-device-width: 414px){
        flex-direction: column ;
    }
`

export const ContainerLottery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30vw;
    height: 100vh;
    align-items: center;

    @media(max-device-width: 414px){
        width: 100vw;
        height: 40vh;
    }
`

export const ContainerNumbers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70vw;
    height: 100vh;
    background-color: ${backGroundBalls};
    align-items: center;

    @media(max-device-width: 414px){
        width: 100vw;
        height: 60vh;
    }
`