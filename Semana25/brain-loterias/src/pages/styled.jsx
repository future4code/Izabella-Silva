import styled from 'styled-components'
import { backGroundBalls } from '../constants/colors'

export const ContainerPage =  styled.div`
    display: flex;

    @media(max-device-width: 414px){
        flex-direction: column ;
    }
`

export const ContainerRounded = styled.div`
    width: 5vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    #roundTop{
        border-top-left-radius: 4096%;
        width: 100%;
        height: 50%;
        background-color: ${backGroundBalls};
    }

    #roundDown{
        border-bottom-left-radius: 4096%;
        border-top-left-radius: 0;
        width: 100%;
        height: 50%;
        background-color: ${backGroundBalls};
    }

        @media(max-device-width: 414px){
            width: 100vw;
            height: 5vh;
            flex-direction: row;
        
        #roundTop{
            border-top-left-radius: 4096%;
            width: 50%;
            height: 100%;
        }

        #roundDown{
            border-top-right-radius: 4096%;
            border-top-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            width: 50%;
            height: 100%;
        }
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
    width: 65vw;
    height: 100vh;
    background-color: ${backGroundBalls};
    align-items: center;

    @media(max-device-width: 414px){
        width: 100vw;
        height: 60vh;
    }
`