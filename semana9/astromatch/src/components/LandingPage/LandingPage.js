import React, { useState } from 'react'
import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import { Container } from './styled'

const LandingPage = () => {
  const[changeScreen, setChangeScreen] = useState("home")

  // const onClickChangeScreen = (screen) => {
  //   screen === "home" ? setChangeScreen("matches") : setChangeScreen("home")
  // }

  const goToHome = () => {
    setChangeScreen("home")
  }

  const goToMatches = () => {
    setChangeScreen("matches")
  }

  return (<Container>
      {/* <Header onClickChangeScreen={onClickChangeScreen} /> */}
      <Header goToHome={goToHome} goToMatches = {goToMatches} changeScreen={changeScreen} />
      <Body changeScreen={changeScreen} />
    </Container>
  );
}

export default LandingPage;