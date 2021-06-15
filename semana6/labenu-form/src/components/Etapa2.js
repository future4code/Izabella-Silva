import React from 'react'
import { PerguntaAberta } from './PerguntaAberta'

export class Etapa2 extends React.Component{
    render(){
        return <div>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <PerguntaAberta pergunta="5. Qual Curso?"/>
            <PerguntaAberta pergunta="6. Qual Unidade do Curso?"/>
        </div>

    }
}