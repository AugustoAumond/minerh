import styled from 'styled-components';
import {IoMdInformationCircle} from 'react-icons/io';

function Title(){ 

    return (
        <Div>
            <DivTitle>
                <DivIcon>
                    Barras
                    
                    <svg id='iconinformation' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0.1875C3.69219 0.1875 0.1875 3.69219 0.1875 8C0.1875 12.3078 3.69219 15.8125 8 15.8125C12.3078 15.8125 15.8125 12.3078 15.8125 8C15.8125 3.69219 12.3078 0.1875 8 0.1875ZM8 3.39062C8.20087 3.39062 8.39723 3.45019 8.56425 3.56179C8.73127 3.67339 8.86145 3.83201 8.93832 4.01759C9.01519 4.20317 9.0353 4.40738 8.99611 4.60439C8.95692 4.8014 8.86019 4.98237 8.71815 5.12441C8.57612 5.26644 8.39515 5.36317 8.19814 5.40236C8.00113 5.44155 7.79692 5.42144 7.61134 5.34457C7.42576 5.26769 7.26714 5.13752 7.15554 4.9705C7.04394 4.80348 6.98438 4.60712 6.98438 4.40625C6.98438 4.13689 7.09138 3.87856 7.28184 3.68809C7.47231 3.49763 7.73064 3.39062 8 3.39062ZM10.5 12.2188H5.8125V10.9688H7.53125V7.53125H6.28125V6.28125H8.78125V10.9688H10.5V12.2188Z" fill="#19D7AA"/>
                    </svg>
                </DivIcon>   

                <DivBars>
                    <svg id='' width="21.88" height="19.85" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7188 0.375H0.28125C0.160937 0.375 0.0625 0.473437 0.0625 0.59375V2.34375C0.0625 2.46406 0.160937 2.5625 0.28125 2.5625H21.7188C21.8391 2.5625 21.9375 2.46406 21.9375 2.34375V0.59375C21.9375 0.473437 21.8391 0.375 21.7188 0.375ZM21.7188 17.4375H0.28125C0.160937 17.4375 0.0625 17.5359 0.0625 17.6562V19.4062C0.0625 19.5266 0.160937 19.625 0.28125 19.625H21.7188C21.8391 19.625 21.9375 19.5266 21.9375 19.4062V17.6562C21.9375 17.5359 21.8391 17.4375 21.7188 17.4375ZM21.7188 8.90625H0.28125C0.160937 8.90625 0.0625 9.00469 0.0625 9.125V10.875C0.0625 10.9953 0.160937 11.0938 0.28125 11.0938H21.7188C21.8391 11.0938 21.9375 10.9953 21.9375 10.875V9.125C21.9375 9.00469 21.8391 8.90625 21.7188 8.90625Z" fill="#5D405C"/>
                    </svg>
                </DivBars>       
            </DivTitle>
        </Div>
    )
}
export default Title;

const Div = styled.div`
position: relative;
width: 89%;
left: 23px;
top: 20px;

`

const DivTitle = styled.div`
position: relative;
top: 6px;
display: flex;
align-items: center;
justify-content: space-between;
`

const DivIcon = styled.div `
font-family: "Open Sans";
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #5D405C;

    #iconinformation {
        position: relative;
        top: 5px;
        left 10px;
        width: 19px;
        height: 19px;
        color: #19D7AA;
        font-size: 21px;
        cursor: pointer;
    }
`

const DivBars = styled.div`
cursor: pointer;
`