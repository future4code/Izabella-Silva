import React from 'react'

export class Etapa3 extends React.Component{
    render(){
        return <div>
            <p>Por que você não terminou um curso de graduação?</p>
            <input type="text"/>
            <p>Você fez algum curso complementar?</p>
            <select>
                <option value="nenhum">Nenhum</option>
                <option value="cursoTecnico">Curso Técnico</option>
                <option value="CursoDeIngles">Curso de Ingles</option>
            </select>
        </div>
    }
}