import styled from 'styled-components'

export const FullButton =  styled.button`
    background-color: #836FFF;
    padding: 8px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    font-size: 1.1em;
    margin: 10px;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const EmptyButton =  styled.button`
    background-color: white;
    padding: 8px;
    border: 1px solid #836FFF;
    border-radius: 8px;
    color: #836FFF;
    font-weight: bold;
    font-size: 1.1em;
    margin: 10px;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`