import React from 'react'
import { Container, HeroContentAction, HeroGrid, HeroImage, HeroParagraph, LargeHeading } from './abcontentStyles'

export const Abcontent = () => {
    return(
        <Container>
            <HeroGrid>
                
                <HeroContentAction>
                    <LargeHeading>About Us</LargeHeading>
                    <HeroParagraph>TinkerHub CEC is a Campus Community Initiative of <a href ="https:// tinkethub.org/">https:// tinkethub.org/</a> at <b>College Of Engineering Chengannur.</b></HeroParagraph>
                    <HeroParagraph>We at TinkerHub CE Chengannur aims to fulfill the mission and vision of Tinkerhub Foundation at our campus by empowering students with access to knowledge they need to thrive in this new world.</HeroParagraph>
                    <HeroParagraph>TinkerHub Campus Community is for students who want to learn and teach technology. We want our community members to understand and embrace the power of critical thinking, problem solving, innovation, and entrepreneurship.</HeroParagraph>
                </HeroContentAction>
                
                <HeroImage src="/images/hifi.png"/>
            </HeroGrid>
        </Container>
    )
}