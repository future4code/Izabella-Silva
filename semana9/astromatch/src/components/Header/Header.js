import React from 'react'
import astromatch from '../../img/astromatch.png'
import matches from '../../img/matches.svg'
import outMatches from '../../img/outMatches.svg'
import {ConteinerHeader, IconsMatches, IconAstroMatch, HiddenIcon} from './styled'

const Header = (props) => {
    return(<ConteinerHeader>
        {props.changeScreen === "matches"? <IconsMatches onClick={props.goToHome} src = {outMatches} alt = "icon-outMaches"/> :
        <HiddenIcon></HiddenIcon> }

        <IconAstroMatch src={astromatch} alt="icon-astromach"/>

        {props.changeScreen === "home" ? <IconsMatches onClick={props.goToMatches} src={matches} alt="icon-matches"/>:
        <HiddenIcon></HiddenIcon>}
        
    </ConteinerHeader>
    );
}

export default Header;