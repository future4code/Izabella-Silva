import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import styled from 'styled-components';

const ConteinerGeral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (<ConteinerGeral>
      <LandingPage/>
    </ConteinerGeral>
  );
}

export default App;
