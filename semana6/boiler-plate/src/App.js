import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
  display: flex;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
      editar: false
    }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasSalvas = localStorage.getItem('tarefas') 
    const arrayTarefas = JSON.parse(tarefasSalvas)
    if(arrayTarefas) {
      this.setState({tarefas: arrayTarefas})
    }

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    this.setState({tarefas: [...this.state.tarefas, novaTarefa]})
  }

  selectTarefa = (id) => {
    const novasTarefas = this.state.tarefas.map((tarefa) => {
      if(id = tarefa.id){
        const novaTarefa ={ ...tarefa, completa: !tarefa.completa}
        return novaTarefa
      }else{
        return tarefa
      }
    })
    this.setState({tarefas: novasTarefas})

  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  onClickApagarTarefa = (id) => {
    const novasTarefas = this.state.tarefas.filter((tarefa) =>{
      return id !== tarefa.id
    })
    this.setState({tarefas: novasTarefas})
  }

  onClickEditarTarefa = (id) =>{

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    const tarefasCompletas = this.state.tarefas.filter((tarefa)=>{
      return tarefa.completa === true
    }).map((tarefa) => {
      return <div>
      <Tarefa
        completa={tarefa.completa}
        onClick={() => this.selectTarefa(tarefa.id)}
      >
        {tarefa.texto}
      </Tarefa>
        <button onClick={() => this.onClickApagarTarefa(tarefa.id)}>Apagar</button>
        <button onClick={() => this.onClickEditarTarefa(tarefa.id)}>Editar</button>
      </div>
    })

    const tarefasPendentes = this.state.tarefas.filter((tarefa)=>{
      return tarefa.completa === false
    }).map((tarefa) => {
      return <div>
      <Tarefa
        completa={tarefa.completa}
        onClick={() => this.selectTarefa(tarefa.id)}
      >
        {tarefa.texto}
      </Tarefa>
        <button onClick={() => this.onClickApagarTarefa(tarefa.id)}>Apagar</button>
        <button onClick={() => this.onClickEditarTarefa(tarefa.id)}>Editar</button>
      </div>
    })

    // const editarTarefa = this.state.tarefas.map((tarefa) => {

    // })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
        <div>
          <h2>Tarefas Completas</h2>
          {tarefasCompletas}
        </div>
        <div>
          <h2>Tarefas Pendentes</h2>
          {tarefasPendentes}
        </div>

          {/* {listaFiltrada.map(tarefa => {
            return (
              <div>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.onClickApagarTarefa(tarefa.id)}>Apagar</button>
                <button onClick={() => this.onClickEditarTarefa(tarefa.id)}>Editar</button>
              </div>
            )
          })} */}
        </TarefaList>
      </div>
    )
  }
}

export default App
