import Link from 'next/link'
import React, { useState } from 'react';
import { Navbar,Nav_logo,Logo,Nav_items,Bar,Nav_toggle,Menu,Nav1,Nav2,Nav_media,Media_logo} from "./HeaderStyles";

const Welcome = () => {
    const [isOpen, setIsOpen]=useState(false);
    return(
            <Navbar>                
                <Nav_logo href="#">
                    <Logo src="/images/Logo(Black).png"/>
                </Nav_logo>  

                <Nav_toggle onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Nav_toggle> 
 

                <Nav_items isOpen={isOpen}>
                    <Nav1>
                        <Link href="/" passHref><Menu>Home</Menu></Link>
                        <Link href="/about" passHref><Menu>About</Menu></Link>  
                        <Link href="/events" passHref><Menu>Events</Menu></Link>          
                    </Nav1>

                    <Nav2>
                        <Nav_media href="https://linktr.ee/Tinkerhub_cec">
                            <Media_logo src="/images/Linktree.png"/>
                        </Nav_media>
                        <Nav_media href="https://www.linkedin.com/company/tinkerhub-cec/">
                            <Media_logo src="/images/LinkedIn.png"/>
                        </Nav_media>
                        <Nav_media href="https://www.instagram.com/tinkerhub.cec/">
                            <Media_logo src="/images/Instagram logo.png"/>
                        </Nav_media>
                    </Nav2>

                </Nav_items>

                           
            </Navbar>
       
    )
        
    
}

export default Welcome;