import {Header} from './components/Header/Header'
import {HomePage} from './components/HomePage/HomePage'
import {Footer} from './components/Footer/Footer'
import { BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

const ContainerPage = styled.div`
  height: 100vh;
`

export default function App() {

  return (
    <ContainerPage>
      <BrowserRouter>
        <Header/>
        <HomePage/>
        <Footer/>
      </BrowserRouter>;
    </ContainerPage>
  )
}