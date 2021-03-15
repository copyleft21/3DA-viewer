import React from 'react'
import styled from 'styled-components'
import play from '../assets/imgs/player-btns/play-button.svg'; 
import pause from '../assets/imgs/player-btns/pause.svg'; 
import forward from '../assets/imgs/player-btns/fast-forward.svg'; 
import rewind from '../assets/imgs/player-btns/rewind.svg'; 
import end from '../assets/imgs/player-btns/next.svg'; 
import start from '../assets/imgs/player-btns/back.svg'; 



import PlayerBtn from './PlayerBtn';


const playerIcons = {
    play,
    pause,
    forward,
    rewind,
    end,
    start
}

const PlayerButtons = ({onPlayClick, playing, seekToStart, seekToEnd, seekOneSecBackward, seekOneSecForward}) => {
    return (
        <Flex>
           <PlayerBtn type="start" seekToStart={seekToStart} playerIcn={playerIcons.start}  />
           <PlayerBtn type="rewind" seekOneSecBackward={seekOneSecBackward} playerIcn={playerIcons.rewind}  />
           {playing ? <PlayerBtn type="play" togglePlay={onPlayClick} playerIcn={playerIcons.pause} /> : <PlayerBtn type="play" togglePlay={onPlayClick} playerIcn={playerIcons.play} /> }
           <PlayerBtn type="forward" seekOneSecForward={seekOneSecForward} playerIcn={playerIcons.forward}  />
           <PlayerBtn type="end" seekToEnd={seekToEnd} playerIcn={playerIcons.end}  />

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