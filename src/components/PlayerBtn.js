import React from 'react'
import styled from 'styled-components'


const PlayerBtn = ({playerIcn, togglePlay}) => {
    return (
        <Flex onClick ={() => {
            console.log('I love you');
            togglePlay();
            }}>
            <ViewIcon src={playerIcn} />  
        </Flex>
    )
}

const Flex = styled.div`
display:flex;
flex-direction: column;
text-align: center; 
align-items: center;
justify-content: center;
cursor: pointer;
//width: 25%;
`

const ViewIcon = styled.img`
    width: 25px;
    height: 40px;
    display: block;
    margin-left: 10px;
    margin-right: 10px;
    filter: invert(38%) sepia(81%) saturate(4610%) hue-rotate(189deg) brightness(94%) contrast(101%);
`

export default PlayerBtn;