import React from "react";
import {Heading,Button,P,Card,Container,Title,Span,Card_image} from './EventStyles';

export const Event = () => {
  return (
    <div>
    <Heading>Events</Heading>
    <Button onClick={Card1}>All</Button>
    <Button onClick={Card2}>Open-Source</Button>
    <Button onClick={Card3}>Mobile</Button>
    <Button onClick={Card4}>Design</Button>
    <Button onClick={Card5}>Internet of Things</Button>
    <Button onClick={Card6}>Hackathons</Button>
    <Button onClick={Card7}>Robotics</Button>
    <Container>
    <Card id="open-source" onClick={link1} style={{cursor:'pointer'}}>
    <Card_image src="/images/ph.jpg" alt="Event"></Card_image>
          <Title>Title1</Title>          
       <P>Some quick example text to build on the card title and make up the bulk of the cards content.</P>
       <br></br><Span>flutter</Span>
      <Span>mobile</Span>
      <Span>hackathon</Span>
                          
    </Card>
    <Card  id="Mobile" onClick={link2} style={{cursor:'pointer'}}>
    <Card_image  src="/images/ph.jpg" alt="Event"></Card_image>
      <Title>Title2</Title>          
       <P>Some quick example text to build on the card title and make up the bulk of the cards content.</P>
       <br></br><Span>flutter</Span>
      <Span>mobile</Span>
      <Span>hackathon</Span>
                          
    </Card>
    <Card  id="Design" onClick={link3} style={{cursor:'pointer'}}>
    <Card_image  src="/images/ph.jpg" alt="Event"></Card_image>
          <Title>Title3</Title>          
       <P>Some quick example text to build on the card title and make up the bulk of the cards content.</P>
       <br></br><Span>flutter</Span>
      <Span>mobile</Span>
      <Span>hackathon</Span>
                          
    </Card>
    <Card id="Internet of Things" onClick={link4} style={{cursor:'pointer'}}>
    <Card_image  src="/images/ph.jpg" alt="Event"></Card_image>
          <Title>Title4</Title>          
       <P>Some quick example text to build on the card title and make up the bulk of the cards content.</P>
       <br></br><Span>flutter</Span>
      <Span>mobile</Span>
      <Span>hackathon</Span>
                          
    </Card>
    <Card id="Hackathons" onClick={link5} style={{cursor:'pointer'}}>
    <Card_image  src="/images/ph.jpg" alt="Event"></Card_image>
          <Title>Title5</Title>          
          <P>Some quick example text to build on the card title and make up the bulk of the cards content.</P>
          <br></br><Span>flutter</Span>
      <Span>mobile</Span>
      <Span>hackathon</Span>
                          
    </Card>
    <Card id="Robotics" onClick={link6} style={{cursor:'pointer'}}>
    <Card_image  src="/images/ph.jpg" alt="Event"></Card_image>
          <Title>Title6</Title>          
          <P>Some quick example text to build on the card title and make up the bulk of the cards content.</P>
        <br></br><Span>flutter</Span>
      <Span>mobile</Span>
      <Span>hackathon</Span>
                          
    </Card>
    <Card id="x1" onClick={link7} style={{cursor:'pointer'}}>
    <Card_image  src="/images/ph.jpg" alt="Event"></Card_image>
          <Title>Title7</Title>          
       <P>Some quick example text to build on the card title and make up the bulk of the cards content.</P>
       <br></br>  <Span>flutter</Span>
      <Span>mobile</Span>
      <Span>hackathon</Span>
                          
    </Card>
    <Card id="x2" onClick={link8} style={{cursor:'pointer'}}>
    <Card_image  src="/images/ph.jpg" alt="Event"></Card_image>
          <Title>Title8</Title>          
       <P>Some quick example text to build on the card title and make up the bulk of the cards content.</P>
       <br></br><Span>flutter</Span>
      <Span>mobile</Span>
      <Span>hackathon</Span>
                          
    </Card>
    </Container>
    
    </div>
  )
}


//  function link1(){
//   window.location.href="https://www.google.com/";
//  }
//  function link2(){
//   window.location.href="https://www.google.com/";
//  }
//  function link3(){
//   window.location.href="https://www.google.com/";
//  }
//  function link4(){
//   window.location.href="https://www.google.com/";
//  }
//  function link5(){
//   window.location.href="https://www.google.com/";
//  }
//  function link6(){
//   window.location.href="https://www.google.com/";
//  }
//  function link7(){
//   window.location.href="https://www.google.com/";
//  }
//  function link8(){
//   window.location.href="https://www.google.com/";
//  }
//  function Card1() {

//   document.getElementById("open-source").style.display = "block";

//   document.getElementById("Mobile").style.display = "block";

//   document.getElementById("Design").style.display = "block";

//   document.getElementById("Internet of Things").style.display = "block";

//   document.getElementById("Hackathons").style.display = "block";

//   document.getElementById("Robotics").style.display = "block";

//   document.getElementById("x1").style.display = "block";

//   document.getElementById("x2").style.display = "block";

  


// }

// function Card2() {

// document.getElementById("open-source").style.display ="block";

//   document.getElementById("Mobile").style.display ="none";

//   document.getElementById("Design").style.display = "none";

//   document.getElementById("Internet of Things").style.display = "none";

//   document.getElementById("Hackathons").style.display = "none";

//   document.getElementById("Robotics").style.display = "none";

//   document.getElementById("x1").style.display = "none";

//   document.getElementById("x2").style.display = "none";

// }
// function Card3() {

//   document.getElementById("open-source").style.display ="none";

//   document.getElementById("Mobile").style.display ="block";

//   document.getElementById("Design").style.display = "none";

//   document.getElementById("Internet of Things").style.display = "none";

//   document.getElementById("Hackathons").style.display = "none";

//   document.getElementById("Robotics").style.display = "none";

//   document.getElementById("x1").style.display = "none";

//   document.getElementById("x2").style.display = "none";
// }

// function Card4() {

//   document.getElementById("open-source").style.display ="none";

//   document.getElementById("Mobile").style.display ="none";

//   document.getElementById("Design").style.display = "block";

//   document.getElementById("Internet of Things").style.display = "none";

//   document.getElementById("Hackathons").style.display = "none";

//   document.getElementById("Robotics").style.display = "none";

//   document.getElementById("x1").style.display = "none";

//   document.getElementById("x2").style.display = "none";

// }


// function Card5() {

//   document.getElementById("open-source").style.display ="none";

//   document.getElementById("Mobile").style.display ="none";

//   document.getElementById("Design").style.display = "none";

//   document.getElementById("Internet of Things").style.display = "block";

//   document.getElementById("Hackathons").style.display = "none";

//   document.getElementById("Robotics").style.display = "none";

//   document.getElementById("x1").style.display = "none";

//   document.getElementById("x2").style.display = "none";

// }


// function Card6() {

//   document.getElementById("open-source").style.display ="none";

//   document.getElementById("Mobile").style.display ="none";

//   document.getElementById("Design").style.display = "none";

//   document.getElementById("Internet of Things").style.display = "none";

//   document.getElementById("Hackathons").style.display = "block";

//   document.getElementById("Robotics").style.display = "none";

//   document.getElementById("x1").style.display = "none";

//   document.getElementById("x2").style.display = "none";


// }


// function Card7() {

//   document.getElementById("open-source").style.display ="none";

//   document.getElementById("Mobile").style.display ="none";

//   document.getElementById("Design").style.display = "none";

//   document.getElementById("Internet of Things").style.display = "none";

//   document.getElementById("Hackathons").style.display = "none";

//   document.getElementById("Robotics").style.display = "block";

//   document.getElementById("x1").style.display = "none";

//   document.getElementById("x2").style.display = "none";
// }


