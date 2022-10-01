import Link from 'next/link'
import React from 'react';
import { Container,Row,HeaderImage,HeaderContent,L,Headerlogo,LImage,I} from "./HeaderStyles";

function Welcome(){
    return(
        <Container>
            <Row>                
                <I href="#"><HeaderImage src="/images/Logo(Black).png"/></I>
                
                <HeaderContent>
                    <Link href="/" passHref><L>Home</L></Link>
                    <Link href="/about" passHref><L>About</L></Link>  
                    <Link href="/events" passHref><L>Event</L></Link>          
                </HeaderContent>


                <Headerlogo>
                    <I href="https://linktr.ee/Tinkerhub_cec"><LImage src="/images/Linktree.png"/></I>
                    <I href="https://www.linkedin.com/company/tinkerhub-cec/"><LImage src="/images/LinkedIn.png"/></I>
                    <I href="https://www.instagram.com/tinkerhub.cec/"><LImage src="/images/Instagram logo.png"/></I>
                </Headerlogo>
            </Row>
        </Container>
    )
        
    
}

export default Welcome;