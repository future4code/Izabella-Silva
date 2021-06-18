import React from 'react'
import axios from 'axios'

export class Cadastro extends React.Component{

    state = {
        users: [],
        inputName: "",
        inputEmail: "",
    }
    
    onChangeName = (event) => {
        this.setState({inputName: event.target.value})
    }
    
    onChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    createRegister = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const headers = {
            headers: {
            Authorization: "izabella-brandao-molina"
            }
        };

        console.log(this.state)

        const body ={
          name: this.state.inputName,
          email: this.state.inputEmail
        }
    
        axios
        .post(url,body, headers)
        .then((res) => {
          alert ("Cadastro efetuado com sucesso")
          this.setState({inputName: "", inputEmail: ""})
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      }

    render(){

        
        return(
            <div>
                <button onClick={this.props.goToList}>Ir para Lista</button>
                <h2>Cadastro</h2>
                <label>Nome:</label>
                <input type="text" value={this.state.inputName} onChange = {this.onChangeName}/>
                <label>E-mail:</label>
                <input type="e-mail" value={this.state.inputEmail} onChange = {this.onChangeEmail}/>
                <button onClick={this.createRegister}>Enviar</button>
            </div>
        );
    }
}