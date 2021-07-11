import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`


export const ConteinerForm = styled.form`
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 504px;

    #name{
        width: 96%;
        margin-bottom: 10px;
    }

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        #age{
            width: 10%;
        }

        #profession{
            width: 40%;
        }

        #country{
            width: 30%;
        }
    }

    textarea{
        border: 2px solid #836FFF;
        border-radius: 16px;
        max-width: 50vw;
        height: 96px;
    }


        .buttons{
            width: 72px;
            align-self: center;
        }
    
`

export const Inputs = styled.input`
    border: 2px solid #836FFF;
    border-radius: 16px;
    padding: 8px;
    max-width: 50vw;

`

export const ContainerFilter= styled.div`
    background-color: #836FFF;
    padding: 20px;
    margin: 20px 0;
    border: 2px solid #836FFF;
    border-radius: 16px;

    input{
        border: 2px solid #836FFF;
        border-radius: 16px;
        padding: 8px;
    }

    #name{
        width: 260px;
    }

`
