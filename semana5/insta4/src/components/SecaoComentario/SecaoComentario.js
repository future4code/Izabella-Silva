import React, {Component} from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const Comentarios = styled.p`
	max-width: 100%
`

export class SecaoComentario extends Component {
	state = {
		comentarios: [
			{
				comentario: ""
			}
		],
		valorInputComentario:''
	}

	onChangeComentario = (event) => {
		this.setState({valorInputComentario: event.target.value})
	}

	adicionarComentario = () =>{
		const novoComentario = {
			comentario: this.state.valorInputComentario
		}
		
		const novosComentarios = [...this.state.comentarios, novoComentario]

		console.log(novosComentarios)
		
		this.setState({comentarios: novosComentarios})

		this.props.aoEnviar()

	}

	render(){

		const postComentarios = this.state.comentarios.filter((comentario) => {
			
			return comentario.comentario !== ""
		}).map((comentario, index) => {
			return(
				<p key={index}>
				{comentario.comentario}
				</p>
			)
		})

		console.log(postComentarios)

		return <CommentContainer>

			<Comentarios>
				{postComentarios}
			</Comentarios>
			
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.adicionarComentario}>Enviar</button>
		</CommentContainer>
	}
}
