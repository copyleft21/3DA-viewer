import React from 'react';
import styled from 'styled-components';


const ViewButton = ({activeIcon, disabledIcon, name}) => {
    return (
        <ViewOption>
            <ViewIcon src={disabledIcon} />
            <ViewLabel>{name}</ViewLabel>
        </ViewOption>

    )
}

const ViewIcon = styled.img`
    width: 43px;
    height: 40px;
    display: block;
    @media (max-width: 570px) {
        width: 35px;
  }
`

const ViewLabel = styled.p`
font-size: 14px;
    color: #324858;
`

const ViewOption = styled.div`
    width: 95px;
    height: 95px;
    border-radius: 50%;
    margin-left: .4vw;
    margin-right: .4vw;
    cursor: pointer;
    opacity: .5;
    z-index: 1020;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 15vw;
        height: auto;
  }
`

export default ViewButton;