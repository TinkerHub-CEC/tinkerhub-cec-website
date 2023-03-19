import React from 'react'

import { Container, HeroContentAction,HeadingContainer,HeroVector, HeroGrid, HeroImage, HeroParagraph, LargeHeading, RedActionButton } from './HeroStyles'

export const Hero=()=> {
  return (
    <Container>
      <br /><br />
        <HeroGrid>
            <HeroContentAction>

                <HeadingContainer>
                  
                  <LargeHeading>TinkerHub</LargeHeading>
                  <LargeHeading> CE Chengannur</LargeHeading>
                </HeadingContainer>
                
                <HeroParagraph>Official TinkerHub Chapter of <br></br>College of Engineering, Chengannur</HeroParagraph>
                <RedActionButton href="https://join.tinkerhub.org/" target="_blank">Join Us</RedActionButton>
                
                <HeroVector src="/images/Blob-1.png"/>
                
            </HeroContentAction>

            <HeroImage src="/images/hero-bg.png"/>
        </HeroGrid>
        

    </Container> 
  )
}

 