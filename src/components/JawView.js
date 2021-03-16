import React from 'react'
import styled from 'styled-components'
import EyeIcon from './EyeIcon'




const JawView = ({name, jawImg, upperCount, lowerCount}) => {
    return (
        <Flex>
            {upperCount ? <ViewLabel>{upperCount} {name} </ViewLabel> : null}
            {lowerCount ? <ViewLabel>{lowerCount} {name} </ViewLabel> : null}
            <ViewIcon src={jawImg} />  
            {/* <EyeIcon /> */}
        </Flex>
    )
}

const Flex = styled.div`
display:flex;
flex-direction: column;
text-align: center; 
align-items: center;
justify-content: center;
margin: 0 20px;
`
const ViewLabel = styled.p`
font-size: 14px;
    color: #324858;
    font-weight: bold;
`
const ViewIcon = styled.img`
    width: 43px;
    height: 40px;
    display: block;
`

export default JawView;