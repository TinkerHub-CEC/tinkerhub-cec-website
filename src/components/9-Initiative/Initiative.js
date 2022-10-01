import React from 'react'

import { Container, Internships, OpenSource, Sessions, Hackathons, Members, Projects, Row, Heading } from './InitiativeStyle'

function Initiatives() {
    return (
        <Container>
            <Heading>Our Initiatives------&#62;</Heading>
            <Row>
                <Internships>10+ Internships</Internships>
                <OpenSource>4+ Open-Source Projects</OpenSource>
                <Sessions>20+ Sessions</Sessions>
            </Row>
            
            <Row>
                <Hackathons>2+ Hackathons</Hackathons>
                <Members>400+ Members</Members>
                <Projects>50+ Projects</Projects>
            </Row>
        </Container>
    )
}

export default Initiatives;