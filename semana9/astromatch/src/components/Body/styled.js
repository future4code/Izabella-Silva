import styled from 'styled-components'

export const OptionsEmpty = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    img{
        width:50px;
        height: 50px;
    }

    p{
        font-weight: bold;
    }
`

export const ResetButton = styled.button`
    border-radius: 8px;
    border-color: #f089b4;
    font-weight: bold;
    background-color: white;
    padding: 8px;
    margin-top: 16px;
    color: #f089b4;

    &:hover{
        cursor: pointer;
    }
`