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


const Views = ({currentView, viewChanger}) => {
        if (currentView === 'Upper') {
            return (
                <ViewFlex>
                <ViewButton key='upper' isActive activeIcon={activeIcons.upperActive} disabledIcon={disabledIcons.upperDisabled} name="Upper" viewChanger={viewChanger} />
                <ViewButton key='left' activeIcon={activeIcons.leftActive} disabledIcon={disabledIcons.leftDisabled} name="Left" viewChanger={viewChanger} />
                <ViewButton key='front'  activeIcon={activeIcons.frontActive} disabledIcon={disabledIcons.frontDisabled} name="Front" viewChanger={viewChanger} />
                <ViewButton key='right' activeIcon={activeIcons.rightActive} disabledIcon={disabledIcons.rightDisabled} name="Right" viewChanger={viewChanger} />
                <ViewButton key='lower' activeIcon={activeIcons.lowerActive} disabledIcon={disabledIcons.lowerDisabled} name="Lower" viewChanger={viewChanger} />
            </ViewFlex>
            )
        }
        else if (currentView === 'Left') {
            return (
                <ViewFlex>
                <ViewButton key='upper' activeIcon={activeIcons.upperActive} disabledIcon={disabledIcons.upperDisabled} name="Upper" viewChanger={viewChanger} />
                <ViewButton key='left' isActive activeIcon={activeIcons.leftActive} disabledIcon={disabledIcons.leftDisabled} name="Left" viewChanger={viewChanger} />
                <ViewButton key='front'  activeIcon={activeIcons.frontActive} disabledIcon={disabledIcons.frontDisabled} name="Front" viewChanger={viewChanger} />
                <ViewButton key='right' activeIcon={activeIcons.rightActive} disabledIcon={disabledIcons.rightDisabled} name="Right" viewChanger={viewChanger} />
                <ViewButton key='lower' activeIcon={activeIcons.lowerActive} disabledIcon={disabledIcons.lowerDisabled} name="Lower" viewChanger={viewChanger} />
            </ViewFlex>
            )
        }
        else if (currentView === 'Front') {
            return (
                <ViewFlex>
                <ViewButton key='upper' activeIcon={activeIcons.upperActive} disabledIcon={disabledIcons.upperDisabled} name="Upper" viewChanger={viewChanger} />
                <ViewButton key='left' activeIcon={activeIcons.leftActive} disabledIcon={disabledIcons.leftDisabled} name="Left" viewChanger={viewChanger} />
                <ViewButton key='front' isActive activeIcon={activeIcons.frontActive} disabledIcon={disabledIcons.frontDisabled} name="Front"  viewChanger={viewChanger}/>
                <ViewButton key='right' activeIcon={activeIcons.rightActive} disabledIcon={disabledIcons.rightDisabled} name="Right" viewChanger={viewChanger} />
                <ViewButton key='lower' activeIcon={activeIcons.lowerActive} disabledIcon={disabledIcons.lowerDisabled} name="Lower"  viewChanger={viewChanger}/>
            </ViewFlex>
            )
        } else if (currentView === 'Right') {
            return (
                <ViewFlex>
                <ViewButton key='upper' activeIcon={activeIcons.upperActive} disabledIcon={disabledIcons.upperDisabled} name="Upper"  viewChanger={viewChanger} />
                <ViewButton key='left' activeIcon={activeIcons.leftActive} disabledIcon={disabledIcons.leftDisabled} name="Left" viewChanger={viewChanger} />
                <ViewButton key='front' activeIcon={activeIcons.frontActive} disabledIcon={disabledIcons.frontDisabled} name="Front" viewChanger={viewChanger} />
                <ViewButton key='right' isActive activeIcon={activeIcons.rightActive} disabledIcon={disabledIcons.rightDisabled} name="Right"  viewChanger={viewChanger}/>
                <ViewButton key='lower' activeIcon={activeIcons.lowerActive} disabledIcon={disabledIcons.lowerDisabled} name="Lower" viewChanger={viewChanger} />
            </ViewFlex>
            )
        } else if (currentView === 'Lower') {
            return (
                <ViewFlex>
                <ViewButton key='upper' activeIcon={activeIcons.upperActive} disabledIcon={disabledIcons.upperDisabled} name="Upper" viewChanger={viewChanger} />
                <ViewButton key='left' activeIcon={activeIcons.leftActive} disabledIcon={disabledIcons.leftDisabled} name="Left" viewChanger={viewChanger} />
                <ViewButton key='front' activeIcon={activeIcons.frontActive} disabledIcon={disabledIcons.frontDisabled} name="Front"  viewChanger={viewChanger}/>
                <ViewButton key='right' activeIcon={activeIcons.rightActive} disabledIcon={disabledIcons.rightDisabled} name="Right" viewChanger={viewChanger} />
                <ViewButton key='lower' isActive activeIcon={activeIcons.lowerActive} disabledIcon={disabledIcons.lowerDisabled} name="Lower" viewChanger={viewChanger} />
            </ViewFlex>
            )
        }

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