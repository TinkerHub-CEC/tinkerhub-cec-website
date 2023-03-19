import React,{ useState, useEffect } from 'react'
import CountUp, { useCountUp } from 'react-countup';
import { Container,Number,Label, Internships, OpenSource, Sessions, Hackathons, Members, Projects, Row, Heading } from './InitiativeStyle'

function Initiatives() {
    function HighlightItem(props) {
        useCountUp({
            ref: 'counter',
            end: 1234567,
            enableScrollSpy: true,
            scrollSpyDelay: 5000,
          })};
        
          const [visible, setVisible] = useState(false);

          useEffect(() => {
            const handleScroll = () => {
              if (window.pageYOffset > 800) {
                setVisible(true);
              }
              
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);

    return (
        
        <Container visible={visible}>
            <Heading>Our Initiatives------&#62;</Heading>
            <Row>
                <Internships>
                    <Number><CountUp  end={10} enableScrollSpy/><span>+</span></Number>
                    <Label>Internships</Label>                    
                </Internships>
                <OpenSource>
                    <Number><CountUp  end={4} enableScrollSpy/><span>+</span></Number>
                    <Label>Open-Source Projects</Label>
                </OpenSource>
                <Sessions>
                    <Number><CountUp  end={20} enableScrollSpy/><span>+</span></Number>
                    <Label>Sessions</Label>
                </Sessions>
            </Row>
            
            <Row>
                <Hackathons>
                    <Number><CountUp  end={2} enableScrollSpy/><span>+</span></Number>
                    <Label>Hackathons</Label>
                </Hackathons>
                <Members>
                    <Number><CountUp  end={400} enableScrollSpy/><span>+</span></Number>
                    <Label>Members</Label>
                </Members>
                <Projects>
                    <Number><CountUp  end={50} enableScrollSpy/><span>+</span></Number>
                    <Label>Projects</Label> 
                </Projects>
            </Row>
        </Container>
    )
}

export default Initiatives;