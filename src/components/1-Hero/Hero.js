import React from 'react'

import { Container, HeroContentAction, HeroGrid, HeroImage, HeroParagraph, LargeHeading, RedActionButton } from './HeroStyles'

export const Hero = () => {
  return (
    <Container>
        <HeroGrid>

            <HeroContentAction>
                <LargeHeading>TinkerHub CE Chengannur</LargeHeading>
                <HeroParagraph>Official TinkerHub Chapter of College of Engineering, Chengannur</HeroParagraph>
                <RedActionButton href="https://join.tinkerhub.org/" target="_blank">Join Us</RedActionButton>
                
            </HeroContentAction>

            <HeroImage src="/images/hero-bg.png"/>
        </HeroGrid>
        

    </Container> 
  )
}

