import styled from 'styled-components';

function Title (){

    return (
        <DivTitle>
            <div className="dash">
                Dashboard
            </div>

            <div className="teste">
                Desafio Técnico Frontend
            </div>  
        </DivTitle>
    )
}
export default Title;

const DivTitle = styled.div`
position: relative;
height: 34px;
left: 28px;

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