import React from 'react';
import styled from 'styled-components'


function Container(props) {
    return (
            <Wrapper>
      {props.children}
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
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
    @media (max-width: 960px) {
        width: 100vw;
        height: auto;
  }
`

export default Container;