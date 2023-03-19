import React,{useEffect,useState} from 'react'

import { Container, Box, Row, Heading, Heading2, Number, Brief } from './GoalsStyle'

function Initiatives() {
    const [visible, setVisible] = useState(false);

          useEffect(() => {
            const handleScroll = () => {
              const element = document.getElementById('animated-div');
              const elementPosition = element.getBoundingClientRect();
        
              // Check if element is in view
              if (elementPosition.top < window.innerHeight && elementPosition.bottom >= 0) {
                setVisible(true);
              } else {
                setVisible(false);
              }
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
    return (
        <Container id='animated-div' visible={visible}>
            <Heading>Goals...</Heading>
            <Row>
                <Number>1</Number>
                <Brief>
                    <Heading2>Community</Heading2>
                    <Box>Promoting a sense of <span style={{color: 'red'}}>togetherness</span>{' '} and belonging, that will help to <span style={{color: 'blue'}}>learn</span>{' '} and teach new things.</Box>
                </Brief>
                
            </Row>
            
            <Row>
                <Number>2</Number>
                <Brief>
                    <Heading2>Open-Source</Heading2>
                    <Box>To promote the spirit of hacking, <span style={{color: 'orange'}}>tinkering</span>{' '}, and writing code, not only for profit, but for fun. To <span style={{color: 'green'}}>build</span>{' '} quality free software that specifically empowers people with tools to run their livelihoods and power the economy.</Box>
                </Brief>
            </Row>

            <Row>
                <Number>3</Number>
                <Brief>
                    <Heading2>Career-Training</Heading2>
                    <Box>By building integrated collection of programs intended to <span style={{color: 'magenta'}}>develop</span>{' '} students&apos; core academic, technical and employability <span style={{color: 'blue'}}>skills</span>{' '}.</Box>
                </Brief>
                
            </Row>
        </Container>
    )
}

export default Initiatives;
