import React from 'react'

import { Container,Number,Label, Internships, OpenSource, Sessions, Hackathons, Members, Projects, Row, Heading } from './InitiativeStyle'

function Initiatives() {
    return (
        <Container>
            <Heading>Our Initiatives------&#62;</Heading>
            <Row>
                <Internships>
                    <Number>10+</Number>
                    <Label>Internships</Label>                    
                </Internships>
                <OpenSource>
                    <Number>4+</Number>
                    <Label>Open-Source Projects</Label>
                </OpenSource>
                <Sessions>
                    <Number>20+</Number>
                    <Label>Sessions</Label>
                </Sessions>
            </Row>
            
            <Row>
                <Hackathons>
                    <Number>2+</Number>
                    <Label>Hackathons</Label>
                </Hackathons>
                <Members>
                    <Number>400+</Number>
                    <Label>Members</Label>
                </Members>
                <Projects>
                    <Number>50+</Number>
                    <Label>Projects</Label> 
                </Projects>
            </Row>
        </Container>
    )
}

export default Initiatives;