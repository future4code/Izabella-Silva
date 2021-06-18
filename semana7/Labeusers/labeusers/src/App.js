import React from 'react'
import {Cadastro} from './components/Cadastro'
import {Lista} from './components/Lista'


export default class App extends React.Component{
  state = {
    tela: "cadastro"
  }

  changeScreen = () => {
    switch (this.state.tela) {
      case "cadastro":
        return <Cadastro goToList = {this.goToList}/>
      case "lista":
        return <Lista goToRegister = {this.goToRegister}/>
      default:
        return <div>Erro! Página Não Encontrada</div>
    }
  }

  goToRegister = () => {
    this.setState({tela: "cadastro"})
  }

  goToList = () => {
    this.setState({tela: "lista"})
  }

  render(){

    return(
      <div>
        {this.changeScreen()}
      </div>
    );
  }
}
