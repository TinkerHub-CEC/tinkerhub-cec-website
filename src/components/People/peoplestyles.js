import styled from "styled-components";

export const Outer =styled.div`
background: #FA4B4B;
margin-top:5%;
margin-bottom:0;
padding:30px 8rem;
position:relative;;

@media screen and (max-width:768px){
    padding:0 3rem;
    // height:max-content;
    padding-bottom:175px;
}
`;

export const Text =styled.div`
color:white;
font-size: 3.2rem;
font-weight: 600;
position:absolute;
left:2.6em;

@media screen and (max-width:768px){
    padding : 0.8em 11rem;
    font-size:70px;
    left:0;
}
`;

export const Holder=styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 140px;
flex-direction:row;
padding:20px 8rem;
position:relative;
top:4em;
justify-content:center;

@media screen and (max-width:768px){
    top:12em;
    display:flex;
    flex-direction:column;
    grid-gap: 0;
`;

export const Content =styled.div`

`;


export const PeopleImage=styled.img`
width:288px;
height:288px;
border-radius:50%;

@media screen and (max-width:768px){
    display:flex;
    margin:0 auto;
    width:346px;
    height:346px;
}
`;

export const Name =styled.h3`
text-align: center;
padding:10px;
padding-bottom:5px;
color:white;

@media screen and (max-width:768px){
    font-size: 3.4em;
}
`;

export const Position =styled.p`
text-align: center;
color:white;
padding-bottom:50px;

@media screen and (max-width:768px){
    font-size: 2.4em;
    line-height: 1.2;

`;
