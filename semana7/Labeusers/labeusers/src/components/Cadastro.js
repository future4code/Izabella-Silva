import React from 'react'

export class Cadastro extends React.Component{
    render(){
        return(
            <fieldset>
                <label>Nome:</label>
                <input type="text" value={this.props.inputName} onChange = {this.props.onChangeName}/>
                <label>E-mail:</label>
                <input type="e-mail" value={this.props.inputEmail} onChange = {this.props.onChangeEmail}/>
                <button onClick={this.props.createRegister}>Enviar</button>
            </fieldset>
        );
    }
}