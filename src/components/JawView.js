import React from 'react'
import styled from 'styled-components'
import EyeIcon from './EyeIcon'




const JawView = ({name, jawImg}) => {
    return (
        <Flex>
            <ViewLabel>{name}</ViewLabel>
            <ViewIcon src={jawImg} />  
            <EyeIcon />
        </Flex>
    )
}

const Flex = styled.div`
display:flex;
flex-direction: column;
text-align: center; 
align-items: center;
justify-content: center;
width: 25%;
`
const ViewLabel = styled.p`
font-size: 14px;
    color: #324858;
`
const ViewIcon = styled.img`
    width: 43px;
    height: 40px;
    display: block;
`

export default JawView;