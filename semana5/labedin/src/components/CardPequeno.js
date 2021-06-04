import React from 'react';
// import CardGrande from './components/CardGrande/CardGrande';
import styled from 'styled-components';

const DivFlexEBorda = styled.div `
    display: flex;
    align-items: center;
    padding: 10px 10px;
    border: 1px solid black;
    margin-bottom: 10px;
`

const Icone= styled.img `
    width: 30px;
    margin-right:10px;
`
function CardPequeno(props) {
    return (
        <DivFlexEBorda>
            <Icone src={ props.icone } />
            <div>
                <p>{ props.endereco }</p>
            </div>
        </DivFlexEBorda>
    )
}

export default CardPequeno;