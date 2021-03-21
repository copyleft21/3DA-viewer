import React from 'react'
import styled from 'styled-components'


const PlayerBtn = ({playerIcn, togglePlay, type, seekToStart, seekToEnd, seekOneSecBackward, seekOneSecForward}) => {
    return (
        <div>
        <Flex onClick ={() => {
            if (type === 'start') {
                seekToStart()
            } else if (type === 'play') {
                togglePlay();
            } else if (type === 'end') {
                seekToEnd()   
            } else if (type === 'rewind') {
                seekOneSecBackward()  
            } else if (type === 'forward') {
                seekOneSecForward()  
            }
            }}>
            <ViewIcon src={playerIcn} />  
        </Flex>
        </div>
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
    margin-left: 20px;
    margin-right: 20px;
    filter: invert(47%) sepia(72%) saturate(2534%) hue-rotate(165deg) brightness(102%) contrast(101%);
    /* filter: invert(38%) sepia(81%) saturate(4610%) hue-rotate(189deg) brightness(94%) contrast(101%); */
`

export default PlayerBtn;