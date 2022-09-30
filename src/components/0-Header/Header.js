import React from "react";
import { Container,Row,HeaderImage,HeaderContent,Event,Headerlogo,LImage } from "./HeaderStyles";

function Welcome(){
    return(
        <Container>
            <Row>
                <HeaderImage src="/images/Logo(Black).png"/>
                <HeaderContent>
                    <Event>Home</Event>
                    <Event>About</Event>
                    <Event>Events</Event>
                </HeaderContent>
                <Headerlogo>
                    <LImage src="/images/Linktree.png"/>
                    <LImage src="/images/LinkedIn.png"/>
                    <LImage src="/images/Instagram logo.png"/>
                </Headerlogo>
            </Row>
        </Container>
    )
        
    
}

export default Welcome;