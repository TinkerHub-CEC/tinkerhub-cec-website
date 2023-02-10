import styled from 'styled-components';

// This is just an example to show case styled components. and media queries. feel free to edit this file. 
export const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
top: 3%;
left: 0%;
`;


export const LargeHeading = styled.div`
font-size: 4.6rem;
font-weight: 700;
width: 100%;
`;

export const HeroContentAction = styled.div`

display: flex;
width: auto;
padding: 100px 0 0 0;
flex-direction: column;
`;

export const HeroImage = styled.img`
width: 42em;
`;

export const HeroGrid = styled.div`

display: flex;
justify-content: space-around;
margin: 0 5rem 0 3rem;
`;

export const HeroParagraph = styled.p`
font-size: 1.8rem;
width:60%;
font-weight: 400;
line-height: 1.5;
margin: 1.5em 0;
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
`;