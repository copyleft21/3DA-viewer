import React from 'react'
import styled from 'styled-components'
import JawView from './JawView'
import maxilla from '../assets/imgs/views/aligner-info-upper.svg'; 
import mandible from '../assets/imgs/views/aligner-info-lower.svg'; 


const jaws = {
    maxilla,
    mandible,
}

const JawViewBox = () => {
    return (
        <Flex>
           <JawView name="Upper Aligners" jawImg={jaws.maxilla} />
           <JawView name="Lower Aligners" jawImg={jaws.mandible} /> 
        </Flex>
    )
}

const Flex = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
margin-bottom: 2rem;
margin-top: 2rem;
`

export default JawViewBox;