import styled from "styled-components";


export const Container = styled.div`
box-sizing:border-box;
padding:0;
margin:0;
`;

export const Heading  = styled.p`
font-size:45px;
font-weight:700;
padding-left:3em;
padding-top:3em;
font-family: 'Raleway';
`;

export const Container1  = styled.div`
padding-top:3em;
display:flex;

@media (max-width: 768px) {
    
        display: flex;
        flex-direction: column;
        align-items: center;
    
}
`;

export const Block1  = styled.img`
margin-top:4em;
width:45%;
height:35em;

@media (max-width: 768px) {
    width:100%
}
`;

export const Block2 = styled.div`
@media (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    align-items: center;

}

`;

export const Heading1  = styled.h2`
font-family: 'Raleway';
 padding-bottom:3em;
 word-spacing:5px;
`;

export const Container2  = styled.form`
@media (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    align-items: center;

}
}
`;

export const Label1  = styled.label`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 38px;

`;

export const Input1  = styled.input`
padding:2em;
width: 20em;
height: 3em;
border: 1px solid #000000;
border-radius: 10px;
display:block;
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

&:hover{
    transform: scale(1.1);
    transition-duration: 0.5s;
}
`;

export const Textarea1 = styled.textarea`
width: 46em;
height: 12em;
border: 1px solid #000000;
border-radius: 10px;
display:block;
padding:2em;

@media (max-width: 768px) {
    
    width:20em;
}
`;

export const Box1 = styled.div`
 padding-right:6em;

 @media (max-width: 768px) {
    
    padding-right:10px;
    padding-bottom:2em;

}
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
margin-bottom:5em;

@media (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    align-items: center;

}
`;





