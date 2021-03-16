import React from 'react';
import styled from 'styled-components';
import logo from '../assets/imgs/logo.png'

function Logo() {
    return (
        <Wrapper>
        <LogoImage src={logo} alt="3DA Logo" />
        {/* <Title>3DA smile analysis</Title> */}
        </Wrapper>
    )
}

const Title = styled.h1`
    color: #324858;
    font-size: 100%;
    text-transform: uppercase;
`

const LogoImage = styled.img`
width: 150px
`
const Wrapper = styled.div`
margin : 20px 0;
`

export default Logo;