import React from 'react'
import { Container, HeroContentAction, HeroGrid, HeroImage, HeroParagraph, LargeHeading } from './abcontentStyles'

export const Abcontent = () => {
    return(
        <Container>
            <HeroGrid>
                <HeroContentAction>
                    <LargeHeading>About Us</LargeHeading>
                    <HeroParagraph>TinkerHub CEC is a Campus Community initiative of <a href ="https:// tinkethub.org/">https:// tinkethub.org/</a> at <b>College Of Engineering Chengannur.</b></HeroParagraph>

<HeroParagraph>We at TinkerHub CE Chengannur aim to fulfill the mission and vision of Tinkerhub Foundation at our campus by empowering students with access to the knowledge they need to thrive in the new world.</HeroParagraph>

<HeroParagraph>TinkerHub Campus Community is for students who want to lear and teach technology We want our community members to understand and embrace the power of ortical thinking problem solving innovation, and entrepreneurship.</HeroParagraph>
                </HeroContentAction>
                <HeroImage src="/images/hifi.png"/>
            </HeroGrid>
        </Container>
    )
}