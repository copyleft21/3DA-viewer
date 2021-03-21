import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import sanityClient from "../client.js";
import Container from './Container';
import ReactPlayer from 'react-player'
import JawViewBox from './JawViewsBox.js';
import Logo from './Logo';
import Views from './Views.js';
import PlayerButtons from './PlayerButtons.js';
import PatientInfo from './PatientInfo.js';


function SinglePlan() {
    const [planData, setplanData] = useState(null);
    const { slug } = useParams();
    const [view, setView] = useState('Front');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTab, setCurrentTab] = useState('videos')
    const player = useRef();
    useEffect(() => {
      sanityClient
        .fetch(
          `*[slug.current == $slug]{
            caseNum,
            patientName,
            patientSheet,
            upperCount,
            lowerCount,
            sequence {
              front {
                    asset->{url}
                    },
              left{
                    asset->{url}
                    },
              right{
                    asset->{url}
                    },
              upper{
                    asset->{url}
                    },
              lower{
                    asset->{url}
                    },
            },
            beforeAfter {
              front {
                asset->{url}
                },
          left{
                asset->{url}
                },
          right{
                asset->{url}
                },
          upper{
                asset->{url}
                },
          lower{
                asset->{url}
                },
            },
                        slug
                     }`,
          { slug }
        )
        .then((data) => setplanData(data[0]))
        .catch(console.error);

    }, [slug]);
  
    if (!planData) return <div>Loading...</div>;
    
    // Change the Tab function

    const tabChanger = (tab) => {
      setCurrentTab(tab)
    }

    // Change the View function
    const viewChanger = (viewName) => {
      setView(viewName)
    }

    // Aligners Count
    const upperAligners = planData.upperCount;
    const lowerAligners = planData.lowerCount;

    // Patients Information
    const patientName = planData.patientName;
    const caseNum = planData.caseNum;
    const patientSheet = planData.patientSheet;

    // Video Existence Checking
    let lowerVideo , upperVideo , rightVideo , leftVideo

    if (planData.sequence.lower?.asset.url) {
       lowerVideo = true;
    } else {
       lowerVideo = false
    }
    if (planData.sequence.upper?.asset.url) {
      upperVideo = true;
    } else {
      upperVideo = false;
    }
    if (planData.sequence.right?.asset.url) {
      rightVideo = true;
    } else {
      rightVideo = false;
    }
    if (planData.sequence.left?.asset.url) {
      leftVideo = true;
    } else {
      leftVideo = false;
    }

    let videoSrc;
    
    if (view === 'Front') {
      videoSrc = planData.sequence.front.asset.url;
    } else if (view === 'Right') {
      videoSrc = planData.sequence.right.asset.url;
    } else if (view === 'Left') {
      videoSrc = planData.sequence.left.asset.url;
    } else if (view === 'Upper') {
      videoSrc = planData.sequence.upper.asset.url;
    } else if (view === 'Lower') {
      videoSrc = planData.sequence.lower.asset.url;
    }

    // Video player Buttons functions
    const togglePlay = () => {
      setIsPlaying(!isPlaying)
    }

    const seekToStart = () => {
      setIsPlaying(false)
      player.current.seekTo(0);
    }
    const seekToEnd = () => {
      setIsPlaying(false)
      player.current.seekTo(1, 'fraction');
    }

    const seekOneSecForward = () => {
      setIsPlaying(false)
      const currentTime = player.current.getCurrentTime()
      player.current.seekTo(currentTime + 1 , 'seconds');
    }

    const seekOneSecBackward = () => {
      setIsPlaying(false)
      const currentTime = player.current.getCurrentTime()
      player.current.seekTo(currentTime - 1, 'seconds');
    } 

    // JSX !!!

    return (
    <Content>
      <Logo />
      <Container>
      <PatientInfo name={patientName} caseNum={caseNum}  patientSheet={patientSheet} />
{/* 
      <Tabs currentTab={currentTab} tabChanger={tabChanger} /> */}

      <Views upperVideo={upperVideo} lowerVideo={lowerVideo} leftVideo={leftVideo} rightVideo={rightVideo} currentView={view} viewChanger={viewChanger} />
      <VideoContainer>
        <ReactPlayer
         ref={player}
         playing={isPlaying} 
         controls={false} 
         onEnded={() => setIsPlaying(false)} 
         url={videoSrc} 
         width="100%" height="100%"
          />
      </VideoContainer>

      <PlayerButtons 
      onPlayClick={togglePlay}
      playing={isPlaying}
      seekToStart={seekToStart}
      seekToEnd={seekToEnd}
      seekOneSecForward={seekOneSecForward}
      seekOneSecBackward={seekOneSecBackward}
      />
      <JawViewBox upper={upperAligners} lower={lowerAligners} />
      </Container>
    </Content>
    );
}


const VideoContainer = styled.div`
height: 400px;
width: 70%;
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
        width: 100%;
        height: auto;
  }
`

const Content = styled.div`
  text-align: center;
  /* background-color: #e5e5e5; */
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: black;
`


export default SinglePlan;