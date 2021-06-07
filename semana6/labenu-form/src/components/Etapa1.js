import React from "react"

export class Etapa1 extends React.Component{
    render(){
        return<div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <ol>
                <li>
                    <p>Qual o seu nome?</p>
                    <input type="text" placebolder="Nome Completo"/>
                </li>
                <li>
                    <p>Qual sua idade?</p>
                    <input type="tel" placeholder="idade"/>
                </li>
                <li>
                    <p>Qual seu e-mail?</p>
                    <input type="email" placebolder="nome@servidor.com.br"/>
                </li>
                <li>
                    <p>Qual a sua escolaridade?</p>
                    <select name="select">
                        <option value="ensinoMedioIncompleto">Ensino Médio Incompleto</option>
                        <option value="ensinoMedioCompleto">Ensino Médio Completo</option>
                        <option value="ensinoSuperiorIncompleto">Ensino Superior Incompleto</option>
                        <option value="ensinoSuperiorCompleto">Ensino Mé3dio Completo</option>
                    </select>
                </li>
            </ol>
        </div>
    }
}