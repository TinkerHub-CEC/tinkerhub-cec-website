import React from "react";
import { useState } from 'react';
import {Box,Content,Heading,Form,Column,BlueButton} from './NewsletterStyles'

export const Letter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const subscribeMe = async (event) => {
        event.preventDefault();
        console.log(email);
        const res = await fetch("/api/subscribe", {
          body: JSON.stringify({ email: email }),
          headers: { 'Content-Type': 'application/json' },
          method: "POST",
        });

        const { error, message } = await res.json();
        setError(error);
        setSuccess(message);
      };

    const changeEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
      }

    return (
        <Box>
            <Heading>
                Want to learn something ?
            </Heading>
            <Content>
            Sign up to get emails about new posts and other info.<br></br>Unsubscribe anytime.
            </Content>
            <Form onSubmit={subscribeMe}>
                
                <br/><label htmlFor="email"></label>
                <Column 
                onChange={changeEmail}
                type="email" 
                id="email" name="email"
                placeholder="yourname@gmail.com" 
                />
                <br/><br/>
                <BlueButton type="submit" value="GET UPDATES"/>
	    
            </Form>
            {success 
          ? <span className="flex items-center text-sm font-bold text-green-700">{success}</span> 
          : <span className="flex items-center text-sm font-bold text-red-800">{error}</span>}
        </Box>
    )
}
