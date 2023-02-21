import styled from 'styled-components';

// This is just an example to show case styled components. and media queries. feel free to edit this file. 
export const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
top: 3%;
left: 0%;

@media (max-width: 768px) {
    top: 0%;
    padding:0 3rem;
}
`;

export const HeadingContainer = styled.div`
display: flex;
flex-direction: row;

@media (max-width: 768px) {
    flex-direction: column;
   

}
`;

export const LargeHeading = styled.div`
font-size: 4.6rem;
font-weight: 700;
// width: 100%;
padding-right:15px;

@media (max-width: 768px) {
    font-size: 6.4em;
    // padding: 0 3.3em;
    width:96%;

}
`;

export const HeroContentAction = styled.div`

display: flex;
width: auto;
padding: 100px 0 0 0;
flex-direction: column;

@media (max-width: 768px) {



`;

export const HeroImage = styled.img`
width: 42em;

@media (max-width: 768px) {
    width: 100%;
    padding-top: 100px;
`;

export const HeroGrid = styled.div`

display: flex;
justify-content: space-around;
margin: 0 5rem 0 3rem;

@media (max-width: 768px) {
    flex-direction: column;
    padding:0 8rem 200px 8rem;
    position: relative;
}
`;

export const HeroParagraph = styled.p`
font-size: 1.8rem;
width:60%;
font-weight: 400;
line-height: 1.5;
margin: 1.5em 0;

@media (max-width: 768px) {
    font-size: 3.2em;
    width:100%;
    line-height: 1.2;
    margin: 1em 0;
`;

export const RedActionButton = styled.a`
border: 1px solid ${props => props.theme.colors.th_red};
background-color: ${props => props.theme.colors.th_red};
color: white;
font-weight: 700;
font-size: 1.6rem;
margin-top: 5em;
text-align: center;
padding: 8px 20px;
border-radius: 20px;
width:7.8em;
display: inline;
cursor: pointer;

@media (max-width: 768px) {
    position:absolute;
    bottom:0;
    align-self:center;
    font-size: 3.4em;
    border-radius: 100px;
    padding: 25px 10px;
    margin:0;


`;