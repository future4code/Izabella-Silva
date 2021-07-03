import styled from "styled-components";

export const ConteinerMatches = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const MatchesEmpty = styled.div`
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

export const Matches = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    align-self: flex-start;

    #imageAndName{
        display: flex;
        align-self: flex-start;
        height: 70%;

        #photo{
            width: 50px;
            height: 50px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 50px;
            align-self: flex-start;
            margin: 5px 10px;
        }

        #name{
            font-size: bold;
            align-self: flex-start;
        }
    }

    #clearButton{
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
    }
    
`