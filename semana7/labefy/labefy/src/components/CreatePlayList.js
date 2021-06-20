import React from 'react'
import axios from 'axios'
import {AddTrackToPlayList} from './AddTrackToPlayList'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers ={
    headers:{
        Authorization: "izabella-silva-molina"
    }
}

export class CreatePlayList extends React.Component{
    state = {
        playlist:[],
        inputPlayList:"",
        idSelected: "",
        viewTracks: false
    }

    componentDidMount(){
        this.getAllPlayLists()
    }

    onChangePlayList = (event) => {
        this.setState({inputPlayList: event.target.value})
    }


    creatPlayList = () => {
        const body = {
            name: this.state.inputPlayList
        }
        axios.post(url,body, headers)
        .then((res) => {
            console.log("res create list", res.data)
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    getAllPlayLists = () => {
        axios
        .get(url,headers)
        .then((res) => {
            this.setState({playlist: res.data.result.list})
        })
        .catch((err) => {
            alert(err.response.data)
        })  
    }

    viewTracks = (id) => {
        if(this.state.viewTracks === true){
            this.setState({viewTracks: false})
        }else{
            this.setState({viewTracks: true})
        }
        this.setState({idSelected: id})
    }

    deletePlaylist = (id, name) => {
        let confirmacao = window.confirm(`Tem certeza que deseja deletar a play List ${name}?`)
        if(confirmacao){
            axios.delete(url+"/"+id, headers)
            .then((res) => {
                alert("Play List Deletada com Sucesso!")
            })
            .catch((err) => {
                alert(`Erro: ${err.response.data} . Tente mais tarde`)
            })
        }
        this.getAllPlayLists()
    }

    render(){
        const playLists = this.state.playlist.map((playList) =>{
            return(
                <li key={playList.id}>
                    <spam>{playList.name}</spam>
                    <button onClick={() => this.viewTracks(playList.id)}>PlayLists</button>
                    <button onClick = {() => this.deletePlaylist(playList.id,playList.name )}>X</button>
                </li>
            )
        })
        return(
            <div>
                <div>
                    <button onClick={this.props.onClickEnter}>Sair</button>
                    <label>Insira o nome da play list:</label>
                    <input type="text" value={this.state.inputPlayList} onChange={this.onChangePlayList}/>
                    <button onClick={this.creatPlayList}>Enviar</button>
                    {playLists}
                </div>
                <div>
                    {this.state.viewTracks && <AddTrackToPlayList idSelected = {this.state.idSelected} headers = {headers} url={url}/>}
                </div>
            </div>
        )
    }
}