import styled from 'styled-components'
import {primaryColor, neutralColor} from '../../constants/colors'

export const Navigation = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${neutralColor};
    width: 100vw;
    padding: 10px;
    #buttonleft{
        margin-left: 20px;
        color: white;
        font-weight: bold;
    }

    #buttonRight{
        margin-right: 20px;
        color: white;
        font-weight: bold;
    }

`