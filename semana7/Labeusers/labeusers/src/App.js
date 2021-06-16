import React from 'react'
import {Cadastro} from './components/Cadastro'
import {MostrarDetalheUsuario} from './components/MostrarDetalheUsuario'
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

  componentDidMount() {
    this.getRegisters();
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
      alert ("Cadastro efetuado com sucesso")
      console.log("res post", res)
      this.setState({inputName: "", inputEmail: ""})
      this.getRegisters()
    })
    .catch((err) => {
      console.log("err post",err)
      alert("Erro ao cadastrar usuario")
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
        this.setState({ users: res.data });
      })
      .catch((err) => {
        console.log("err get", err)
        // alert(err.response.data.message);
      });

  };

  onClickApagarUsuario = (id) => {
    let confirmacao = window.confirm("Tem certeza que deseja apagar?")
    if(confirmacao){
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
      .then((res) => {
        console.log("res get", res)
        alert("usuario excluido com sucesso")
        this.getRegisters()
      })
      .catch((err) => {
        console.log("err get", err)
        // alert(err.response.data.message);
      });
    }
  }

  mostrarDetalhe = (id) => {
    <MostrarDetalheUsuario/>
  }

  render(){

    console.log(this.state.users)

    const mostrarLista = this.state.users.map((user) => {
      return<li key={user.id}>
        {user.name}
        <button onClick={() => this.onClickApagarUsuario(user.id)}>Apagar</button>
        <button onClick={() => this.mostrarDetalhe(user.id)}>Mostrar detalhes do usuario</button>
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

        {this.state.mostrarLista === true ? mostrarLista : <></>}

      </div>
    );
  }
}
