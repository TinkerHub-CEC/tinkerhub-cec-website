import React from "react";
import {Outer,Row,Text,Holder,Content,PeopleImage,Name,Br,Position} from "./peoplestyles";

const Meet = () =>{
    return(
       <Outer>
        
            <Text>Meet some amazing people!!!</Text>

            <Holder>

                <Content>
                    <PeopleImage src="/images/Alwin.jpg"/>
                    <Name>Alwin John</Name>
                    <Position>GitHub Campus Expert</Position>
                </Content>

                <Content>
                    <PeopleImage src="/images/Akshay.jpg"/>
                    <Name>Akshay Pradeep</Name>
                    <Position>CEO Octagon Technologies</Position>
                </Content>

                <Content>
                    <PeopleImage src="/images/Rithin.jpg"/>
                    <Name>Rithin Samuel</Name>
                    <Position>Javascript TinkerHub Learning Facilitator</Position>
                </Content>

                
            </Holder>
        
        </Outer>
    )   
}

export default Meet;