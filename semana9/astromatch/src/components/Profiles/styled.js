import styled from "styled-components";
import heartWhite from '../../img/heartWhite.png'
import unLikewhite from '../../img/unLikewhite.png'
import unLikePurple from '../../img/unlikePurple.png'
import heartRed from '../../img/heartRed.png'

export const ConteinerProfiles = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`

export const CardProfiles = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 80%;
    box-shadow: inset 0 0 1em silver, 0 0 1em silver;
    padding: 10px;

    #photo{
        width: 200px;
        height: 240px;
        border-radius: 10px;
    }

    #nameAndAge{
        font-weight: bold;
        align-self: flex-start;
    }
`

export const ButtonsLikeUnLike = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;

    #buttonUnLike{
        background-image: url(${unLikewhite});
        width: 50px;
        height: 50px;
        margin: 5px 10px 5px 10px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        &:hover{
            background-image: url(${unLikePurple});
            cursor: pointer;
        }
    }

    #buttonLike{
        background-image: url(${heartWhite});
        width: 50px;
        height: 50px;
        margin: 5px 10px 5px 10px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        &:hover{
            background-image: url(${heartRed});
            cursor: pointer;
        }
    }
`

