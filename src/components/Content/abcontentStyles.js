import styled from "styled-components";

export const Container = styled.div`
display: flex;

flex-direction: column;
margin-top: 10em;
@media screen and (max-width:768px){
    width:90em;

}
`;


export const LargeHeading = styled.div`
font-size: 4.2rem;
font-weight: 700;
width: 100%;
@media screen and (max-width:768px){
   
    padding-left:0em;
    font-size:3em;
    word-spacing:0.3em;
}

`;
export const HeroContentAction = styled.div`
display: flex;
width: auto;
padding: 50px 0 0 50px;
margin-left:2em;
flex-direction: column;
@media screen and (max-width:768px){
    font-size:4.2rem;

    
    
}

`;
export const HeroImage = styled.img`
width: 681px;
height: 651px
margin-right:51px;
padding-right:100px;
@media screen and (max-width:768px){
    width:50em;
    height:50em;
    
    margin-left:350px;
    
    
    
}

`;

export const HeroGrid = styled.div`

display: flex;
justify-content: space-around;
margin: 0  0 3rem;
@media screen and (max-width:768px){
display:flex;
flex-direction:column
`;

export const HeroParagraph = styled.div`
font-size: 1.8rem;

width:70%;
font-weight: 450;
line-height: 1.5;
margin: 1.5em 0;
@media screen and (max-width:768px){
    font-size: 6rem;
    margin-left: 1px;
    width: 90%;
    


`;



