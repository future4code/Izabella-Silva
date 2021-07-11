import React from 'react'
import {Container} from './styled'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'
import twitter from '../../img/twitter.png'

export const Footer = () => {
    return (
        <Container>
            <p>LabeX</p>
            <div>
                <a href="https://www.facebook.com/"><img src={facebook} alt={"facebook"}/></a>
                <a href="https://www.instagram.com/"><img src={instagram} alt={"instagram"}/></a>
                <a href="https://www.linkedin.com"><img src={linkedin} alt={"linkedin"}/></a>
                <a href="https://twitter.com/twitter"><img src={twitter} alt={"twitter"}/></a>
            </div>
        </Container>
    )
}