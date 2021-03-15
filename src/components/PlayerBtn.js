import React from 'react'
import styled from 'styled-components'


const PlayerBtn = ({playerIcn, togglePlay, type, seekToStart, seekToEnd, seekOneSecBackward, seekOneSecForward}) => {
    return (
        <div>
        <Flex onClick ={() => {
            if (type === 'start') {
                seekToStart()
                console.log('I love you start');
            } else if (type === 'play') {
                console.log('I love you play');
                togglePlay();
            } else if (type === 'end') {
                seekToEnd()
                console.log('I love you end');
            } else if (type === 'rewind') {
                seekOneSecBackward()
                console.log('I love you rewind');
            } else if (type === 'forward') {
                seekOneSecForward()
                console.log('I love you forward');
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
    margin-left: 10px;
    margin-right: 10px;
    filter: invert(38%) sepia(81%) saturate(4610%) hue-rotate(189deg) brightness(94%) contrast(101%);
`

export default PlayerBtn;