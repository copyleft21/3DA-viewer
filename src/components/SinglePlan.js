import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import sanityClient from "../client.js";
import Container from './Container';
import Logo from './Logo';


function SinglePlan() {
    const [planData, setplanData] = useState(null);
    const { slug } = useParams();
  
    useEffect(() => {
      sanityClient
        .fetch(
          `*[slug.current == $slug]{
            caseNum,
            patientName,
            slug
         }`,
          { slug }
        )
        .then((data) => setplanData(data[0]))
        .catch(console.error);
    }, [slug]);
  
    if (!planData) return <div>Loading...</div>;



    return (
    <PageContainer>
    <Header>
      <Logo />
      <Container>
      <p>{planData.patientName}</p>
      </Container>
    </Header>
  </PageContainer>
    );
}


const PageContainer  = styled.div`
  text-align: center;
`
const Header = styled.header`
  background-color: #e5e5e5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`


export default SinglePlan;