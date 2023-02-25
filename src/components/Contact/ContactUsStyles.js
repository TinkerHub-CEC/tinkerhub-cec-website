import styled from "styled-components";


export const Container = styled.div`
box-sizing:border-box;
margin-top:3em;
margin:0;
width:100%;
position:relative;
top:4%;


@media screen and (max-width:768px){
    padding:2rem 3rem;
    top:2%;

}
`;

export const Heading  = styled.p`
font-size:38px;
font-weight:700;
padding:0 8rem;
font-family: 'Raleway';


@media screen and (max-width:768px){
    text-align:left;
    margin-left:0;
    word-spacing:0.3em;
    font-size:70px;
    padding:1em 8rem 0 8rem;
    
}
`;

export const Head  = styled.p`
width:90em;

@media screen and (max-width:768px){
    width:auto;
    
}
`;
export const Container1  = styled.div`
padding-top:3em;
display:flex;

@media screen and (max-width:768px){
    width:auto;
    display:flex;
    flex-direction:column;
    align-item:center;
    padding-top:0;
}
`;

export const Block1  = styled.img`
margin-top:4em;
margin-left:2em;
height:25em;
@media screen and (max-width:768px){
    height:50em;
    margin:0;
}
`;

export const Block2 = styled.div`
 margin-left:8em;
@media screen and (max-width:768px){
     margin-left:0em;
     margin-top:3em;
     padding:0 8rem;
}

`;

export const Heading1  = styled.h2`
font-family: 'Raleway';
 padding-bottom:3em;
 word-spacing:5px;

 @media screen and (max-width:768px){
    font-size:5.1em;
    padding-bottom:1.2em;
 }
`;

export const Container2  = styled.form`

@media screen and (max-width:768px){
    width:78em;
}


`;

export const Label1  = styled.label`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 38px;


@media screen and (max-width:768px){
    font-size:3.1em;
    
}

`;

export const Input1  = styled.input`
padding:2em;
width: 20em;
height: 3em;
border: 1px solid #000000;
border-radius: 10px;
display:block;
margin-top:1em;

@media screen and (max-width:768px){
    margin-top:2em;
    width:100%;
    height:4.5em;
    font-size:3em;
    
}
`;

export const MessButton  = styled.button`
background: #05BFCE;
border-radius: 50px ;
border:1px solid #05BFCE;
width:10em;
height:3.5em;
color:white;
font-weight:700;
margin-top:2em;
margin-bottom:10em;
cursor:pointer;
transition:all  0.5s ease-in-out;

&:hover{
    transform: scale(1.1);
     
}

@media screen and (max-width:768px){
 width:11em;
 height:3.5em; 
 font-size:3em;
 margin:2em auto;
}
`;

export const Textarea1 = styled.textarea`
width: 46em;
height: 12em;
border: 1px solid #000000;
border-radius: 10px;
display:block;
padding:2em;
resize:vertical;
margin-top:1em;

@media screen and (max-width:768px){
    margin-top:2em;
    width:100%;
    height:18em;
    font-size:3em;
    
}

`;

export const Box1 = styled.div`
 padding-right:6em;

 

`;

export const Box2 = styled.div`

`;

export const Box3 = styled.div`
 margin-bottom:3em;
`;

export const Box4 = styled.div`

`;

export const Box = styled.div`
display:flex;
margin-bottom:4em;

`;





