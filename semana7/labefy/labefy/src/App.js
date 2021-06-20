import React from 'react'
import axios from 'axios'
import {CreatePlayList} from './components/CreatePlayList'



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
      <div>
        {this.state.enter? <CreatePlayList onClickEnter={this.onClickEnter}/>:
        <div>
          <p>Labefy</p>
          <button onClick={this.onClickEnter}>Entrar</button>
        </div>}
        
      </div>
    )
  }
}