import styled from "styled-components";
import {primaryColor, neutralColor} from '../../constants/colors'

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${primaryColor};
    border-radius: 16px;
    box-shadow: 8px 8px 8px 2px ${neutralColor};
    margin: 16px;

    #infoUser{
        display: flex;
        align-items: center;

        &:hover{
            cursor: pointer;
        }

        #name{
            margin-left: 5px;
        }

        #time{
            margin-left: 5px;
            font-size: 12px;
        }
    }

    #infoPost{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid black;

        &:hover{
            cursor: pointer;
        }
    }

    #infoVotesAndComment{
        display: flex;
        align-self: left;
        align-items: center;
        justify-content: space-between;

        .comments{
            border: 1px solid silver;
            border-radius: 16px;
            padding: 10px;
            margin: 10px 10px 10px 10px;
            
            &:hover{
            cursor: pointer;
        }
        }
    }
`