import styled from "styled-components";

export const Parent_Conatiner=styled.div`
// display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
margin-top: 100px;
padding: 1rem 7.2rem;

@media screen and (max-width:750px){
  top: 0%;
  padding: 8rem 14rem;
  margin-top: 0px;

`;

 export const Heading =styled.h1`
  color:#2f1b41;
  margin: 50px 0;
  align-self: flex-start;
  font-family: Segoe; 
  font-size: 45px; 
  font-style: normal;
  font-variant: normal;
  font-weight: 700; 
  line-height: 26.4px;
  text-shadow: 5px 5px 10px #87CEFA;

  @media screen and (max-width:750px){
    font-size:400%;
    // padding-bottom: 20px;  
  }
`;

export const Button = styled.button`
  display:relative;
  background-color: #d9eaf0 ;
  color: #0096FF;
  border-radius:15px;
  cursor: pointer;
  border: none; 
  margin-right: 30px;
  margin-bottom: 25px;
  padding:10px;
  
  @media screen and (max-width:750px){
    max-height: 100px;
    font-size:xx-large;
    width:max-content;
    width:500px;}
`;
  
export const Container = styled.div`
   margin-top: 50px;
   float: center;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) );
   grid-gap:3rem;
   grid-auto-rows: auto;
   row-gap:80px;
   @media screen and (max-width:750px){ 
   display: flex;
   flex-wrap: wrap;
   padding-top:20px;
   }  
 `;

export const Card= styled.div`
  background: linear-gradient(to top, #1b1b9d 0%, #27a5fe 100%);
  transition: 0.15s ease-out;
  align-items:center;
  flex-direction: column;
  display:flex;
  border: 0.5px solid lightgrey;
  height:245px;
  width: 300px;
  margin-right:0px;
  border-radius:10px;
  cursor: pointer;
  position:relative;
  box-shadow: 2px 2px 4px rgba(0.15,0.15,0.15,0.15);
 
  :hover{
   height:680px;
   transition: 0.25s ease-in;
 } 

 @media screen and (max-width:750px){
  width:100%;
  margin:10px;  
  height:400px;
  margin-bottom: 5em;
  
  :hover{
    height:800px;
}`;

export const Title= styled.h2`
  color: white;
  margin-top: 150px;
  text-align: center;
  // margin-bottom: 5px;
  font-family: Varela; 
  font-size: 24px; 
  // font-style: normal; 
  // font-variant: normal;
  font-weight: 600; 
  line-height: 26.4px;

  @media screen and (max-width:750px){
   font-size:xxx-large;
   margin-top:30rem;
}`;
         

export const Span = styled.span`
  font-size:small;
  color: white;
  display:inline-block;
  padding-left:10px;
  padding-right:20px;
  position: relative;
  left: 0em;
  margin-bottom:5px;

  @media screen and (max-width:750px){
    font-size:xx-large;
}`;

export const Paragraph= styled.p`
  font-size:large;
  color:white ;
  padding:37px 10px;

  @media screen and (max-width:750px){
    font-size:xx-large;
    margin-top:2rem;
}`;

export const Card_image = styled.img`
    height: 180px;
    left:50.5%;
    transform:translateX(-50%);
    width: 190px;
    object-fit: cover;
    top:-3em;
    position:absolute;
    display:block;
    border-radius:40px;
    box-shadow: 2px 2px 4px rgba(0.15,0.15,0.15,0.15);

    :hover:Card_image:{
      height:630px;
      transition: 0.25s ease-in;
     } 

     @media screen and (max-width:750px){
      width:60rem;
      height:30rem;
  
 }
   
`;

export const All_buttons= styled.div`
display:flex; 
padding: 20px 0;
`;

export const SpanElements=styled.div`
max-width: 100%;
width: 100%;
display:block;
float:left;
text-align:center;
align-items:start;
justify-content: space-between;
position: absolute;
left:0;
bottom:0;
right:0;
margin:auto;
padding-top: 20px;

@media screen and (max-width:750px){
  padding-top: 100px;
`;

export const Card_Content = styled.div`
overflow:hidden;
padding: 10px;
`;