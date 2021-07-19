import styled from 'styled-components'

export const ConteinerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 360px);
    gap: 20px;
    margin: 10px 0;

    @media(max-device-width: 900px){
        grid-template-columns: 360px
    }
`

export const CardTrip = styled.div`
    border: 2px solid #836FFF;
    height: 360px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;

    p{
        margin: 0;
        padding: 4px;
        text-align: justify;
    }

    div{
        display: flex;
    }

`