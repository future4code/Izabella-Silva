import {Header} from './components/Header/Header'
import {HomePage} from './components/HomePage/HomePage'
import {Footer} from './components/Footer/Footer'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

export default function App() {

  return <BrowserRouter>
    <Header/>
    <HomePage/>
    <Footer/>
  </BrowserRouter>;
}