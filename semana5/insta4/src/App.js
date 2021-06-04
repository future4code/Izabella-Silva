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
    postsUsuarios: [
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
    ]
  }

  render() {

    const postDeUsuarios = this.state.postsUsuarios.map((usuario) => {
      return (
        <Post>
          {usuario.nomeUsuario}
          {usuario.fotoUsuario}
          {usuario.fotoPost}
        </Post>
      );
    });

    return (
      <MainContainer>
        {postDeUsuarios}
      </MainContainer>
    );
  }
}

export default App;
