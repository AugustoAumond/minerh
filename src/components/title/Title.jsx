import styled from 'styled-components';

function Title (){

    return (
        <DivTitle>
            <Div>
                <div className="dash">
                    Dashboard
                </div>

                <div className="teste">
                    Desafio Técnico Frontend
                </div>  
            </Div>
        </DivTitle>
    )
}
export default Title;

const DivTitle = styled.div`
position: relative;
display: flex;
max-width: 1440px;
height: 100px;
margin: 0 auto;
`

const Div = styled.div`
position: relative;
height: 34px;
left: 28px;
top: 33px;

    .dash {
        max-width: 161px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        color: #5D405C;
    }

    .teste {
        max-width: 183px;
        height: 17px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #828282;
    }
`