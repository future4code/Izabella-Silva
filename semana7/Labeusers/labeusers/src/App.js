import React from 'react'
import {Cadastro} from './components/Cadastro'
import axios from "axios"

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "izabella-brandao-molina"
  }
};

export default class App extends React.Component{

  state = {
    users: [],
    inputName: "",
    inputEmail: "",
    mostrarLista: false
  }

  onChangeName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  createRegister = () => {
    const body ={
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios
    .post(url,body, headers)
    .then((res) => {
      // alert ("Cadastro efetuado com sucesso")
      console.log(res)
      this.setState({inputName: "", inputEmail: ""})
    })
    .catch((err) => {
      console.log(err)
      // alert(err)
    })
  }

  getRegisters = () => {

    if(this.state.mostrarLista){
      this.setState({mostrarLista: false})
    }else{
      this.setState({mostrarLista: true})
    }
    
    axios
      .get(url, headers)
      .then((res) => {
        console.log("res get", res)
        // this.setState({ users: res.data.result.list });
      })
      .catch((err) => {
        console.log("err get", err.response.data)
        // alert(err.response.data.message);
      });

  };

  render(){

    const mostrarLista = this.state.users.map((user) => {
      return<li key={user.id}>
        {user.name}
        <button>Apagar</button>
      </li>
    })
    return(
      <div>
        <Cadastro
        inputName = {this.state.inputName}
        inputEmail = {this.state.inputEmail}
        onChangeName={this.onChangeName}
        onChangeEmail={this.onChangeEmail}
        createRegister={this.createRegister}
        />
        <button onClick={this.getRegisters}>Ver Lista</button>
        {this.state.mostrarLista} ? {mostrarLista} : <></>

      </div>
    );
  }
}
