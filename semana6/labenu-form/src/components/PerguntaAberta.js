import React from 'react'
import {Etapa1} from './Etapa1'

export class PerguntaAberta extends React.Component{

    render(){
        return(
            <div>
                <p>{this.props.pergunta}</p>
                <input type="text"/>    
            </div>
        ) ;
    }
}