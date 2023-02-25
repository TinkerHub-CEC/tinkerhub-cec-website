import styled from 'styled-components';

export const Container = styled.div`
margin:0;
// margin-top: 7.4em;
box-sizing:border-box;
padding:0;
width:100%;
padding-bottom: 50px;
background-color: #2074FF;
position:relative;
top:110px;


@media screen and (max-width:768px){
    padding:0 3rem;
    padding-bottom:1em;
    height:fit-content;
    top:2%;


}
`;

export const Heading = styled.div`
padding-top: 40px;
color: white;
margin-left: 5%;
font-size: 3.2rem;
font-weight: 800;
font-family: 'Raleway';


@media screen and (max-width:768px){
    text-align:left;
    margin-left:1em;
    font-size:70px;
    word-spacing:0.3em;
    padding:0.8em 8rem;
    margin:0;
    
}
`;

export const Heading2 = styled.div`
margin-top: 5%;
margin-left: 0%;
font-size: 2.8rem;
font-weight: 800;

@media screen and (max-width:768px){
    font-size: 1.8em;

`;

export const Row = styled.div`
display:flex;
margin-top: 2em;
border: solid black;
background-color: white;
margin-left: 5%;
margin-right: 5%;

@media screen and (max-width:768px){
    font-size: 2.4em;
    margin:0 8rem;
    margin-bottom: 2em;
}
`;

export const Box = styled.div`
padding-top: 20px;
margin-left: 0%;
padding-bottom: 40px;
color: black;
width: 100%;
padding-right:2%;
font-weight:600;

@media screen and (max-width:768px){
    line-height: 1.4;
`;

export const Number = styled.div`
color: black;
font-size: 7.0rem;
font-weight: 700;
margin-left: 2%;
margin-top: 3%;

@media screen and (max-width:768px){
    font-size: 3em;
    padding:20px;
`;

export const Brief = styled.div`
margin-left: 2%;
`;