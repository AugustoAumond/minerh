import styled from 'styled-components';
import {IoMdInformationCircle} from 'react-icons/io';
import {FaBars} from 'react-icons/fa';

function Title(){ 

    return (
        <Div>
            <DivTitle>
                <div>
                    Barras

                    <IoMdInformationCircle id='iconinformation'/>
                </div>

                <div>
                    <FaBars id='iconbars'/>
                </div>
                
            </DivTitle>

        </Div>
    )
}
export default Title;

const Div = styled.div`
position: relative;
left: 23px;
top: 20px;

`

const DivTitle = styled.div`
position: relative;
top: 6px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #5D405C;

    #iconinformation {
        position: relative;
        left 10px;
        color: #19D7AA;
        font-size: 21px;
    }

`