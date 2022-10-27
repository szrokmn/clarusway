import './App.css';
import Header from './components/Header';
import { ThemeProvider } from "styled-components";

const style = {
  colors:{
    header:"#fff",
    body:"fff",
    footer:"#8A1c4a",
  },
  margins:{},
  responsive:"768px",
}

function App() {
  return (
    <ThemeProvider theme={style}>
      <Header/>
    </ThemeProvider>
  );
}

export default App;
