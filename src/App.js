import './App.css';
import Header from './components/Header';
import { ThemeProvider } from "styled-components";
import Card from './components/Card';
import { GlobalStyles } from './components/styles/Global.styled';
import Footer from './components/Footer';

const style = {
  colors:{
    header:"#fff",
    body:"#eee",
    footer:"#8A1c4a",
  },
  margins:{},
  "max-width":"1000px",
  width:"95vw",
  responsive:"768px",
}

function App() {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles/>
      <Header/>
      <Card/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
