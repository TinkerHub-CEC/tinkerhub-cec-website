import styled from "styled-components";

 export const Heading =styled.h1`
  margin-left: 30px;
  margin-top: 50px;
  margin-bottom: 40px;
  align-self: flex-start;
  font-family: Segoe; font-size: 35px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px;
`;

export const Button = styled.button`
  background-color: #d9eaf0 ;
  color: #0096FF;
  border-radius:15px;
  cursor: pointer;
  border: none;  
  margin-left: 30px;
  margin-bottom: 5px;
  padding-left:4px;
  padding-right:4px;
  padding-top:2px;
  padding-bottom:2px;
  `;
  export const Container = styled.div`
  margin-top: 50px;
  float: center;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,3fr));
  grid-gap:80px;
 
`;
export const Row = styled.div`
   content: "";
   display: table;

`;
export const Card= styled.div`
    align-items: center;
    border: 0.5px solid grey;
    height:410px;
    max-width: 300px;
    margin-right:10px;
    margin-left: 10px;
 border-radius:10px;
 cursor: pointer;
`;

export const Title= styled.h2`
        margin-top: 30px;
        text-align: center;
         margin-bottom: 8px;
         font-family: Varela; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px;
    `;
         

export const Span = styled.span`
font-size:small;
color: gray;
display:inline-block;
padding-right:30px;
padding-left:10px;
position: relative;left: 2em;
margin-top:15px;

`;

export const Paragraph= styled.p`
  font-size: small;
  margin-left:8px;
  margin-right:8px;
`;
export const Card_image = styled.img`

height: 180px;
    width: 100%;
    object-fit: cover;
   display:block;
    border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;
export const All = styled.button`


`;