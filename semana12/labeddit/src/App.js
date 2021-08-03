import  Router  from "./Router/Router"
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/themes";
import {useState} from 'react'
import {ContainerPage} from './styled'


const App = () => {
  const token = localStorage.getItem("token")
  const[rightButtonText, setRightButtonText ]= useState(token ? "Logout" : "Login")

  return (
    <ContainerPage>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
          <Router setRightButtonText={setRightButtonText}/>
        </BrowserRouter>
      </ThemeProvider>
    </ContainerPage>
  );
}

export default App;
