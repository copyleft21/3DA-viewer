import React from 'react'
import styled from 'styled-components'
import soon from '../assets/imgs/soon.png'

const Soon = () => {
    return    (      
        <Content>
        <SoonImage src={soon}></SoonImage>
        </Content>   
    )
}


const SoonImage  = styled.img`
width: 40%;
`

const Content = styled.div`
  text-align: center;
  background-color: rgb(246, 252, 252);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export default Soon;