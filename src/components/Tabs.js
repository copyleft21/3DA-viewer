import React from 'react'
import styled from 'styled-components'

const TabOption = ({type, tabChanger}) => {
    let text
    if (type === 'images') {
        text = 'Before & After'
    } else {
        text = 'Video Sequence'
    }
        return (<Option onClick={tabChanger(type)}>{text}</Option>)
}

const TabOptionActive = ({type}) => {
    let text
    if (type === 'images') {
        text = 'Before & After'
    } else {
        text = 'Video Sequence'
    }
        return (<OptionActive>{text}</OptionActive>)

}

const Tabs = ({currentTab, tabChanger}) => {
    if (currentTab === 'videos') {
        return (
            <Flex>
            <TabOptionActive type={currentTab} /> 
            <TabOption type="images" currentTab={currentTab} tabChanger={tabChanger} />
            </Flex>
        )
    } else if (currentTab === 'images') {
        return (
        <Flex>
        <TabOption type="videos" currentTab={currentTab} tabChanger={tabChanger} /> 
        <TabOptionActive type={currentTab} />
        </Flex>
        )
    }
}

const Option = styled.div`
    color: #00adef;
    font-weight: bold;
    margin: 0 10px;
    font-size: 1rem;
    cursor: pointer;
`
const OptionActive = styled.div`
    color: #00adef;
    font-weight: bold;
    margin: 0 10px;
    font-size: 1rem;
`

const Flex = styled.div`
border-radius: 10px;
padding-left: .4vw;
padding-right: .4vw;
background-color: #e0f0f8;
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
margin-bottom: 2rem;
margin-top: 2rem;
padding: 10px 0;
`

export default Tabs;