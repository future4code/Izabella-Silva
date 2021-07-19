import styled from 'styled-components'

export const HeaderOfPage = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid  #836FFF;
    padding: 10px;
    
    @media(max-device-width: 900px){
        flex-direction: column;
        .buttons{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`
export const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    #imgLogo{
        width: 30px;
        height: 30px;
        margin: 0 8px;
    }

    #name{
        font-weight: bold;
        font-size: 1.2em;
        color: #836FFF;
    }

`