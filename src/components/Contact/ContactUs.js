import React from "react";
import {Container,Heading,Container1,Block1,Block2,Heading1,Container2,Label1,Input1,MessButton,Textarea1,Box,Box1,Box2,Box3,Box4} from './ContactUsStyles'
import emailjs from 'emailjs-com';

export const  Contact = () => {
   function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm("service_6737jb8","template_1tlgige",e.target,"BikPyNKzx27u_7t21").then((result) => {
         window.location.reload()  
     }, (error) => {
         console.log(error.text);
     });
   }
    return(
        <Container>
            <Heading>Connect with Us </Heading>
            <Container1>
             <Block1 src="/images/contact-us.png " alt="Contact us image"></Block1>
             <Block2>
                <Heading1>We would love to hear from you.</Heading1>
                <Container2 onSubmit={sendEmail}>
                  <Box>
                    <Box1>
                       <Label1 htmlFor="name">Your Name (required)</Label1>
                       <Input1 type="text" id="name" name="name" placeholder="Your name" required/>
                    </Box1>

                    <Box2>
                       <Label1 htmlFor="email">Your email (required)</Label1>
                       <Input1 type="email" id="email" name="email" placeholder="Your Email" required/>
                    </Box2>
                  </Box>  
                    
                    <Box3>
                       <Label1 htmlFor="category">Category (optional)</Label1>
                       <Input1 type="text" id="category" name="category" placeholder="Category"/>
                    </Box3>

                    <Box4>
                       <Label1 htmlFor="subject">Your Message</Label1>
                       <Textarea1 id="subject" name="subject" placeholder="Message" ></Textarea1>
                    </Box4>

                    <MessButton type="submit" value="Send Message" >Send message</MessButton>
                </Container2>
             </Block2>
            </Container1> 
        </Container>
    )
}


