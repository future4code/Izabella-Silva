import  Router  from "./Router/Router"
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/themes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
