import styled from 'styled-components'
import { ball } from '../constants/colors'

export const BallsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    flex-wrap: wrap;
`

export const BallStyled = styled.div`
    display: flex;
    margin: 0 10px 0 10px;
    padding: 10px;
    border-radius: 50%;
    background-color: ${ball};
`

export const SelectStyled = styled.select`
    padding: 10px;
    border-width: 0px;
    border-radius: 5px;
`

export const ContainerDatail = styled.div`
    color: white;
`

export const ContainerContest = styled.div`
    display: flex;
    font-weight: bold;
`

export const StyledName = styled.div`
    color: white;
    font-weight: bold;
`