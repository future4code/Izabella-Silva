import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5,260px);
    gap: 8px;
    padding: 16px;
`

export const ContaineCads = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #0000CD; */
    padding: 8px;
    border-radius: 16px;

    h2{
        color: white;
    }

    #containerImg{
        /* background-color: white; */
        padding: 8px;
    }

    #containerButtons{
        display: flex;
        margin-top: 8px;

        .buttons{
            padding: 8px;
            font-weight: bold;
            margin: 4px;
            border-radius: 16px;
        }
    }

`