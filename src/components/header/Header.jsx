import styled from 'styled-components';

function Header (){

    return (
        <DivHeader>
            <img src='https://static.wixstatic.com/media/3e6b7d_96833c66f7c34b84b711feb0ad4ef0e4~mv2.png/v1/fill/w_978,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/IMG_1771_PNG.png' alt="" />

        </DivHeader>
    )
}
export default Header;

const DivHeader = styled.header`
position: relative;
display: flex;
align-items: center;
margin: 0 auto;
max-width: 1440px;
height: 91px;
border-radius: 20px 20px 1px 1px;
background: radial-gradient(circle farthest-corner at 50% 50%, #5C3F5C 0%, #2E202E 47.34375070547685%);

    img {
        width: 100px;
        position: relative;
        left: 25px;
    }
`
