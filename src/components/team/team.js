import React from 'react'
import { useState } from 'react';
import {SecondDiv,FirstDiv,N1,N2,P3,P4,P5,P6,Container,Division1,Division2,Division3,Division4,U,U1,U2,U3,U4,U5,U6,Division5,Division6,Division7,Division8,Division9,Holder,Name,P1,P2,Division10,HeroImage10,HeroImage11,HeroImage12,HeroImage13,HeroImage14,HeroImage15,HeroImage16,HeroImage17,HeroImage18,HeroImage19,HeroImage20,HeroImage21,HeroImage22,Teambutton1,Teambutton2,Buttondiv,HeroImage,HeroImage1,HeroImage2,HeroImage3,HeroImage4,HeroImage5,HeroImage6,HeroImage7,HeroImage8,HeroImage9,LargeHeading,LargeHeading1,LargeHeading2,LargeHeading3,LargeHeading4,LargeHeading5,LargeHeading6,LargeHeading7,LargeHeading8 } from './teamstyle'
import styled, { keyframes, css } from "styled-components";
function Team() {
    const [show2022,setShow2022] = useState(true);
    const firstButtonClick = () =>{
        setShow2022(true);
    };
    const secondButtonClick = () =>{
        setShow2022(false);
    }
    const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    
  }
`;


const AnimatedDiv = styled.div`
  opacity: 0;
  transform: translateY(-20px);
  ${({ show }) =>
    show
      ? css`
          animation: ${fadeIn} 0.5s ease-in-out forwards;
        `
      : css`
          animation: ${fadeIn} 0.5s ease-in-out forwards;
        `}
`;
    return (
        <Container>
            
            <HeroImage21 src="\images\photo_2022-10-06_20-25-42.jpg"/>
            
            <br/>
            <Buttondiv>
            <Teambutton1 onClick={secondButtonClick}>2021</Teambutton1>
            &nbsp;
            &nbsp;
            <Teambutton1 onClick={firstButtonClick}>2022</Teambutton1>
            </Buttondiv>
            <br/>
            <br/><AnimatedDiv show={show2022}>
            {show2022 ? (
            <FirstDiv>
            <LargeHeading1><U><b>Community <br/>Tinkerers 2022-2023</b></U></LargeHeading1>
            <br/>
            <br/>
            <Holder>
            <Division1>
                
                <HeroImage src="/images/Prajith.jpg"/> 
                <Name>Prajith Menon</Name>
                    <P1>Campus lead</P1>
                </Division1>
                <Division1>
                <HeroImage1 src="/images/Rithin.jpg"/>
                
                <Name>Rithin Samuel</Name>
                    <P1>Tech lead</P1>
                </Division1>
            
            </Holder>
            
            <Holder>
                <Division1> 
            <HeroImage2 src="/images/Lekshmipriya.jpg"/>
            <Name>Lekshmi Priya V</Name>
                    <P1>Media Lead</P1>
                    </Division1>
                    <Division1>
                        <HeroImage3 src="/images/Devipriya.jpeg"/>
                        <Name>Devipriya S</Name>
                    <P1>WIT Lead</P1>
                    </Division1>
                    <Division1>       
            <HeroImage4 src="/images/Abin.jpg"/>
            <Name>Abin T Sunil</Name>
                    <P1>Co-Tech Lead</P1>
            </Division1>
            </Holder>
    
            <Holder>
                <Division1> 
            <HeroImage5 src="/images/Elizabeth.jpg"/>
            <Name>Elizabeth Rachel</Name>
                    <P1>Design Team</P1>
                    </Division1>
                    <Division1>
                        <HeroImage6 src="/images/Vyshnavi.jpg"/>
                        <Name>Vyshnavi V</Name>
                    <P1>Design Team</P1>
                    </Division1>
                    <Division1>       
            <HeroImage7 src="/images/Sreyas.jpg"/>
            <Name>Sreyas M Pillai</Name>
                    <P1>Web Team</P1>
            </Division1>
            <Division1>       
            <HeroImage8 src="/images/Bestin.jpg"/>
            <Name>Bestin K Benny</Name>
                    <P1>Web Team</P1>
            </Division1>
            </Holder>

            <Holder>
                <Division1> 
            <HeroImage5 src="/images/Vismaya.jpg"/>
            <Name>Vismaya Prasad</Name>
                    <P1>Media Team</P1>
                    </Division1>
                    <Division1>
                        <HeroImage6 src="/images/Vivek.jpg"/>
                        <Name>Vivek Vijayan</Name>
                    <P1>Media Team</P1>
                    </Division1>
                    <Division1>       
            <HeroImage7 src="/images/Sreelekshmi.jpeg"/>
            <Name>Sreelekshmi S</Name>
                    <P1>Media Team</P1>
            </Division1>
            <Division1>       
            <HeroImage8 src="/images/Lekshmi.jpg"/>
            <Name>Lekshmi R Nair</Name>
                    <P1>Media Team</P1>
            </Division1>
            </Holder>
            </FirstDiv>
            ) : (


            <SecondDiv>
            <LargeHeading1><U><b>Community <br/>Tinkerers 2021-2022</b></U></LargeHeading1>
            <br/>
            <br/>
            <Holder>
            <Division1>
                
                <HeroImage src="/images/Akshay.jpg"/> 
                <Name>Akshay Pradeep</Name>
                <P1></P1>

                </Division1>
                <Division1>
                <HeroImage1 src="/images/Rithin.jpg"/>
                <div>
                <Name>Harikrishnan B</Name>
                <P1></P1>

                   </div>
                </Division1>
            
            </Holder>
            
            <Holder>
                <Division1> 
            <HeroImage2 src="/images/Lekshmipriya.jpg"/>
            <Name>Devikaa D</Name>
            <P1></P1>

                    </Division1>
                    <Division1>
                        <HeroImage3 src="/images/Avani.jpg"/>
                        <Name>Avani S</Name>
                        <P1></P1>

                    </Division1>
                    <Division1>       
            <HeroImage4 src="/images/Abin.jpg"/>
            <Name>Sreelakshmi M</Name>
            <P1></P1>

            </Division1>
            </Holder>
    
            <Holder>
                <Division1> 
            <HeroImage5 src="/images/Alwin.jpg"/>
            <Name>Alwin John</Name>
            <P1></P1>

                    </Division1>
                    <Division1>
                        <HeroImage6 src="/images/Jeffin.jpg"/>
                        <Name>Jeffin G Benny</Name>
                        <P1></P1>

                    </Division1>
                    <Division1>       
            <HeroImage7 src="/images/Hanna.jpg"/>
            <Name>Hanna V Sleeba</Name>
            <P1></P1>

            </Division1>
            <Division1>       
            <HeroImage8 src="/images/Manuel.jpg"/>
            <Name>Manuel Johnson</Name>
            <P1></P1>
            </Division1>
            </Holder>
            
            </SecondDiv>)}</AnimatedDiv>
            
            
            

        </Container>
    
        )}

export default Team;