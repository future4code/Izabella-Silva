import styled from "styled-components";

export const Matches = styled.div`
    width: 100%;
    height: 100%;
    align-self: flex-start;

    #imageAndName{
        display: flex;

        #photo{
            width: 50px;
            height: 50px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 50px;
            align-self: flex-start;
        }

        #name{
            font-size: bold;
            align-self: flex-start;
        }
    }
    
`