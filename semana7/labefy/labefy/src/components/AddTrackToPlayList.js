import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Musicas = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
`

const Botao = styled.button`
  margin: 10px;
  width: 70px;
  border-radius: 20px;
  color: white;
  background-color: black;
  &:hover {
    cursor: pointer;
  }
`

const BotaoDeletar = styled.button`
  margin: 10px;
  width: 40px;
  border-radius: 20px;
  color: white;
  background-color: black;
  &:hover {
    cursor: pointer;
  }
`

const AudioPlay = styled.audio`
`

export class AddTrackToPlayList extends React.Component{

    state = {
        tracks:[],
        inputName: "",
        inputArtist: "",
        inputUrl: "",
    }

    componentDidMount(){
        this.getPlaylistTracks();
    }

    componentDidUpdate(){
        this.getPlaylistTracks();
    }

    onChangeName = (event) => {
        this.setState({inputName: event.target.value})
    }

    onChangeArtist = (event) => {
        this.setState({inputArtist: event.target.value})
    }

    onChangeUrl = (event) => {
        this.setState({inputUrl: event.target.value})
    }


    addTrackToPlaylist = () => {
        const body = {
            name: this.state.inputName,
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }
        axios.post(this.props.url+"/" + this.props.idSelected+"/tracks", body, this.props.headers)
        .then((res) =>{
            alert("Musica Adicionada com sucesso")
        })
        .catch((err) => {
            alert(`Erro: ${err.response.data} . Tente mais tarde`)
        })
        this.getPlaylistTracks()
        this.setState({inputName: "", inputArtist: "", inputUrl: ""})
    }

    getPlaylistTracks = () => {
        axios.get(this.props.url+"/" + this.props.idSelected+"/tracks",this.props.headers)
        .then((res) => {
            this.setState({tracks: res.data.result.tracks})
        })
        .catch((err) => {
            alert(`Erro: ${err.response.data} . Tente mais tarde`)
        })
    }

    removeTrackFromPlaylist = (id, name) => {
        let confirmacao = window.confirm(`Tem certeza que deseja deletar a música ${name}?`)
        if(confirmacao){
            axios.delete(this.props.url+"/" + this.props.idSelected+"/tracks/"+id,this.props.headers)
            .then(() => {
                alert("Musica Deletada com sucesso")
            })
            .catch((err) => {
                alert(`Erro: ${err.response.data} . Tente mais tarde`)
            })
        }
        this.getPlaylistTracks()
    }


    render(){

        const tracks = this.state.tracks.map((track) => {
            console.log(track.url)
            return(
                <Musicas key = {track.id}>
                    <AudioPlay controls="controls" x-webkit-airplay="allow" src={track.url}/>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                    <BotaoDeletar onClick = {() => this.removeTrackFromPlaylist(track.id, track.name) }>X</BotaoDeletar>
                </Musicas>
            )
        })

        return(
            <div>
                <hr/>
                <hr/>
                <label>Nome:</label>
                <input type = "text" value = {this.state.inputName} onChange = {this.onChangeName}/>
                <label>Artista:</label>
                <input type = "text" value = {this.state.inputArtist} onChange = {this.onChangeArtist}/>
                <label>Url:</label>
                <input type = "text" value = {this.state.inputUrl} onChange = {this.onChangeUrl}/>
                <Botao onClick= {this.addTrackToPlaylist}>Enviar</Botao>
                {tracks}
            </div>
        )
    }
}
