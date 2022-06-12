import styled from 'styled-components';


import Title from './title/Title';
import Column from './column/Column';


function Graphics() {

  return (
    <Div>
        <Title/>
        
        <Column/>
    </Div>
  );
}
export default Graphics;

const Div = styled.div`
position: relative;
width: 48%;
height: 359px;
border: solid;
left: 28px;
top: 98px;
`
