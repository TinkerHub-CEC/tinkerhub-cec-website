import React, { useEffect, useState } from "react";
import {Card,Card_image,Paragraph,Span,Title,Heading,Button,Container,All_buttons,SpanElements} from './EventStyles';
import Cards from './Cards'
export default Event;
function Event(){
    const[data,setData]=useState(Cards);
     const filterResult=(categ)=>{
      const result=Cards.filter((curCateg)=>{
      return curCateg.category===categ;
       });
     setData(result);  
     }
     return (
    <div>
    <Heading>Events</Heading>
    <All_buttons><Button onClick={() => setData(Cards)}>All</Button>
   <Button onClick={() => filterResult('Open-Source')}>Open-Source</Button>
    <Button onClick={() => filterResult('Mobile')}>Mobile</Button>
    <Button onClick={() => filterResult('Design')}>Design</Button>
    <Button onClick={() => filterResult('Iot')}>Internet of Things</Button>
     <Button onClick={() => filterResult('Hackathons')}>Hackathons</Button>
    <Button onClick={() => filterResult('Robotics')}>Robotics</Button>
    </All_buttons>
    <Container>
     {data.map((props)=>{
     const {image,title,discription,span1,span2,span3}=props;
     return(

          <Card>
            <Card_image src={props.image}></Card_image>
            <Title>{props.title}</Title>
            <br></br>
    <Paragraph>{props.discription}</Paragraph>
       <br></br><SpanElements><Span>{props.span1}</Span>
      <Span>{props.span2}</Span>
      <Span>{props.span3}</Span>  
      </SpanElements>                
    </Card>

      
     )
     
     }
     )}
    
      </Container>
      </div>
    )
}

