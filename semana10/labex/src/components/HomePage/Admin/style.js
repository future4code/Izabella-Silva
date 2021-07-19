import styled from 'styled-components'

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #836FFF;
    padding: 20px;
    margin: 20px 0;
`

export const FormLogin = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

export const InputLogin = styled.input`
    border: 2px solid #836FFF;
    border-radius: 16px;
    padding: 8px;
    margin-bottom: 10px;
    max-width: 50vw;
    width: 360px;
`
export const ContainerAdminPage = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;

     input{
        border: 2px solid #836FFF;
        border-radius: 16px;
        padding: 8px;
        width: 300px;
        margin: 10px 0;
     }

     textarea{
        border: 2px solid #836FFF;
        border-radius: 16px;
        padding: 8px;
        width: 300px;
        margin: 10px 0;
     }
`