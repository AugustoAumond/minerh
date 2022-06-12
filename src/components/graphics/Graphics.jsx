import styled from 'styled-components';

import DivColumn from './divcolumn/DivColumn';
import DivScatter from './divscatter/DivScatter';


function Graphics() {

  return (
    <Div>
        <DivColumn/>

        <DivScatter/>
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
top: 10px;

    @media (max-width: 850px){
        flex-direction: column;
    }
`
