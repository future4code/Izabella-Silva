import styled from 'styled-components'

export const ConteinerHeader = styled.div`
    /* display: grid;
    grid-template-columns: 60px 1fr 60px; */
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const IconsMatches = styled.img`
    width: 50px;
    height: 50px;

    &:hover{
        cursor: pointer;
    }
`

export const HiddenIcon = styled.div`
    width: 50px;
    height: 50px;
    border: none;
`

export const IconAstroMatch = styled.img`
    width: 50%;
`