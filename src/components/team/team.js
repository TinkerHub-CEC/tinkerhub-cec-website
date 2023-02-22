import React from 'react'
import {N1,N2,P3,P4,P5,P6,Container,Division1,Division2,Division3,Division4,U,U1,U2,U3,U4,U5,U6,Division5,Division6,Division7,Division8,Division9,Holder,Name,P1,P2,Division10,HeroImage10,HeroImage11,HeroImage12,HeroImage13,HeroImage14,HeroImage15,HeroImage16,HeroImage17,HeroImage18,HeroImage19,HeroImage20,HeroImage21,HeroImage22,Teambutton1,Teambutton2,Buttondiv,HeroImage,HeroImage1,HeroImage2,HeroImage3,HeroImage4,HeroImage5,HeroImage6,HeroImage7,HeroImage8,HeroImage9,LargeHeading,LargeHeading1,LargeHeading2,LargeHeading3,LargeHeading4,LargeHeading5,LargeHeading6,LargeHeading7,LargeHeading8 } from './teamstyle'
function Team() {
    return (
        <Container>
            
            <HeroImage21 src="\images\photo_2022-10-06_20-25-42.jpg"/>
            
            <br/>
            <Buttondiv>
            {/* <Teambutton1>2021</Teambutton1>
            &nbsp;
            &nbsp; */}
            <Teambutton2>2022</Teambutton2>
            </Buttondiv>
            <br/>
            <br/>
            
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
                <div>
                <Name>Rithin Samuel</Name>
                    <P2>Tech lead</P2></div>
                </Division1>
            
            </Holder>
            
            <Holder>
                <Division1> 
            <HeroImage2 src="/images/Lekshmipriya.jpg"/>
            <Name>Lekshmi Priya V</Name>
                    <P2>Media Lead</P2>
                    </Division1>
                    <Division1>
                        <HeroImage3 src="/images/Devipriya.jpeg"/>
                        <N1>Devipriya S</N1>
                    <P3>WIT Lead</P3>
                    </Division1>
                    <Division1>       
            <HeroImage4 src="/images/Abin.jpg"/>
            <N1>Abin T Sunil</N1>
                    <P4>Co-Tech Lead</P4>
            </Division1>
            </Holder>
    
            <Holder>
                <Division1> 
            <HeroImage5 src="/images/Elizabeth.jpg"/>
            <N1>Elizabeth Rachel</N1>
                    <P6>Design Team</P6>
                    </Division1>
                    <Division1>
                        <HeroImage6 src="/images/Vyshnavi.jpg"/>
                        <N1>Vyshnavi V</N1>
                    <P5>Design Team</P5>
                    </Division1>
                    <Division1>       
            <HeroImage7 src="/images/Sreyas.jpg"/>
            <N2>Sreyas M Pillai</N2>
                    <P5>Web Team</P5>
            </Division1>
            <Division1>       
            <HeroImage8 src="/images/Bestin.jpg"/>
            <N2>Bestin K Benny</N2>
                    <P5>Web Team</P5>
            </Division1>
            </Holder>

            <Holder>
                <Division1> 
            <HeroImage5 src="/images/Vismaya.jpg"/>
            <N1>Vismaya Prasad</N1>
                    <P6>Media Team</P6>
                    </Division1>
                    <Division1>
                        <HeroImage6 src="/images/Vivek.jpg"/>
                        <N2>Vivek Vijayan</N2>
                    <P5>Media Team</P5>
                    </Division1>
                    <Division1>       
            <HeroImage7 src="/images/Sreelekshmi.jpeg"/>
            <N2>Sreelekshmi S</N2>
                    <P5>Media Team</P5>
            </Division1>
            <Division1>       
            <HeroImage8 src="/images/Lekshmi.jpg"/>
            <N2>Lekshmi R Nair</N2>
                    <P5>Media Team</P5>
            </Division1>
            </Holder>
            
            {/* <Division4>
            <Division2>
            <LargeHeading2><U1><b>Design Team</b></U1></LargeHeading2> 
            <br/> 
            <Holder>
            <Division1>
                
                <HeroImage9 src="/images/profile.png"/> 
                <Name>Sreelekshmi M</Name>
                    <P1>Creative lead</P1>
                </Division1>
                <Division1>
                <HeroImage10 src="/images/profile.png"/>
                <Name>Sreelekshmi M dupe</Name>
                    <P1>Creative lead</P1>
                </Division1>
            
            </Holder>
            </Division2>
            
            <Division3>
            <LargeHeading3><U2><b>Content & PM</b></U2> </LargeHeading3>
            <br/>
            <Holder>
            <Division1>
                
                <HeroImage11 src="/images/profile.png"/> 
                <Name>Alwin John V4</Name>
                    <Position>Tech lead</Position>
                </Division1>
                <Division1>
                <HeroImage12 src="/images/profile.png"/>
                <Name>Harikrishnan</Name>
                    <P1>Campus lead</P1>
                </Division1>
            
            </Holder>
            </Division3>
            </Division4>
            <Division5>
            <LargeHeading4><U3><b>Tech Team</b></U3> </LargeHeading4> 
            <br/>
            <Holder>
            <Division1>
                
                <HeroImage13 src="/images/profile.png"/> 
                <Name>Alwin John</Name>
                    <P1>Tech lead</P1>
                </Division1>
                <Division1>
                <HeroImage14 src="/images/profile.png"/>
                <Name>Alwin John V4</Name>
                    <P1>Tech lead</P1>
                </Division1>
            
            </Holder>
            </Division5>
            
            <Division10>
            <Division6>
            <LargeHeading5><U4><b>Open Source Team</b></U4></LargeHeading5> 
            <br/>
            <Holder>
            <Division1>
                
                <HeroImage15 src="/images/profile.png"/> 
                <Name>Alwin John V2</Name>
                    <P1>Tech lead</P1>
                </Division1>
                <Division1>
                <HeroImage16 src="/images/profile.png"/>
                <Name>Alwin John V5</Name>
                    <Position>Tech lead</Position>
                </Division1>
            
            </Holder>
            </Division6>
            <Division7>
            <LargeHeading6><U5><b>Women In Tech</b></U5></LargeHeading6> 
            <br/>
            <Holder>
            <Division1>
                
                <HeroImage17 src="/images/profile.png"/> 
                <Name>Sreelekshmi M</Name>
                    <Position>Creative lead</Position>
                </Division1>
                <Division1>
                <HeroImage18 src="/images/profile.png"/>
                <Name>Sreelekshmi M</Name>
                    <Position>Creative lead</Position>
                </Division1>
            
            </Holder>
            </Division7>
            </Division10> */}
            <br/>
            <br/>
            <br/>
            {/* <Division8>
            <LargeHeading7><U6><b>Mentors</b></U6></LargeHeading7>
            <br/>
            <Holder>
            <Division1>
                
                <HeroImage19 src="/images/profile.png"/> 
                <Name>Alwin John</Name>
                    <P1>Tech lead</P1>
                </Division1>
                <Division1>
                <HeroImage20 src="/images/profile.png"/>
                <Name>Alwin John V1</Name>
                    <P1>Tech lead</P1>
                </Division1>
            
            </Holder>
            </Division8> */}
            

        </Container>
    
        )}

export default Team;