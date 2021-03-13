import React from 'react'
import styled from 'styled-components'
import play from '../assets/imgs/player-btns/play-button.svg'; 
import pause from '../assets/imgs/player-btns/pause.svg'; 
import forward from '../assets/imgs/player-btns/fast-forward.svg'; 
import rewind from '../assets/imgs/player-btns/rewind.svg'; 


import PlayerBtn from './PlayerBtn';


const playerIcons = {
    play,
    pause,
    forward,
    rewind,
}

const PlayerButtons = () => {
    return (
        <Flex>
           <PlayerBtn playerIcn={playerIcons.rewind}  />
           <PlayerBtn playerIcn={playerIcons.play} />
           <PlayerBtn playerIcn={playerIcons.forward}  />
        </Flex>
    )
}

const Flex = styled.div`
border-radius: 10px;
/*     margin-left: .4vw;
    margin-right: .4vw; */
padding-left: .4vw;
padding-right: .4vw;
background-color: #e0f0f8;
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
margin-bottom: 2rem;
margin-top: 2rem;
`

export default PlayerButtons;