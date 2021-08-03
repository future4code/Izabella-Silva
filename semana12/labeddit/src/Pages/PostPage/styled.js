import styled from "styled-components";
import { primaryColor, neutralColor} from "../../constants/colors";

export const ContainerComments = styled.div`
    border: 1px solid ${primaryColor};
    border-radius: 16px;
    margin: 10px;
    padding: 10px;

    #infoUser{
        display: flex;
        align-items: center;
        #name{
            margin-left: 5px;
        }

        #time{
            margin-left: 5px;
            font-size: 12px;
        }
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`