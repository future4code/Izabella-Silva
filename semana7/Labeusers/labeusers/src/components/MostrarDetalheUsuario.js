import React from 'react'
import axios from 'axios'

export class MostrarDetalheUsuario extends React.Component{

    // state={
    //     user: []
    // }

    // getUserById = () =>{
    //     console.log(this.props.id)
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.id}`
    //     const headers = {
    //         headers:{
    //             Authorization: "izabella-brandao-molina"
    //         }
    //     }
    //     axios
    //     .get(url,headers)
    //     .then((res) =>{
    //         console.log("res Detalhe Usuario", res.data)
    //         this.setState({user: res.data})
    //     })
    //     .catch((err) =>{
    //         alert("tente Novamente")
    //     })
    // }

    render(){
        console.log(this.props.users)

        return(
            <div>
                <button onClick={this.props.voltaParaLista}>ir pra Lista</button>
                {/* {this.getUserById()} */}
                <h2>Detalhes do Usuario</h2>
                <div>
                <p>Nome: {this.props.user.name}</p>
                <p>Email: {this.props.user.email}</p>
                {/* <p>Nome: {this.state.user.name}</p>
                <p>Email: {this.state.user.email}</p> */}
            </div>
            </div>
        );
    }
}