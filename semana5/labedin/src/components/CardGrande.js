import React from 'react';
import styled from 'styled-components';

const DivFlexEBorda = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImagemPerfil = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const MargemNome = styled.h4 `
    margin-bottom: 15px;
`

const NomeEDescricao = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <DivFlexEBorda>
            <ImagemPerfil src={ props.imagem } />
            <NomeEDescricao>
                <MargemNome>{ props.nome }</MargemNome>
                <p>{ props.descricao }</p>
            </NomeEDescricao>
        </DivFlexEBorda>
    )
}

export default CardGrande;