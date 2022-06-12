import styled from 'styled-components';

import Title from './title/Title';
import Scatter from './scatter/Scatter';

function DivColumn() {

  return (
    <Div>
        <Title/>
        
        <Scatter/>
    </Div>
  );
}
export default DivColumn;

const Div = styled.div`
width: 100%;

    @media (max-width: 850px){
        margin-top: 15px;
    }
`
