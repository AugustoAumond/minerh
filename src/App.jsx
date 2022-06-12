import styled from 'styled-components';

import './App.css'

import Header from './components/header/Header';
import DivTitle from './components/title/DivTitle';
import Graphics from './components/graphics/Graphics';

function App() {


  return (
    <DivApp>
      <Header/>
      
      <DivTitle/>

      <Graphics/>
    </DivApp>
  );
}
export default App;

const DivApp = styled.div` 
max-width: 1440px;
height: 650px;
margin: 0 auto;
border-radius: 25px;
border: solid 1px #80808078;

  @media (max-width: 850px){
    height: 1024px;
  }
`