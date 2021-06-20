import React from 'react'
import axios from 'axios'

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
                <div key = {track.id}>
                    {track.name}
                    {track.artist}
                    <audio controls="controls" class="video-stream" x-webkit-airplay="allow" src={track.url}/>
                    {/* <iframe title = {track.name} width="420" height="315"src={track.url}/>
                    <button onClick = {() => this.removeTrackFromPlaylist(track.id, track.name) }>X</button> */}
                </div>
            )
        })

        return(
            <div> 
                <label>Nome:</label>
                <input type = "text" value = {this.state.inputName} onChange = {this.onChangeName}/>
                <label>Artista:</label>
                <input type = "text" value = {this.state.inputArtist} onChange = {this.onChangeArtist}/>
                <label>Url:</label>
                <input type = "text" value = {this.state.inputUrl} onChange = {this.onChangeUrl}/>
                <button onClick= {this.addTrackToPlaylist}>Enviar</button>
                {tracks}
            </div>
        )
    }
}
