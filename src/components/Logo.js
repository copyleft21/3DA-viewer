import React from 'react';
import styled from 'styled-components';
// import logo from '../assets/imgs/logo.png'

function Logo({logo}) {
    return (
        <Wrapper>
            {logo ? <LogoImage src={logo} alt="3DA Logo" /> : null }
        {/* <Title>3DA smile analysis</Title> */}
        </Wrapper>
    )
}

const LogoImage = styled.img`
width: 250px
`
const Wrapper = styled.div`
margin : 20px 0;
`

export default Logo;