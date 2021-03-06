import styled from 'styled-components';

function Filter (){

    return (
        <DivFilter>
            <svg id='filter' width="13.32" height="11.99" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333313 0.333344V1.08001C0.334565 1.16793 0.370508 1.2518 0.433313 1.31334L5.28665 6.22001C5.34945 6.28155 5.38539 6.36542 5.38665 6.45334V11.0467C5.38652 11.1091 5.40396 11.1704 5.43696 11.2234C5.46996 11.2765 5.51721 11.3192 5.57331 11.3467L8.20665 12.2867C8.25752 12.3116 8.3139 12.3232 8.37047 12.3202C8.42705 12.3173 8.48194 12.3 8.52998 12.27C8.57802 12.24 8.61761 12.1982 8.64502 12.1486C8.67243 12.0991 8.68676 12.0433 8.68665 11.9867V6.39334C8.69587 6.30324 8.73872 6.21992 8.80665 6.16001L13.5533 1.32668C13.6161 1.26513 13.6521 1.18127 13.6533 1.09334V0.333344H0.333313Z" fill="white"/>
            </svg>

            <p>Filter</p>

        </DivFilter>
    )
}
export default Filter;

const DivFilter = styled.button`
position: relative;
right: 24px;
display: flex;
width: 100px;
height: 40px;
background: #5D405C;
border-radius: 10px;
align-items: center;
justify-content: center;
cursor: pointer;
border: white;

    p {
        font-family: 'Open-sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin: 10px;
        color: #F7F7F7;
    }
`