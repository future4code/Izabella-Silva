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

	render(){
		const postComentarios = this.props.comentarios.filter((comentario) => {
			return comentario.comentario !== ""
		}).map((comentario, index) => {
			return(
				<p key={index}>
				{comentario.comentario}
				</p>
			)
		})

		return <div>
			<CommentContainer>

				<InputComentario
					placeholder={'Comentário'}
					value={this.props.valorInputComentario}
					onChange={this.props.onChangeComentario}
				/>
				<button onClick={this.props.adicionarComentario}>Enviar</button>
			</CommentContainer>
			
			<Comentarios>
				{postComentarios}
			</Comentarios>
		</div>
	}
}
