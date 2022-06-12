import styled from 'styled-components';


import Title from './divcolumn/title/Title';
import Column from './divcolumn/column/Column';
import Scatter from './divscatter/scatter/Scatter';


function Graphics() {

  return (
    <Div>
        <Title/>
        
        <Column/>

        <Scatter/>
    </Div>
  );
}
export default Graphics;

const Div = styled.div`
position: relative;
display: flex;
width: 100%;
height: 359px;
left: 28px;
top: 19px;
`
