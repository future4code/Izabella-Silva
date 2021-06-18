import React from 'react'
import axios from 'axios'
import {MostrarDetalheUsuario} from './MostrarDetalheUsuario'

const headers = {
    headers: {
    Authorization: "izabella-brandao-molina"
    }
};

export class Lista extends React.Component{

    state={
        users: [],
        userSelected: [],
        mostrarDetalheUsuario: false,
    }

    componentDidMount() {
        this.getRegisters();
    }

    getRegisters = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    
        axios
          .get(url, headers)
          .then((res) => {
            this.setState({ users: res.data });
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
    };

    onClickApagarUsuario = (id) => {
        let confirmacao = window.confirm("Tem certeza que deseja apagar?")
        if(confirmacao){
          axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
          .then((res) => {
            alert("usuario excluido com sucesso")
            this.getRegisters()
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
        }
    }
    
    mostrarDetalhe = (id) => {
        this.setState({mostrarDetalheUsuario: true})

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const headers = {
            headers:{
                Authorization: "izabella-brandao-molina"
            }
        }
        axios
        .get(url,headers)
        .then((res) =>{
            console.log("res Detalhe Usuario", res.data)
            this.setState({userSelected: res.data})
        })
        .catch((err) =>{
            alert("tente Novamente")
        })
    }

    voltaParaLista = () =>{
        this.setState({mostrarDetalheUsuario: false})
    }

    render(){
        const mostrarLista = this.state.users.map((user) => {
            return<li key={user.id}>
              {user.name}
              <button onClick={() => this.onClickApagarUsuario(user.id)}>X</button>
              <button onClick={() => this.mostrarDetalhe(user.id)}>Mostrar detalhes do usuario</button>
            </li>
        })
        return<div>
            {this.state.mostrarDetalheUsuario ? <MostrarDetalheUsuario user={this.state.userSelected}
            voltaParaLista={this.voltaParaLista}/>:
            <div>
                <button onClick={this.props.goToRegister}>Ir Para Cadastro</button>
                <h2>Lista de Cadastro</h2>
                {mostrarLista}
            </div>
            }
            
        </div>
    }
}