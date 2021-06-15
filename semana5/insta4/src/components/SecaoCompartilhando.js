import React, {Component} from 'react'
import styled from 'styled-components'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import whatsapp from '../img/whatsapp.png'

const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const IconeRedesSociais = styled.img`
    width: 10%;
    margin: 5px;
`

export class SecaoCompartilhando extends Component {
    state = {
        icones: [
            {
            icone: facebook,
            name: 'facebook'
            },
            {
            icone: instagram,
            name: 'instagram'
            },
            {
            icone: twitter,
            name: 'twitter'
            },
            {
            icone: whatsapp,
            name: 'whatsapp'
            }            
        ]
    }

    onClickIcons = (nomeIcone) => {
        console.log(`Compartilhado no ${nomeIcone}`)
    }

	render(){
        const iconeRedesSociais = this.state.icones.map((icone, index) => {
            return(
                <IconeRedesSociais key={index}
				src= {icone.icone}
                onClick = {() => this.onClickIcons(icone.name)}
			    />
            )
        })

		return <ShareContainer>
			{iconeRedesSociais}
		</ShareContainer>
    }
}