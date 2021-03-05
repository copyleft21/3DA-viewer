import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import sanityClient from "../client.js";
import Container from './Container';
import JawViewBox from './JawViewsBox.js';
import Logo from './Logo';
import Views from './Views.js';


function SinglePlan() {
    const [planData, setplanData] = useState(null);
    const [imageIndex, setImageIndex] = useState(0);
    const { slug } = useParams();
  
    useEffect(() => {
      sanityClient
        .fetch(
          `*[slug.current == $slug]{
            caseNum,
            patientName,
            front[]{
                asset->{url}
              },
            left[]{
                asset->{url}
              },
            right[]{
                asset->{url}
              },
            upper[]{
                asset->{url}
              },
            lower[]{
                asset->{url}
              },
            slug
         }`,
          { slug }
        )
        .then((data) => setplanData(data[0]))
        .catch(console.error);

    }, [slug]);
  
    if (!planData) return <div>Loading...</div>;
    

    /*
const Interval = setInterval(function(){ 
    // Looping forever
    
        if (imageIndex >= planData.front.length - 1) {
            clearInterval(Interval);
          
        } else {
            setImageIndex(imageIndex + 1 )
            console.log(planData.front.length)
        }
}, 5000);
*/

    return (
    <Header>
      <Logo />
      <p>{planData.patientName}</p>
      <Container>
      <Views />
      <ImagePlan src={planData.front[0].asset.url} alt="f" />
      <JawViewBox />
      </Container>
    </Header>
    );
}

const ImagePlan = styled.img`
width: 50%;
height: auto;
@media (max-width: 768px) {
        width: 100%;
  }
`

const Header = styled.div`
  text-align: center;
  background-color: #e5e5e5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: black;
`


export default SinglePlan;