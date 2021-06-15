import React from 'react'

export class PerguntaOpcoes extends React.Component{
    render(){
        const perguntaOpcoes = this.props.opcoes.map((opcao, index) => {
            return <option key="index">
                {opcao}
            </option>
        })

        return <div>
            <p>{this.props.pergunta}</p>
            <select>
                {perguntaOpcoes}
            </select>
        </div>
    }
}