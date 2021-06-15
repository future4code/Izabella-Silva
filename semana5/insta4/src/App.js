import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    dadosUsuarios: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Izabella',
        fotoUsuario: 'https://picsum.photos/51/51',
        fotoPost: 'https://picsum.photos/201/151'
      },
      {
        nomeUsuario: 'Wellington',
        fotoUsuario: 'https://picsum.photos/52/52',
        fotoPost: 'https://picsum.photos/202/152'
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
    console.log(event.target.value)
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  adicionarPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novosPosts = [...this.state.dadosUsuarios, novoPost]

    this.setState({dadosUsuarios: novosPosts})
  }

  render() {

    const postDeUsuarios = this.state.dadosUsuarios.map((usuario,index) => {
      return (
        <Post key={index}
        nomeUsuario = {usuario.nomeUsuario}
        fotoUsuario = {usuario.fotoUsuario}
        fotoPost = {usuario.fotoPost}
        />
      );
    });

    console.log(postDeUsuarios)
    return (
      <MainContainer>
        <input
          value = {this.state.valorInputNomeUsuario}
          onChange = {this.onChangeInputNomeUsuario}
          placeholder = {"Nome"}
        />

        <input
          value = {this.state.valorInputFotoUsuario}
          onChange = {this.onChangeInputFotoUsuario}
          placeholder = {"Foto Usuario"}
        />

        <input
          value = {this.state.valorInputFotoPost}
          onChange = {this.onChangeInputFotoPost}
          placeholder = {"Foto Post"}
        />

        <button onClick= {this.adicionarPost}>Adicionar</button>

        {postDeUsuarios}
      </MainContainer>
    );
  }
}

export default App;
