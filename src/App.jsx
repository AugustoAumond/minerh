import styled from 'styled-components';
import './App.css'

import Header from './components/header/Header';
import Title from './components/title/Title';
import Graphics from './components/graphics/Graphics';

function App() {


  return (
    <DivApp>

      <Header/>
      
      <Title/>

      <Graphics/>

    </DivApp>
  );
}
export default App;

const DivApp = styled.div` 
max-width: 1440px;
height: 1024px;
border: solid;
`