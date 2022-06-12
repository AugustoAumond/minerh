import styled from 'styled-components';

import Title from './title/Title';
import Filter from './filter/Filter';

function DivTitle (){

    return (
        <DTitle>
            <Title/>

            <Filter/>  
        </DTitle>
    )
}
export default DivTitle;

const DTitle = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1440px;
height: 100px;
margin: 0 auto;
`
