import React from 'react';
import styled from 'styled-components'


function Container() {
    return (
            <Wrapper>
                <p>Hello World!</p>
            </Wrapper>
    );
}

const Wrapper = styled.section`
    background-color: #f6fcfc;
    border-radius: 10px;
    -moz-box-shadow: #e1e6f8 0 2px 20px;
    -webkit-box-shadow: #e1e6f8 0 2px 20px;
    box-shadow: #e1e6f8 0 2px 20px;
    width: 960px;
    height: 80vh;
`

export default Container;