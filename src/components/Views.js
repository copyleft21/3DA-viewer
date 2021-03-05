import React from 'react'
import styled from 'styled-components'
import ViewButton from './ViewButton'
/* disabled Icon */
import frontDisabled from '../assets/imgs/views/aligner-front.svg';
import leftDisabled from '../assets/imgs/views/aligner-left.svg';
import rightDisabled from '../assets/imgs/views/aligner-right.svg';
import upperDisabled from '../assets/imgs/views/aligner-upper.svg';
import lowerDisabled from '../assets/imgs/views/aligner-lower.svg';
/* Active Icon */
import frontActive from '../assets/imgs/views/aligner-front-active.svg'
import leftActive from '../assets/imgs/views/aligner-left-active.svg';
import rightActive from '../assets/imgs/views/aligner-right-active.svg';
import upperActive from '../assets/imgs/views/aligner-upper-active.svg';
import lowerActive from '../assets/imgs/views/aligner-lower-active.svg'; 

const disabledIcons = {
    frontDisabled,
    leftDisabled,
    rightDisabled,
    upperDisabled,
    lowerDisabled
}

const activeIcons = {
    frontActive,
    leftActive,
    rightActive,
    upperActive,
    lowerActive
}

const Views = () => {
    return (
        <ViewFlex>
            <ViewButton activeIcon={activeIcons.upperActive} disabledIcon={disabledIcons.upperDisabled} name="Upper" />
            <ViewButton activeIcon={activeIcons.leftActive} disabledIcon={disabledIcons.leftDisabled} name="Left" />
            <ViewButton activeIcon={activeIcons.frontActive} disabledIcon={disabledIcons.frontDisabled} name="Front" />
            <ViewButton activeIcon={activeIcons.rightActive} disabledIcon={disabledIcons.rightDisabled} name="Right" />
            <ViewButton activeIcon={activeIcons.lowerActive} disabledIcon={disabledIcons.lowerDisabled} name="Lower" />
        </ViewFlex>
    )
}

const ViewFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
align-items: center;
margin-top: 2rem;
margin-bottom: 2rem;
@media (max-width: 768px) {
        max-width: 100vw;
        justify-content: space-evenly;
  }
`

export default Views;