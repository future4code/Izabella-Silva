import styled from "styled-components";
import {primaryColor, neutralColor} from '../../constants/colors'

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    border: 1px solid ${primaryColor};
    border-radius: 16px;
    box-shadow: 8px 8px 8px 2px ${neutralColor};
    margin: 16px;

    #infoUser{
        display: flex;
        align-items: center;
    }

    #infoPost{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #infoVotesAndComment{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`