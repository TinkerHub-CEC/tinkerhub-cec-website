import React from "react";

import {Box,Content,Heading,Form,Column,BlueButton} from './NewsletterStyles'

export const Letter = () => {
    
    return (
        <Box>
            <Heading>
                Want to learn something ?
            </Heading>
            <Content>
            Sign up to get emails about new posts and other info.<br></br>Unsubscribe anytime.
            </Content>
            <Form>
                
                <br/><label htmlFor="email"></label>
                <Column 
               
                type="email" 
                id="email" name="email"
                placeholder="yourname@gmail.com" 
                />
                <br/><br/>
                <BlueButton type="submit" value="GET UPDATES"/>
	    
            </Form>
        
        </Box>
    )
}
