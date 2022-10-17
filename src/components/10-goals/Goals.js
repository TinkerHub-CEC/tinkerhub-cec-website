import React from 'react'

import { Container, Box, Row, Heading, Heading2, Red, Blue, Yellow, Green, Purple } from './GoalsStyle'

function Initiatives() {
    return (
        <Container>
            <Heading>Goals...</Heading>
            <Row>
                <Heading2>1.Community</Heading2>
                <Box>Promoting a sense of togetherness and belonging, that will help to learn and teach new things.</Box>
            </Row>
            
            <Row>
                <Heading2>2.Open-Source</Heading2>
                <Box>To promote the spirit of hacking, tinkering, and writing code, not only for profit, but for fun. To build quality free software that specifically empowers people with tools to run their livelihoods and power the economy.</Box>
            </Row>

            <Row>
                <Heading2>Career-Training</Heading2>
                <Box>By building integrated collection of programs intended to develop students' core academic, technical and employability skills.</Box>
            </Row>
        </Container>
    )
}

export default Initiatives;