import React from 'react'
import {CreatePlayList} from './components/CreatePlayList'
import styled from 'styled-components'

const PrimeiraPagina = styled.div`
  padding: 50vh;
  background-color: purple;
  background: linear-gradient(to bottom right, blue, purple);
`

const DivEntrar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Logo = styled.p`
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 50px;
`

const BotaoEntrar = styled.button`
  margin: 10px;
  width: 70px;
  border-radius: 20px;
  color: white;
  background-color: black;
  &:hover {
    cursor: pointer;
  }
`


export default class App extends React.Component{

  state={
    enter: false
  }

  onClickEnter = () => {
    if(this.state.enter){
      this.setState({enter: false})
    }else{
      this.setState({enter: true})
    }
  }

  render(){
    return(
      <PrimeiraPagina>
        {this.state.enter? <CreatePlayList onClickEnter={this.onClickEnter}/>:
        <DivEntrar>
          <Logo>Labefy</Logo>
          <BotaoEntrar onClick={this.onClickEnter}>Entrar</BotaoEntrar>
        </DivEntrar>}
        
      </PrimeiraPagina>
    )
  }
}