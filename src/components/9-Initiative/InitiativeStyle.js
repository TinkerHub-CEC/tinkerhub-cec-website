import styled from 'styled-components';

export const Container = styled.div`
margin-top: 4em;

@media screen and (max-width:768px){
    padding:0 3rem 1em 3rem;
    margin-top: 0;

`;

export const Heading = styled.div`
font-size: 3.2rem;
font-weight: 800;
padding-left: 2.3em;

@media screen and (max-width:768px){
    padding : 0.8em 8rem;
    font-size:70px;


`;

export const Row = styled.div`
display: grid;
grid-template-columns: auto auto auto;
margin-top: 3em;
padding: 0 8rem;
line-height: 1.4;

@media screen and (max-width:768px){
    // font-size: 2.4em;
}
`;

export const Number = styled.div`
font-size: 5.6rem;
font-weight: 400;

@media screen and (max-width:768px){
    font-size: 4.8em;
}
`;
 
export const Label = styled.div`
font-size: 1.8rem;
font-weight: 800;

@media screen and (max-width:768px){
    font-size: 1.9em;
    font-weight: 600;
`;

export const Internships = styled.div`
text-align: center;
vertical-align: middle;
float: left;
margin: 0 auto;
height: 240px;
width: 210px;
background: #FA4B4B;
border: solid black;
border-radius: 8%;
color: white;
padding:10px;
padding-top: 3em;

@media screen and (max-width:768px){
    padding-top: 2em;
}
`;

export const OpenSource = styled.div`
text-align: center;
vertical-align: middle;
float: left;
margin: 0 auto;
height: 240px;
width: 210px;
background: #1CB1BD;
border: solid black;
border-radius: 8%;
color: white;
padding:10px;
padding-top: 3em;

@media screen and (max-width:768px){
    padding-top: 2em;
}
`;

export const Sessions = styled.div`
text-align: center;
vertical-align: middle; 
float: left;
margin: 0 auto;
height: 240px;
width: 210px;
background: #8DBB00;
border: solid black;
border-radius: 8%;
color: white;
padding:10px;
padding-top: 3em;

@media screen and (max-width:768px){
    padding-top: 2em;
}
`;

export const Hackathons = styled.div`
text-align: center;
vertical-align: middle; 
float: left;
margin: 0 auto;
height: 240px;
width: 210px;
background: #367BEC;
border: solid black;
border-radius: 8%;
color: white;
padding:10px;
padding-top: 3em;

@media screen and (max-width:768px){
    padding-top: 2em;
}
`;

export const Members = styled.div`
text-align: center;
vertical-align: middle;
float: left;
margin: 0 auto;
height: 240px;
width: 210px;
background: #205B67;
border: solid black;
border-radius: 8%;
color: white;
padding:10px;
padding-top: 3em;

@media screen and (max-width:768px){
    padding-top: 2em;
}
`;

export const Projects = styled.div`
text-align: center;
vertical-align: middle;
float: left;
margin: 0 auto;
height: 240px;
width: 210px;
background: #FEC900;
border: solid black;
border-radius: 8%;
color: white;
padding:10px;
padding-top: 3em;

@media screen and (max-width:768px){
    padding-top: 2em;
}
`;