import styled from "styled-components";

export const Outer =styled.div`
background: #FA4B4B;
margin-top:5%;
margin-bottom:0;
padding:30px 8rem;
position:relative;;
`;

export const Row = styled.div`
`;

export const Text =styled.h2`
color:white;
font-size: 3.2rem;
font-weight: 600;
font-family: 'Raleway';
position:absolute;
left:2.6em;
`;

export const Holder=styled.div`
// display:flex;
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 140px;
flex-direction:row;
padding:20px 8rem;
position:relative;
top:4em;
justify-content:center;

`;

export const Content =styled.div`

`;


export const PeopleImage=styled.img`
width:288px;
height:288px;
border-radius:50%;
`;

export const Name =styled.h3`
text-align: center;
padding:10px;
padding-bottom:5px;
color:white;
`;

export const Position =styled.p`
text-align: center;
color:white;
padding-bottom:50px;
`;
