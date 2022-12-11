import styled from 'styled-components';

export const Container = styled.div`
margin:0;
margin-top: 4em;
box-sizing:border-box;
padding:0;
width:100%;
padding-bottom: 80px;
background-color: #2074FF;

@media screen and (max-width:768px){


}
`;

export const Heading = styled.div`
padding-top: 50px;
color: white;
margin-left: 5%;
font-size: 3.2rem;
font-weight: 800;
font-family: 'Raleway';


@media screen and (max-width:768px){
    text-align:left;
    padding-left:0.2em;
    padding-top:1em;
    margin-left:1em;
    font-size:70px;
    word-spacing:0.3em;
    
}
`;

export const Heading2 = styled.div`
margin-top: 5%;
margin-left: 0%;
font-size: 2.8rem;
font-weight: 800;

`;

export const Row = styled.div`
display:flex;
margin-top: 4em;
border: solid black;
background-color: white;
margin-left: 5%;
margin-right: 5%;
`;

export const Box = styled.div`
padding-top: 20px;
margin-left: 0%;
padding-bottom: 40px;
color: black;
width: 100%;
padding-right:2%;
font-weight:600;
`;

export const Number = styled.div`
color: black;
font-size: 7.0rem;
font-weight: 700;
margin-left: 2%;
margin-top: 3%;
`;

export const Brief = styled.div`
margin-left: 2%;
`;