import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comentar.svg'
import iconeCompartilhar from '../../img/compartilhar_icon.svg'
import iconeSalvar from '../../img/salvar.svg'
import iconeSalvarPreto from '../../img/salvar_icon_black.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhando} from '../SecaoCompartilhando'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false,
    comentarios: [
			{
				comentario: ""
			}
		],
		valorInputComentario:''
  }

  onClickCurtida = () => {
    if(!this.state.curtido){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
        curtido: true
      })
    }else{
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas -1,
        curtido: false
      })
    }
  }
    
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      valorInputComentario:''
    })
  }

  onClickSalvar = () => {
    if(!this.state.salvo){
      this.setState({salvo: true})
    }else{
      this.setState({salvo: false})
    }
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoEnviarCompartilhar = () => {
    this.setState({
      compartilhando: false,
    })
  }

  onChangeComentario = (event) => {
		this.setState({valorInputComentario: event.target.value})
	}

	adicionarComentario = () =>{
		const novoComentario = {
			comentario: this.state.valorInputComentario
		}
		const novosComentarios = [...this.state.comentarios, novoComentario]

		this.setState({comentarios: novosComentarios})

		this.aoEnviarComentario()
	}
 
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario 
      comentarios ={this.state.comentarios}
      valorInputComentario  = {this.state.valorInputComentario}
      onChangeComentario = {this.onChangeComentario}  
      adicionarComentario ={this.adicionarComentario}
      />
    }
    
    let iconeSalvarPost

    if(this.state.salvo){
      iconeSalvarPost = iconeSalvarPreto
    }else{
      iconeSalvarPost = iconeSalvar
    }

    let componenteCompartilhamento

    if(this.state.compartilhando){
      componenteCompartilhamento = <SecaoCompartilhando aoCompartilhar={this.aoEnviarCompartilhar}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <img
          src = {iconeCompartilhar}
          onClick={this.onClickCompartilhar}
        />

        <img
          src = {iconeSalvarPost}
          onClick={this.onClickSalvar}
        />

      </PostFooter>
      {componenteComentario}
      {componenteCompartilhamento}
    </PostContainer>
  }
}

export default Post