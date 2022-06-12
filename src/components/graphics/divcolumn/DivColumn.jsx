import styled from 'styled-components';

import Title from './title/Title';
import Column from './column/Column';

function DivColumn() {

  return (
    <Div>
        <Title/>
        
        <Column/>
    </Div>
  );
}
export default DivColumn;

const Div = styled.div`
position: relative;
width: 100%;
margin-right: 24px;

  @media (max-width: 850px){
    right: 24px;
  }
`

