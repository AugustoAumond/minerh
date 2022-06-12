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
width: 100%;
`

