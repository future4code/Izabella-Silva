import React from "react"
import { PerguntaAberta } from "./PerguntaAberta"
import { PerguntaOpcoes } from "./PerguntaOpcoes"

export class Etapa1 extends React.Component{
    render(){
        return<div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <PerguntaAberta pergunta = "1. Qual o seu nome?"/>
            <PerguntaAberta pergunta = "2. Qual sua idade?"/>
            <PerguntaAberta pergunta = "3. Qual seu e-mail?"/>
            <PerguntaOpcoes pergunta = "4. Qual a sua escolaridade"
            opcoes={[
                "Ensino Médio Incompleto",
                "Ensino Médio Completo",
                "Ensino Superior Incompleto",
                "Ensino Superior Completo"
            ]}
            />
        </div>
    }
}